import CheckboxPage from '../pageobjects/checkbox.page.ts'
import allureReporter from '@wdio/allure-reporter';
describe('Launch the website page and register', () =>  {
    it('Create user and give access', async () =>  {
        allureReporter.addAllureId("367")
        allureReporter.addStep("Navigateto the website")
        await CheckboxPage.open()
        allureReporter.addStep("Create new user")
        await expect(CheckboxPage.firstCheckbox).not.toBeSelected()
        await expect(CheckboxPage.lastCheckbox).toBeSelected()
    })

    it('click checkbox on website', async () =>  {
        allureReporter.addAllureId("367")
        allureReporter.addStep("Grant new access")
        await CheckboxPage.open()
        await expect(CheckboxPage.firstCheckbox).not.toBeSelected()
        await CheckboxPage.firstCheckbox.click()
        await expect(CheckboxPage.firstCheckbox).toBeSelected()
    })
})
