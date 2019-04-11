import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Déclarer un problème');
  });
  it('Doit activer le bouton Sauvegarder avec champs valides scénario nominal', () => {
    page.setChampsValidesScenarioNominal();               
     
    expect(page.boutonSubmit().isEnabled()).toBe(true);
  }); 
  it('Doit activer le bouton Sauvegarder avec champs valides scénario alternatif Par message TEXTE', () => {
    page.setChampsValidesScenarioAlternatifParMessageTexte();                    
    expect(page.boutonSubmit().isEnabled()).toBe(true);
  }); 
  it('Doit activer le bouton Sauvegarder avec champs valides scénario alternatif Par courriel', () => {
    page.setChampsValidesScenarioAlternatifParCourriel();              
    expect(page.boutonSubmit().isEnabled()).toBe(true);
  }); 
  it('zone DÉCLARER UN PROBLÈME a une bordure VERTE si le nombre de caractères est suffisant', () => {
    page.setZoneDescriptionProblemeCaracteresSuffisants();  
    expect(page.obtenirZoneClasseProbleme()).toContain('is-valid');
  }); 
  it('zone DÉCLARER UN PROBLÈME a une bordure ROUGE si le nombre de caractères est insuffisant', () => {
    page.setZoneDescriptionProblemeCaracteresinSuffisants();  
    expect(page.obtenirZoneClasseProbleme()).toContain('is-invalid');
  }); 


});
