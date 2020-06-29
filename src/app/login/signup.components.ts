import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from './user';
import  {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent} from './success-dialog.component'

@Component({
    selector: 'app-signup',
    templateUrl: './signup.components.html'
  })


export class SignupComponent implements OnInit
{
    title : string = "Sign Up";
    user : User = new User();
    registerForm: FormGroup;
    hide = true;
    private dialogConfig;
    constructor(private router: Router, public loginservice : LoginService, private formBuilder: FormBuilder,
    private dialog: MatDialog, private location: Location)
    {

    }

    ngOnInit()
    {
      this.registerForm = this.formBuilder.group({
      'username': [this.user.username, [
        Validators.required
      ]],
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]],
      'phone': [this.user.phone, [
        Validators.required,
         Validators.minLength(10),
        Validators.maxLength(10)
      ]],
    });

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: { }
    }

    }

    login() : void
    {
        this.router.navigate(['/']);
    }

    signup(currentuser : User)
    {
        debugger;
         let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
         dialogRef.afterClosed()
        .subscribe(result => {
        this.location.back();
          });
        //alert(currentuser.username + ' ' + currentuser.email + ' ' + currentuser.password + ' ' + currentuser.phone);
        this.loginservice.registerUsers(currentuser).subscribe();
    }

    public checkError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  }
}