import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl+"/probleme") as Promise<any>;
  }

  getTitleText() {
    return element(by.css('inter-root h5')).getText() as Promise<string>;
  }
  setChampsValidesScenarioNominal() : void {
    element(by.id('prenomId')).sendKeys('tonprenom');
    element(by.id('nomId')).sendKeys('tonnom');
    // Sélectionner le X élément dans la zone de liste déroulante
    element(by.id('typeProblemeId')).all(by.tagName('option')).get(2).click();
    // Cliquer sur le bouton radio voulu
    element.all(by.id('NotificationId')).get(2).click();
    element(by.id('descriptionProblemeId')).sendKeys('Problème entre la chaise et le clavier...');
   }
   setChampsValidesScenarioAlternatifParMessageTexte() : void {
    element(by.id('prenomId')).sendKeys('tonprenom');
    element(by.id('nomId')).sendKeys('tonnom');
    // Sélectionner le X élément dans la zone de liste déroulante
    element(by.id('typeProblemeId')).all(by.tagName('option')).get(2).click();
    // Cliquer sur le bouton radio voulu
    element.all(by.id('NotificationId')).get(0).click();
    element(by.id('telephoneId')).sendKeys('5141231234');
    element(by.id('descriptionProblemeId')).sendKeys('Problème entre la chaise et le clavier...');
   }
   setChampsValidesScenarioAlternatifParCourriel() : void {

    element(by.id('prenomId')).sendKeys('tonprenom');
    element(by.id('nomId')).sendKeys('tonnom');
    // Sélectionner le X élément dans la zone de liste déroulante
    element(by.id('typeProblemeId')).all(by.tagName('option')).get(2).click();
    // Cliquer sur le bouton radio voulu
    element.all(by.id('NotificationId')).get(1).click();
    element(by.id('courrielId')).sendKeys('aa@bbb.com');
    element(by.id('courrielConfirmationId')).sendKeys('aa@bbb.com');
    element(by.id('descriptionProblemeId')).sendKeys('Problème entre la chaise et le clavier...');
   } 
   
  boutonSubmit() : ElementFinder { 
    return element(by.buttonText('Sauvegarder'));
  }   
  setZoneDescriptionProblemeCaracteresSuffisants() : void {
    element(by.id('descriptionProblemeId')).clear();
    element(by.id('descriptionProblemeId')).sendKeys('Je viens de loin mais on le sait pas');
  }
  setZoneDescriptionProblemeCaracteresinSuffisants() : void {
    element(by.id('descriptionProblemeId')).clear();
    element(by.id('descriptionProblemeId')).sendKeys('Je');
  }

  obtenirZoneClasseProbleme()   { 
    return element(by.id('descriptionProblemeId')).getAttribute("class");
  }   

}
