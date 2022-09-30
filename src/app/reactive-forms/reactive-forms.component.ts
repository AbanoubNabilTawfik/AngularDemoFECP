import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators ,FormArray} from '@angular/forms';
import { ConfirmPasswordValidator } from '../Custom Validations/confirmPassword.validators';
import { ForbiddenNameValidator } from '../Custom Validations/userName.validitors';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  // registerationForm=new FormGroup({
  //   userName:new FormControl(''),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   address:new FormGroup({
  //       state:new FormControl(''),
  //       city:new FormControl(''),
  //       postalCode:new FormControl('')
  //   })
  // })

  registerationForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(5),ForbiddenNameValidator(/superadmin/)]],
    password:[''],
    confirmPassword:[''],
    email:[''],
    subscribe:[false],
    alternativeEmails:this.fb.array([]),
    address:this.fb.group({
        state:[''],
        city:[''],
        postalCode:['']
    })
  },{validator:[ConfirmPasswordValidator]})

  get userName()
  {
    return this.registerationForm.get('userName')
  }

  get alternativeEmails()
  {
    return this.registerationForm.get('alternativeEmails') as FormArray;
  }
  deleteEmail(index:any)
  {
   this.alternativeEmails.removeAt(index);
  }
  addNewEmail()
  {
    this.alternativeEmails.push(this.fb.control(''));
  }
  get email()
  {
    return this.registerationForm.get('email')
  }

  ngOnInit(): void {
  }

  loadAPIData()
  {
    // this.registerationForm.setValue({
    //   userName:'ITI',
    //   password:'123',
    //   confirmPassword:'123',
    //   address:{
    //      state:'Egypt',
    //      city:'Assiut',
    //      postalCode:'71111'
    //   }
    // })

    this.registerationForm.patchValue({
      userName:'ITI',
      address:{
         state:'Egypt',
         city:'Assiut',
         postalCode:'71111'
      }
    })
  }

  setEmailValidation()
  {
    this.registerationForm.get('subscribe')?.valueChanges.subscribe(
      checkedValue=>{
        if(checkedValue)
        {
          this.email?.setValidators(Validators.required);
        }
        else
        {
          this.email?.clearValidators();
        }
        this.email?.updateValueAndValidity();
      }
    )
  }

}
