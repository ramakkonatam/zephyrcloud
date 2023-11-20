import CheckboxPage from '../pageobjects/checkbox.page.ts'

describe('checkboxes', () =>  {
    it('user login with test name', async () =>  {
        await CheckboxPage.open()
        await expect(CheckboxPage.firstCheckbox).not.toBeSelected()
        await expect(CheckboxPage.lastCheckbox).toBeSelected()
    })

    it.skip('checkbox 1 should be enabled after clicking on it(Zephyr ID:KAN-T1)', async () =>  {
        await CheckboxPage.open()
        await expect(CheckboxPage.firstCheckbox).not.toBeSelected()
        await CheckboxPage.firstCheckbox.click()
        await expect(CheckboxPage.firstCheckbox).toBeSelected()
    })
})
