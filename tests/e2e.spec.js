const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.',
      ),
    ).toBeVisible()
  })

  test('navigating to a pokemon page displays pokemon', async ({ page }) => {
    await page.goto('/')
    await page.getByText('Ivysaur').click()
    await expect(page.getByText('chlorophyl')).toBeVisible()
  })
})
