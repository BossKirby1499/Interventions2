import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { longueurMinimum } from '../shared/longueur-minimum/longueur-minimum.component';
import { TypeproblemeService } from './typeprobleme.service';
import { ITypeProbleme } from './typeprobleme';

@Component({
  selector: 'inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit {
  problemeForm: FormGroup;
  typeProbleme: ITypeProbleme[];
  errorMessage: string;

  constructor(private fb: FormBuilder,private problemes: TypeproblemeService) { }

  ngOnInit() {
    this.problemeForm = this.fb.group({
      prenom:['',[ longueurMinimum.range(3), Validators.required]],
      nom:['',[ Validators.maxLength(50), Validators.required]],
      noProbleme: ['',[Validators.required]],
      courrielGroup: this.fb.group({
        courriel: [{value: '', disabled: true}],
        courrielConfirmation: [{value: '', disabled: true}],
        }),
       telephone: [{value: '', disabled: true}]
    });

    this.problemes.obtenirProbleme()
    .subscribe(cat => this.typeProbleme = cat,
               error => this.errorMessage = <any>error);  

  }
  appliquerNotifications(typeNotif: string): void{

    const CourrielControl = this.problemeForm.get('courrielGroup.courriel');
    const CourrielConfirmControl = this.problemeForm.get('courrielGroup.courrielConfirmation');
    const telephoneControl =this.problemeForm.get('telephone');

    CourrielControl.clearValidators();
    CourrielControl.reset();
    CourrielControl.disable();  

    CourrielConfirmControl.clearValidators();
    CourrielConfirmControl.reset();
    CourrielConfirmControl.disable();  

    telephoneControl.clearValidators();
    telephoneControl.reset();
    telephoneControl.disable();  

   if(typeNotif === 'courriel'){
    CourrielControl.setValidators([Validators.required]);
    CourrielControl.enable();
    CourrielConfirmControl.setValidators([Validators.required]);
    CourrielConfirmControl.enable();
   }else{

      if(typeNotif === 'telephone'){
        telephoneControl.enable();
        telephoneControl.setValidators([Validators.required]);
       
      }

   }
   CourrielControl.updateValueAndValidity();
   CourrielConfirmControl.updateValueAndValidity();
   telephoneControl.updateValueAndValidity();
  }

}
