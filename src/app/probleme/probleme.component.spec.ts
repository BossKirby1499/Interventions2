import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeComponent } from './probleme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TypeproblemeService } from './typeprobleme.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule],
      declarations: [ ProblemeComponent ],
      providers:[TypeproblemeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Zone PRÉNOM invalide avec 2 caractères', () => {
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue('a'.repeat(2));
    expect(zone.valid).toBeFalsy();
  });

  it('Zone PRÉNOM valide avec 3 caractères', () => {
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue('a'.repeat(3));
    expect(zone.valid).toBeTruthy();
  });

  it('Zone PRÉNOM valide avec 200 caractères', () => {
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue('a'.repeat(200));
    expect(zone.valid).toBeTruthy();
  });

  it('Zone PRÉNOM invalide avec aucune valeur', () => {
    let errors = {};
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue('');
    errors = zone.errors||{};
    expect(errors["required"]).toBeTruthy();
  });

  it('Zone PRÉNOM invalide avec 10 espaces', () => {
    
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue(' '.repeat(10));
    
    expect(zone.valid).toBeFalsy();
  });

  it('Zone PRÉNOM invalide avec 2 espaces et 1 caractère', () => {
    
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue(' '.repeat(2) + 'a');
    
    expect(zone.valid).toBeFalsy();
  });
  it(' Zone TELEPHONE est désactivée quand ne pas me notifier', () => {
    component.appliquerNotifications('nepasnotifier');
    let zone = component.problemeForm.get('telephone');
    expect(zone.status).toEqual('DISABLED');
  });
  it(' Zone TELEPHONE est vide quand ne pas me notifier', () => {
    component.appliquerNotifications('nepasmeNotifier');
    let zone = component.problemeForm.get('telephone');
    zone.setValue('');
    expect(zone.value).toEqual('');
  });
  it('Zone ADRESSE COURRIEL est désactivée quand ne pas me notifier', () => {
    component.appliquerNotifications('nepasmeNotifier');
    let zone = component.problemeForm.get('courrielGroup.courriel');
    expect(zone.status).toEqual('DISABLED');
  });
  it('Zone CONFIRMER COURRIEL est désactivée quand ne pas me notifier', () => {
    component.appliquerNotifications('nepasmeNotifier');
    let zone = component.problemeForm.get('courrielGroup.courrielConfirmation');
    expect(zone.status).toEqual('DISABLED');
  });
});
