/* global Given, Then, When */

import TestPage from '../pageObjects/testPage'
const PageTest = new TestPage


Given("Acessar a tela de registro", () => {
    PageTest.acessWebSite()
})

When("Inserir informações para Registro", () => {
    PageTest.typeName(),
    PageTest.typeAddress(),
    PageTest.typeEmailAddress(),
    PageTest.typePhone(),
    PageTest.selectGender(),
    PageTest.selectHobbies(),
    PageTest.selectLanguages(),
    PageTest.selectSkills(),
    PageTest.selectCountry(),
    PageTest.selectCountryBySearch(),
    PageTest.typeDateOfBirth(),
    PageTest.typePassword()
})

And("Confirmar o submit", () => {
    PageTest.submit()
})

Then("Validar que me registrei com sucesso", () => {
    PageTest.validate()
})

When("Inserir informações erradas para Registro", () => {
    PageTest.typeNameWrong(),
    PageTest.typeAddressWrong(),
    PageTest.typeEmailAddressWrong(),
    PageTest.typePhoneWrong(),
    PageTest.selectGenderWrong(),
    PageTest.selectHobbiesWrong(),
    PageTest.selectLanguages(),
    PageTest.selectSkills(),
    PageTest.selectCountry(),
    PageTest.selectCountryBySearch(),
    PageTest.typeDateOfBirthWrong(),
    PageTest.typePasswordWrong()
})