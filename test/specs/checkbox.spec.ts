import CheckboxPage from '../pageobjects/checkbox.page.ts'

describe('checkboxes', () =>  {
    it('user login with test name and pwd', async () =>  {
        await CheckboxPage.open()
        await expect(CheckboxPage.firstCheckbox).not.toBeSelected()
        await expect(CheckboxPage.lastCheckbox).toBeSelected()
    })

    it('checkbox 1 should be enabled after clicking', async () =>  {
        await CheckboxPage.open()
        await expect(CheckboxPage.firstCheckbox).not.toBeSelected()
        await CheckboxPage.firstCheckbox.click()
        await expect(CheckboxPage.firstCheckbox).toBeSelected()
    })
})
