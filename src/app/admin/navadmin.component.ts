import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './navbar.service';

@Component({
    selector: 'app-navadmin',
    templateUrl: './navadmin.component.html',
  })


export class navAdminComponent {

    constructor(private router:Router,public nav: NavbarService)
    {

    }

    logOut(){
        this.router.navigate(['/login']);
    }
}