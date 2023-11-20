import CheckboxPage from '../pageobjects/checkbox.page.ts'

describe('checkboxes', () =>  {
    it('@TestCaseKey=KAN-T1 checkbox 2 should be enabled', async () =>  {
        await CheckboxPage.open()
        await expect(CheckboxPage.firstCheckbox).not.toBeSelected()
        await expect(CheckboxPage.lastCheckbox).toBeSelected()
    })

    it('@TestCaseKey=KAN-T1 checkbox 1 should be enabled after clicking on it', async () =>  {
        await CheckboxPage.open()
        await expect(CheckboxPage.firstCheckbox).not.toBeSelected()
        await CheckboxPage.firstCheckbox.click()
        await expect(CheckboxPage.firstCheckbox).toBeSelected()
    })
})
