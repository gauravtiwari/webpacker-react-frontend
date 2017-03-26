import visit from './helpers/visit'

describe('When visiting the homepage', () => {
  it('shows header', async () => {
    const page = visit('/v2')

    const text = await page.evaluate(() => document.body.textContent).end()
    expect(text).toContain('Home')
  })
})
