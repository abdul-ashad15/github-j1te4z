import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { MatIconRegistry } from "@angular/material/icon";

const logoURL = 
//"https://raw.githubusercontent.com/fireflysemantics/logo/master/l1.svg";
"https://www.flaticon.com/authors/freepik";

@Component({
    selector: 'app-error-dialog',
    templateUrl: './error-dialog.component.html'
  })


export class ErrorDialogComponent implements OnInit
{
  constructor(private matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer)
  {
       matIconRegistry.addSvgIcon("logo",
        domSanitizer.bypassSecurityTrustResourceUrl(logoURL));
  }

  ngOnInit()
  {

  }

}