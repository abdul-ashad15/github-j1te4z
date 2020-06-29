import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { MatIconRegistry } from "@angular/material/icon";
import { LoginService } from './login.service';
import { User } from './user';
import  {FormGroup, FormBuilder, Validators} from '@angular/forms';

const googleLogoURL = 
"https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Login Page';
  username : string = "";
  password : string = "";
  userDetails : User[];
  user : User = new User();
  submitted = false;
  returnUrl: string;
  error = '';
  registerForm: FormGroup;

  constructor(private router: Router,matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer, public loginService : LoginService,private route: ActivatedRoute,private formBuilder: FormBuilder) 
    {
      debugger;
      matIconRegistry.addSvgIcon("logo",
        domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL));
        
        if (this.loginService.currentUserValue) { 
          this.router.navigate(['/']);
      }
     }


  ngOnInit(): void {

     this.registerForm = this.formBuilder.group({
      'username': [this.user.username, [
        Validators.required
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]],
    });
    this.loginService.getUsersDetails().subscribe(data =>this.userDetails = data);
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(username : string,password : string) : void
  {
    debugger;
    for (var user of this.userDetails) {
    
    if(this.username == user.username && this.password == user.password)
    {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.router.navigate(['/home']);
    }
    }
  }
  register() : void
  {
    debugger;
    this.router.navigate(['/signup']);
  }
}
