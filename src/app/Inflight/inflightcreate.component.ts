import { Component } from '@angular/core';
import { InFlightService } from './inflight.service';
import { Iinflight } from './inflight';


@Component({
    selector: 'inflight-create',
    templateUrl: './inflightcreate.component.html'
  })

export class InFlightCreate {

  constructor(public inflightService : InFlightService)
  {

  }

  createUpdateInflight(currentinflight : Iinflight)
      {
        if(currentinflight.id != null)
        {
          this.updateInflight(currentinflight);
        }
        else
        {
            this.createInflight(currentinflight);
        }
      }

      createInflight(inflight : Iinflight)
      {
        this.inflightService.createInFlight(inflight).subscribe();
      }

      updateInflight(inflight : Iinflight)
      {
        this.inflightService.updateInFlight(inflight).subscribe();
      }

      clear()
      {
        this.inflightService.currentinflight = {
          id : null,
          flight : '',
          meals : '',
          shoppingitems : '',
          seatnumber: ''
        }
      }
}
