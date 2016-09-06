import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { REACTIVE_FORM_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import MaskedInput from 'angular2-text-mask'

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, MaskedInput]
})
export class HomePage {

  testForm: FormGroup;

  phone: AbstractControl;

  constructor(private navCtrl: NavController, private fb: FormBuilder) {
    this.testForm = fb.group({
      phone: ['', Validators.required]
    });

    this.phone = this.testForm.controls['phone'];
  }

  phoneMask(userInput) {
    let numbers = userInput.match(/\d/g);
    let numberLength = 0;
    if (numbers) {
      numberLength = numbers.join("").length;
    }

    if (numberLength > 10) {
      return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    } else {
      return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }
  }
}
