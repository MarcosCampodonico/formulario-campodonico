import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// interface AddressFormGroup {
//   address: FormControl<string | null>;
// }

interface UserModel {
  username:FormControl<string | null>
  email: FormControl<string | null>;
  linkedin: FormControl<string | null>;
  // city: FormControl<string | null>;
  // addresses: FormArray<FormGroup<AddressFormGroup>>
}

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  /**
   * FormControl
   * Manejar el valor de una propiedad en especifico.
   * Se vinculan directamente con los inputs, selects, textareas del html
   */
  usernameControl = new FormControl('', [Validators.required]); 
  emailControl = new FormControl('', [Validators.required]);
  linkedinControl = new FormControl('');
  // cityControl = new FormControl('', [Validators.required]);


  /**
   * FormArray
   * Agrupan FormControl, FormArray y FromGroup
   * A modo de array []
   */


  // FormArray<FormGroup<AddressFormGroup>>
  // Aqui lo que decimos que dentro del FormArray
  // Va a haber FormGroups, que dentro van a tener una prop "address"
  // Que va a ser de tipo FromControl<string | null>
  // addresesFormArray = new FormArray<FormGroup<AddressFormGroup>>([
  //   new FormGroup({
  //     address: new FormControl(''),
  //   }),
  // ]);


  /**
   * Los FormGroup agrupar FormControl, FormArray y FromGroup
   * A modo de objeto {}
   *
   * {
   *    email: '',
   *    password: '',
   *    city: '',
   * }
   */
  userModel: FormGroup<UserModel> = new FormGroup({
    username: this.usernameControl,
    email: this.emailControl,
    linkedin: this.linkedinControl,
   
  });

//   addAddressControl(): void {
//     this.addresesFormArray.push(
//       this.fb.group({
//         address: [''],
//       })
//     )
//   }

//   constructor(private fb: FormBuilder) {
//     console.log(this.addresesFormArray);
//   }

//   deleteFormGroupFromAddressesFormArray(index: number): void {
//     this.addresesFormArray.removeAt(index);
//   }
}
