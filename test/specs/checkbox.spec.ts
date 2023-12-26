import CheckboxPage from '../pageobjects/checkbox.page.ts'
import allureReporter from '@wdio/allure-reporter';
describe('Launch the website page and register', () =>  {
    it('Launch the website and complete the user registration', async () =>  {
        // allureReporter.addTag("web")
        allureReporter.addAllureId("563")
        // allureReporter.addStep("Clickon signup button")
        // allureReporter.addTestId("BAC-T17")
        // allureReporter.addLabel("zephyr","BAC-T17")
        await CheckboxPage.open()
        allureReporter.addStep("Launch the website https://yahoo.com")
        allureReporter.addStep("Clickon the user registration")
        await expect(CheckboxPage.firstCheckbox).not.toBeSelected()
        await expect(CheckboxPage.lastCheckbox).toBeSelected()
    })

    it.skip('Sample Feature: Sample Scenario web', async () =>  {
        // allureReporter.addTestId("BAC-T18")
        // allureReporter.addLabel("zephyr","BAC-T18")
        await CheckboxPage.open()
        await expect(CheckboxPage.firstCheckbox).not.toBeSelected()
        await CheckboxPage.firstCheckbox.click()
        await expect(CheckboxPage.firstCheckbox).toBeSelected()
    })
})
