import { Injectable, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule  } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Iancillary } from './ancillary';
//import { IpcNetConnectOpts } from 'net';

@Injectable()

export class AncillaryService {

  //private url : string = "/assets/data/passengerDetails.json";

  private url : string = "http://localhost:3005/Ancillaries";

  currentancillary : Iancillary = {
    id : null,
    flight : '',
    meals : '',
    shoppingitems : ''
  }

  ancillary : any[];

  
  constructor(private http: HttpClient ) {
   
    this.getAncillaryDetails();
}
    
getAncillaryDetails() : Observable<Iancillary[]>{
  return this.http.get<Iancillary[]>(this.url)
}

createAncillary(ancillary : Iancillary) : Observable<Iancillary>
{
  return this.http.post<Iancillary>(this.url, ancillary);
}

updateAncillary(ancillary : Iancillary) : Observable<Iancillary>
{
  return this.http.put<Iancillary>(this.url + '/' + ancillary.id,ancillary);
}

deleteAncillary(id : number) : Observable<Iancillary>
{
    return this.http.delete<Iancillary>(this.url + '/'+id);
}

}
