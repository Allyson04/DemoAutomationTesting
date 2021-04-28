/// <references types="Cypress" />

import testElements from '../elements/testElements'
const testelements = new testElements
const url = Cypress.config("baseurl")

class TestPage {
    acessWebSite(){
        cy.visit(url)
        cy.screenshot()
    }

    typeNameWrong(){
        cy.get(testelements.typeFirstName()).type('Boris')
        cy.get(testelements.typeLastName()).type('Brooks')
        cy.screenshot()
    }

    typeAddressWrong(){
        cy.get(testelements.typeAddress()).type('3634 Hillhaven Drive')
        cy.screenshot()
    }

    typeEmailAddressWrong(){
        cy.get(testelements.typeEmailAddress()).type('0x54t87v8h3o@temporary-mai.net')
        cy.screenshot()
    }

    typePhoneWrong(){
        cy.get(testelements.typePhone()).type('323-533-9765')
        cy.screenshot()
    }

    selectGenderWrong(){
        cy.get(testelements.selectGender()).select()
        cy.screenshot()
    }

    selectHobbiesWrong(){
        cy.get(testelements.selectHobbies1()).click()
        cy.screenshot()
    }

    selectLanguages(){
        cy.get(testelements.selectLanguagesBox()).click().scrollToView().get(testelements.selectLanguages()).click()
        cy.screenshot()
    }

    selectSkills(){
        cy.get(testelements.selectSkillsBox()).select('AutoCAD')
        cy.screenshot()
    }

    selectCountry(){
        cy.get(testelements.selectCountry()).select('Antarctica')
        cy.screenshot()
    }

    selectCountryBySearch(){
        cy.get(testelements.selectCountryBySearch()).click().get(testelements.selectCountryBySearchBox()).type('Nether').get(testelements.selectCountryBySearchItem()).click()
    }

    typeDateOfBirthWrong(){
        cy.get(testelements.typeYear()).select('1964')
        cy.get(testelements.typeMonth()).select('April')
        cy.get(testelements.typeDay()).select('15')
        cy.screenshot()
    }

    typePasswordWrong(){
        cy.get(testelements.typeFirstPassword()).type('KaFjkbna')
        cy.get(testelements.typeSecondPassword()).type('K1Fjkbn8')
        cy.screenshot()
    }

    submit(){
        cy.get(testelements.submit()).click()
        cy.screenshot()

    }

    validate(){
        cy.get(testelements.validate()).contains('The requested URL was not found on this server.')
        cy.screenshot()
    }



    acessWebSite(){
        cy.visit(url)
        cy.screenshot()
    }

    typeName(){
        cy.get(testelements.typeFirstName()).type('Pamela')
        cy.get(testelements.typeLastName()).type('Weber')
        cy.screenshot()
    }

    typeAddress(){
        cy.get(testelements.typeAddress()).type('2910 My Drive')
        cy.screenshot()
    }

    typeEmailAddress(){
        cy.get(testelements.typeEmailAddress()).type('9imwvu369p5@temporary-mail.net')
        cy.screenshot()
    }

    typePhone(){
        cy.get(testelements.typePhone()).type('3472684663')
        cy.screenshot()
    }

    selectGender(){
        cy.get(testelements.selectGender()).click()
        cy.screenshot()
    }

    selectHobbies(){
        cy.get(testelements.selectHobbies3()).click()
        cy.get(testelements.selectHobbies1()).click()
        cy.screenshot()
    }

    selectLanguages(){
        cy.get(testelements.selectLanguagesBox()).click()
        cy.wait(1000).get(testelements.selectLanguages()).click()
        cy.screenshot()
    }

    selectSkills(){
        cy.get(testelements.selectSkillsBox()).click().get(testelements.selectSkills()).select('AutoCAD')
        cy.screenshot()
    }

    selectCountry(){
        cy.get(testelements.selectCountry()).select('Antarctica')
        cy.screenshot()
    }

    SelectCountryBySearch(){
        cy.get(testelements.SelectCountryBySearch()).click()
        cy.get(testelements.SelectCountryBySearchBox()).type('Nether')
        cy.get(testelements.SelectCountryBySearchItem()).click()
    }

    typeDateOfBirth(){
        cy.get(testelements.typeYear()).select('1962')
        cy.get(testelements.typeMonth()).select('March')
        cy.get(testelements.typeDay()).select('15')
        cy.screenshot()
    }

    typePassword(){
        cy.get(testelements.typeFirstPassword()).type('v')
        cy.get(testelements.typeSecondPassword()).type('K1Fjkbn8')
        cy.screenshot()
    }

    submit(){
        cy.get(testelements.submit()).click()
        cy.screenshot()

    }

    validate(){
        cy.get(testelements.validate()).contains('The requested URL was not found on this server.')
        cy.screenshot()
    }
}


export default TestPage;
