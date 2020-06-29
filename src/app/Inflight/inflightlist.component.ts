import { Component,OnInit } from '@angular/core';
import { InFlightService } from './inflight.service';
import { Iinflight } from './inflight';


@Component({
    selector: 'inflight-list',
    templateUrl: './inflightlist.component.html'
  })

export class InFlightList implements OnInit {

    inflightdetails: Iinflight[];
    constructor(public inflightService : InFlightService) {}

  ngOnInit() {
    this.inflightService.getInFlightDetails()
    .subscribe(data =>this.inflightdetails = data);
  }

  editancillary(inflight : Iinflight)
  {
     this.inflightService.currentinflight = Object.assign({},inflight);
  }
}
