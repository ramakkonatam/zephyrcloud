import CheckboxPage from '../pageobjects/checkbox.page.ts'
import allureReporter from '@wdio/allure-reporter';
describe('Launch the website page and register', () =>  {
    it('As a user, I can log into the secure area', async () =>  {
        // allureReporter.addTag("web")
        // allureReporter.addAllureId("398")
        // allureReporter.addStep("Clickon signup button")
        await CheckboxPage.open()
        allureReporter.addStep("Create new user")
        await expect(CheckboxPage.firstCheckbox).not.toBeSelected()
        await expect(CheckboxPage.lastCheckbox).toBeSelected()
    })

    it('Sample Feature: Sample Scenario', async () =>  {
        await CheckboxPage.open()
        await expect(CheckboxPage.firstCheckbox).not.toBeSelected()
        await CheckboxPage.firstCheckbox.click()
        await expect(CheckboxPage.firstCheckbox).toBeSelected()
    })
})
