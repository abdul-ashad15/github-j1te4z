import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
  })


export class navComponent {

    constructor(private router:Router)
    {

    }

    loginPage(){
        this.router.navigate(['/login']);
    }
}