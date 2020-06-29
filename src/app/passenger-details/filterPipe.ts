import { Pipe, PipeTransform } from '@angular/core';
import { IPassenger } from './passenger';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(passengerdetails: IPassenger[], searchText: string): any[] {

    if (!passengerdetails || !searchText) {
      return passengerdetails;
    }
    searchText = searchText.toLocaleLowerCase();

    return passengerdetails.filter(passenger => 
      passenger.name.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) != -1);
  }
}
