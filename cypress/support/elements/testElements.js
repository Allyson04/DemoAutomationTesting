class testElements {
    typeFirstName = () => {return '[ng-model=FirstName]'}
    typeLastName = () => {return '[ng-model=LastName]'}
    typeAddress = () => {return '[ng-model=Adress]'}
    typeEmailAddress = () => {return '[type=email]'}
    typePhone = () => {return ':nth-child(4) > .col-md-4'}
    selectGender = () => {return '#basicBootstrapForm > :nth-child(5) > div > label > [value=FeMale]'}
    selectHobbies1 = () => {return '#basicBootstrapForm  > :nth-child(6)> .col-md-4 > div > input#checkbox1'}
    selectHobbies3 = () => {return '#basicBootstrapForm  > :nth-child(6)> .col-md-4 > div > input#checkbox3'}
    selectLanguagesBox = () => {return '#msdd'}
    selectLanguages = () => {return '#msdd + div > ul > :nth-child(4) > a'}
    selectSkillsBox = () => {return ':nth-child(8) > .col-md-3'}
    selectSkills = () => {return '#Skills'}
    selectCountry = () => {return '#countries'}
    selectCountryBySearch = () => {return '.select2-selection__arrow'}
    selectCountryBySearchBox = () => {return 'input[role=textbox]'}
    selectCountryBySearchItem = () => {return '#select2-country-results > :nth-child(1)'}
    typeYear = () => {return '#yearbox'}
    typeMonth = () => {return ':nth-child(11) > :nth-child(3) > .form-control'}
    typeDay = () => {return '#daybox'}
    typeFirstPassword = () => {return '#firstpassword'}
    typeSecondPassword = () => {return '#secondpassword'}

    submit = () => {return '#submitbtn'}
    validate = () => {return 'body > :nth-child(2)'}
}
export default testElements;