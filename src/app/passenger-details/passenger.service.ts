import { IPassenger } from './passenger';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule  } from '@angular/common/http'
import { Observable } from 'rxjs';
//import { IpcNetConnectOpts } from 'net';

@Injectable()

export class PassengerService {

  //private url : string = "/assets/data/passengerDetails.json";

  private url : string = "http://localhost:3000/Passengers";

  currentPassenger : IPassenger = {
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

  passenger : any[];

  
  constructor(private http: HttpClient ) {
   
    this.getPassengerDetails();
}
    
getPassengerDetails() : Observable<IPassenger[]>{
  return this.http.get<IPassenger[]>(this.url)
}

createPassenger(passenger : IPassenger) : Observable<IPassenger>
{
  return this.http.post<IPassenger>(this.url, passenger);
}

updatePassenger(passenger : IPassenger) : Observable<IPassenger>
{
  return this.http.put<IPassenger>(this.url + '/' + passenger.id,passenger);
}

deletePassenger(id : number) : Observable<IPassenger>
{
    return this.http.delete<IPassenger>(this.url + '/'+id);
}

}
