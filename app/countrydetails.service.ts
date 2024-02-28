import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountrydetailsService {

  private url = 'https://restcountries.com/v3.1/alpha';

  constructor(private http: HttpClient) { }
  
  getDetails(countryID: string): Observable<any>{
    const url = '${this.url}/${countryID}';
    return this.http.get(url);
  }
}
