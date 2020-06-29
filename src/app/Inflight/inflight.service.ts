import { Injectable, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule  } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Iinflight  } from './inflight';
//import { IpcNetConnectOpts } from 'net';

@Injectable()

export class InFlightService {

  //private url : string = "/assets/data/passengerDetails.json";

  private url : string = "http://localhost:3006/InflightDetails";

  currentinflight : Iinflight = {
    id : null,
    flight : '',
    meals : '',
    shoppingitems : '',
    seatnumber: ''
  }

  inflight : any[];

  
  constructor(private http: HttpClient ) {
   
    this.getInFlightDetails();
}
    
getInFlightDetails() : Observable<Iinflight[]>{
  return this.http.get<Iinflight[]>(this.url)
}

createInFlight(inflight : Iinflight) : Observable<Iinflight>
{
  return this.http.post<Iinflight>(this.url, inflight);
}

updateInFlight(inflight : Iinflight) : Observable<Iinflight>
{
  return this.http.put<Iinflight>(this.url + '/' + inflight.id,inflight);
}
}
