import CheckboxPage from '../pageobjects/checkbox.page.ts'
import allureReporter from '@wdio/allure-reporter';
describe('Launch the website page and register', () =>  {
    it('As a user, I can log into the secure website', async () =>  {
        // allureReporter.addTag("web")
        // allureReporter.addAllureId("398")
        // allureReporter.addStep("Clickon signup button")
        allureReporter.addTestId("BAC-T17")
        allureReporter.addLabel("zephyr","BAC-T17")
        await CheckboxPage.open()
        allureReporter.addStep("Create new user")
        await expect(CheckboxPage.firstCheckbox).not.toBeSelected()
        await expect(CheckboxPage.lastCheckbox).toBeSelected()
    })

    it('Sample Feature: Sample Scenario web', async () =>  {
        allureReporter.addTestId("BAC-T18")
        allureReporter.addLabel("zephyr","BAC-T18")
        await CheckboxPage.open()
        await expect(CheckboxPage.firstCheckbox).not.toBeSelected()
        await CheckboxPage.firstCheckbox.click()
        await expect(CheckboxPage.firstCheckbox).toBeSelected()
    })
})
