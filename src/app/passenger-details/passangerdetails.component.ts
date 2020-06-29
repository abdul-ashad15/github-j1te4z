import { Component, OnInit } from '@angular/core';
import { IPassenger } from './passenger';
import { PassengerService } from './passenger.service';

@Component({
  selector: 'passenger-details',
  templateUrl: './passangerdetails.component.html',
  styleUrls : ['./passengerdetails.component.css']
})


export class Passangerdetails implements OnInit 
{
  public show: boolean = false;
  public buttonName: any = "Show";
  passengerdetails: IPassenger[];

  constructor(private passengerService : PassengerService) {}

  ngOnInit() {
    this.passengerService.getPassengerDetails()
    .subscribe(data =>this.passengerdetails = data);
  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) this.buttonName = "Hide";
    else this.buttonName = "Show";
  }

  deletePassenger(id : number)
  {
    this.passengerService.deletePassenger(id).subscribe(
      (data : IPassenger) => {
        this.passengerService.getPassengerDetails();
      }
    )
  }

  editPassenger(passenger : IPassenger)
  {
     this.passengerService.currentPassenger = Object.assign({},passenger);
  }
}