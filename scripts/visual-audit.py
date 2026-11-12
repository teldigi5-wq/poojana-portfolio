# Visual/mobile audit (optional tool). Needs: pip install playwright && playwright install chrome
# Usage: python3 -m http.server 8765 &  then  AUDIT_URL=http://127.0.0.1:8765/ python3 scripts/visual-audit.py

import asyncio, json, sys
from playwright.async_api import async_playwright
import os
URL = os.environ.get('AUDIT_URL', 'http://127.0.0.1:8765/')
SIZES = [('phone-390', 390, 844), ('phone-360', 360, 780), ('tablet-768', 768, 1024)]
AUDIT = r"""() => {
  const cw = document.documentElement.clientWidth;
  const vis = e => { const r = e.getBoundingClientRect(); const cs = getComputedStyle(e); return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none' && cs.opacity !== '0'; };
  const clipped = el => { for (let p = el.parentElement; p; p = p.parentElement) { const o = getComputedStyle(p).overflowX; if (o === 'hidden' || o === 'clip' || o === 'auto' || o === 'scroll') return true; } return false; };
  const overflow = [...document.querySelectorAll('body *')].filter(e => vis(e) && e.getBoundingClientRect().right > cw + 2 && !clipped(e) && getComputedStyle(e).position !== 'fixed')
    .map(e => e.tagName.toLowerCase() + '.' + String(e.className.baseVal ?? e.className).split(' ')[0] + ' r=' + Math.round(e.getBoundingClientRect().right)).slice(0, 12);
  const taps = [...document.querySelectorAll('a,button,select,input,[role=button]')].filter(e => vis(e) && !e.closest('[aria-hidden=true]') && !e.closest('dialog:not([open])'))
    .filter(e => { const r = e.getBoundingClientRect(); return r.height < 40 || r.width < 40; })
    .map(e => (e.innerText || e.getAttribute('aria-label') || e.tagName).trim().replace(/\s+/g, ' ').slice(0, 30) + ' ' + Math.round(e.getBoundingClientRect().width) + 'x' + Math.round(e.getBoundingClientRect().height));
  const tiny = [...document.querySelectorAll('p,li,span,a,dd,dt,label,small,button')].filter(e => vis(e) && e.childNodes.length && [...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 2) && !e.closest('[aria-hidden=true]'))
    .filter(e => parseFloat(getComputedStyle(e).fontSize) < 11).map(e => e.textContent.trim().slice(0, 28) + ' ' + getComputedStyle(e).fontSize);
  return { docWidth: document.documentElement.scrollWidth, cw, overflow, smallTaps: [...new Set(taps)].slice(0, 25), smallTapCount: taps.length, tinyText: [...new Set(tiny)].slice(0, 20), tinyCount: tiny.length,
    rail: getComputedStyle(document.querySelector('.request-rail') || document.body).display, chamber: !!document.querySelector('.b3d-chamber') };
}"""
async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(channel='chrome', args=['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'])
        results = {}
        for name, w, h in SIZES:
            ctx = await browser.new_context(viewport={'width': w, 'height': h}, device_scale_factor=2, is_mobile=w < 700, has_touch=True)
            page = await ctx.new_page()
            errors = []
            page.on('pageerror', lambda e: errors.append(str(e)[:200]))
            page.on('console', lambda m: errors.append('console:' + m.text[:200]) if m.type == 'error' else None)
            await page.goto(URL, wait_until='load')
            await page.wait_for_timeout(5000)
            # scroll through so lazy islands mount
            H = await page.evaluate('document.documentElement.scrollHeight')
            for y in range(0, H, 600):
                await page.evaluate(f'scrollTo(0,{y})'); await page.wait_for_timeout(120)
            await page.wait_for_timeout(1500)
            await page.evaluate('scrollTo(0,0)'); await page.wait_for_timeout(600)
            results[name] = await page.evaluate(AUDIT)
            results[name]['errors'] = errors[:8]
            # section screenshots
            for sel in ['#home', '#boundary-card', '[data-claim-lab]', '[data-plan-lab]', '.b3d-chamber', '#contact']:
                el = await page.query_selector(sel)
                if not el: continue
                await el.scroll_into_view_if_needed(); await page.wait_for_timeout(900)
                safe = sel.strip('#.[]').replace('=', '-').replace('"', '')
                await page.screenshot(path=f'./audit-out/{name}-{safe}.png')
            await ctx.close()
        await browser.close()
        print(json.dumps(results, indent=1))
asyncio.run(main())
