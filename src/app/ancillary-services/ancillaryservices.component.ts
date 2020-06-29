import { Component } from '@angular/core';
import { AncillaryService } from './ancillary.service';
import { Iancillary } from './ancillary';

@Component({
    selector: 'ancillary-services',
    templateUrl: './ancillaryservices.component.html',
  })

export class Ancillaryservices
{
  constructor(public ancillaryService : AncillaryService)
  {

  }

      createUpdateAncillary(currentancillary : Iancillary)
      {
        if(currentancillary.id != null)
        {
          this.updateAncillary(currentancillary);
        }
        else
        {
            this.createAncillary(currentancillary);
        }
      }

      createAncillary(ancillary : Iancillary)
      {
        this.ancillaryService.createAncillary(ancillary).subscribe();
      }

      updateAncillary(ancillary : Iancillary)
      {
        this.ancillaryService.updateAncillary(ancillary).subscribe();
      }

      clear()
      {
        this.ancillaryService.currentancillary = {
          id : null,
          flight : '',
          meals : '',
          shoppingitems : ''
          
        }
      }
}
