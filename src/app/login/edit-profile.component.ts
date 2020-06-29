import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './user';
import { Role } from './role';
import { first } from 'rxjs/operators';

@Component({
    selector: 'eidt-users',
    templateUrl: './edit-profile.component.html'
    //styleUrls : ['./passengercreate.component.css']
  })

  export class EditUsers implements OnInit
  {
    currentUser: User;
    userFromApi: User;
    roles : any;
    private currentUserSubject: BehaviorSubject<User>;
      user : User;
      userdetails : User
      constructor(public loginservice : LoginService)
      {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.value;
        this.roles = [{ value: 'AirlineStaff', viewValue: 'Airline Staff' }, { value: 'Admin', viewValue: 'Admin' }];
      }

      
      ngOnInit()
      {
          debugger;
          this.loginservice.getUsersDetailsById(this.currentUser.id).subscribe(data =>this.userdetails = data);
          /*if(this.user.role == Role.AirlineStaff)
          {
            this.loginservice.getUsersDetailsById(1001)
            .subscribe(data =>this.userdetails = data);
          }
          else
          {
                this.loginservice.getUsersDetails().subscribe(data => this.userdetails = data);
          }*/
        
      }

      updateUsers(currentuser : User)
      {
          debugger;
        this.loginservice.editusers(currentuser).subscribe();
      }

      editusers(userdetail : User)
      {
        this.loginservice.currentuser = Object.assign({},userdetail);
      }
      
      selected: string = '';

      selectChangeHandler (event: any) {
          debugger;
        this.selected = event.target.value;
        this.currentUser.role = this.selected;
        console.log(this.selected);
      }

      isAdmin()
      {
        return this.currentUser && this.currentUser.role === "Admin";
      }


  }
