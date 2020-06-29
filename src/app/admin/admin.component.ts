import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';
import { LoginService } from '../login/login.service';
import { User } from '../login/user';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title = 'Passenger Details';
  users: User[] = [];
  constructor(public navService: NavbarService,public loginService : LoginService) { }

  ngOnInit() {
    this.navService.hide();
    this.loginService.getUsersDetails().pipe(first()).subscribe(users => {
      this.users = users;
  });
  }
}
