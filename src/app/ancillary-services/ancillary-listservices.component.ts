import { Component, OnInit } from '@angular/core';
import { Iancillary } from './ancillary';
import { AncillaryService } from './ancillary.service';

@Component({
  selector: 'ancillary-listservices',
  templateUrl: './ancillary-listservices.component.html'
})

export class Ancillarlistservices implements OnInit
{
  ancillarydetails: Iancillary[];

  constructor(public ancillaryService : AncillaryService) {}

  ngOnInit() {
    this.ancillaryService.getAncillaryDetails()
    .subscribe(data =>this.ancillarydetails = data);
  }


  deleteancillary(id : number)
  {
    this.ancillaryService.deleteAncillary(id).subscribe(
      (data : Iancillary) => {
        this.ancillaryService.getAncillaryDetails();
      }
    )
  }

  editancillary(ancillary : Iancillary)
  {
     this.ancillaryService.currentancillary = Object.assign({},ancillary);
  }
}
