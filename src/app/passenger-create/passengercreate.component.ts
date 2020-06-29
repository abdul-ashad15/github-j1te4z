import { Component } from '@angular/core';
import { PassengerService } from '../passenger-details/passenger.service';
import { IPassenger } from '../passenger-details/passenger';

@Component({
    selector: 'passenger-create',
    templateUrl: './passengercreate.component.html',
    styleUrls : ['./passengercreate.component.css']
  })

  export class PassangerCreate
  {
    orientations : any;
      constructor(public passengerService : PassengerService)
      {
          this.orientations = [{ value: 'Male', viewValue: 'Male' }, { value: 'Female', viewValue: 'Female' }];
      }

      createUpdatePassenger(currentPassenger : IPassenger)
      {
        console.log(currentPassenger);
        if(currentPassenger.id != null)
        {
          this.updatePassenger(currentPassenger);
        }
        else
        {
            this.createPassenger(currentPassenger);
        }
      }

      createPassenger(passenger : IPassenger)
      {
        this.passengerService.createPassenger(passenger).subscribe();
      }

      updatePassenger(passenger : IPassenger)
      {
        this.passengerService.updatePassenger(passenger).subscribe();
      }

      clear()
      {
        this.passengerService.currentPassenger = {
          id : null,
          username : '',
          name : '',
          age : null,
          dateOfBirth : '',
          gender : '',
          passoprt : '',
          address : '',
          seatnumber: ''
        }
      }
  }
