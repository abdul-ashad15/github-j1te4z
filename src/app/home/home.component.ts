import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../login/user';
import { Role } from '../login/role';
import { LoginService } from '../login/login.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { AppComponent } from '../app.component';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    //loading = false;
    currentUser: User;
    userFromApi: User;

    constructor(public authenticationService: LoginService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.value;
    }

    ngOnInit() {
        debugger;
        this.authenticationService.getUsersDetailsById(this.currentUser.id).pipe(first()).subscribe(user => {
        this.userFromApi = user;
            console.log(this.userFromApi);
            
        });
    }
}
