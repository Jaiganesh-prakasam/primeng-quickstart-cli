import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  static typeValidatorArray = new Array<any>();
  constructor() { }
  // age abbe 18 or below 80
  static ageValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const dob = new Date(control.value);
      const diffMs = Date.now() - dob.getTime();
      const  ageDt = new Date(diffMs);
      const age = Math.abs(ageDt.getUTCFullYear() - 1970);
      return age > 18 && age < 80 ? null : {invalidAge: true};
    };
  }
  static onlyAlphabetsValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const onlyAlphabets = control.value.match( /^[A-Za-z\s]*$/ );
      return onlyAlphabets ? null : {onlyAlphabets: false};
    };
  }
  static emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const emailMatch = control.value.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      );
      return emailMatch ? null : {invalidEmailAddress: true};
    };
  }
  static phoneNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const phoneMatch = control.value.match(
        /^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/
        );
      return phoneMatch ? null : {invalidPhoneNumber: true};
    };
  }
  static socialMediaTypeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // previous value of typeValidatorArray will be accessed which will exclude
      // the current value
      if (this.typeValidatorArray.length > 1) {
        const unique = this.typeValidatorArray.filter(x => x.type === control.value);
        if (unique.length > 0) {
          return {socialMediaNotUnique: true};
        }
      }
      return null;
    };
  }
  static socialMediaUrlValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const urlMatch = control.value.match(
        /^[A-za-z0-9]+\/[A-za-z0-9]{1}[A-za-z0-9]*$/
        );
      return urlMatch ? null : {socialMediaUrlMatch: false};
    };
  }
  static storeSocialMediaTypeValidationobjects(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      //  store the current value, this will execute after typeValidator
      this.typeValidatorArray = [...control.value];
      return null;
    };
  }
  static futureDate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const currentDate = new Date().getTime();
      const enteredDate = new Date(control.value).getTime();
      return currentDate < enteredDate ? {futureDate: true} : null;
    };
  }
  static rating(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const rateValue = control.value;
      return rateValue <= 10 ? null : {rateGreaterThanTen: true};
    };
  }
  public getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      required: 'Required',
      pattern: 'not a required pattern',
      invalidEmailAddress: 'Invalid email address ex: abc@hostname.com',
      minlength: `Minimum length ${validatorValue.requiredLength}`,
      maxlength: `Maximum length ${validatorValue.requiredLength}`,
      invalidAge: 'Please enter dob whose age above 18 and below 80',
      invalidPhoneNumber: 'please enter your phone number like 111-111-1111, only 10 digits allowed',
      socialMediaNotUnique: 'social media already exist',
      futureDate: 'Future date not allowed',
      socialMediaUrlMatch: 'url example abc/cdf',
      onlyAlphabets: 'only alphabets allowed, Please don\'t enter special characters or numbers',
      rateGreaterThanTen: 'Enter a rate less than or equal to 10'
    };
    return config[validatorName];
  }
}
