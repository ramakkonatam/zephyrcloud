import CheckboxPage from '../pageobjects/checkbox.page.ts'
import allureReporter from '@wdio/allure-reporter';
describe('Launch the website page and register', () =>  {
    it('User authentication with email and password', async () =>  {
        allureReporter.addAllureId("366")
        await CheckboxPage.open()
        await expect(CheckboxPage.firstCheckbox).not.toBeSelected()
        await expect(CheckboxPage.lastCheckbox).toBeSelected()
    })

    it('click checkbox on website', async () =>  {
        await CheckboxPage.open()
        await expect(CheckboxPage.firstCheckbox).not.toBeSelected()
        await CheckboxPage.firstCheckbox.click()
        await expect(CheckboxPage.firstCheckbox).toBeSelected()
    })
})
