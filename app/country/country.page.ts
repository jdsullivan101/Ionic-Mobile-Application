import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpOptions } from '@capacitor/core';
import { HttpserviceService } from '../httpservice.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DatastorageService } from '../datastorage.service';
import { ActivatedRoute, Route } from '@angular/router';
@Component({
  selector: 'app-country',
  templateUrl: './country.page.html',
  styleUrls: ['./country.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class CountryPage implements OnInit {

  statistics!: any[];
  currency!: any[];
  options!: HttpOptions;

  constructor(private https: HttpserviceService, private route: ActivatedRoute) { 
    
  }

    ngOnInit() {
    this.statistics =[];
    this.currency =[];
    this.options = {
      url: ('https://restcountries.com/v3.1/alpha/' + this.route.snapshot.params['cca2']),
    }
    this.getCountryDetails();
  }

  /*ionViewWillEnter(){
    this.getCountryDetails();
  }*/

  private async getCountryDetails(){
    let result = await this.https.get(this.options);
    this.statistics = (result.data);
   
    console.log(JSON.stringify(this.currency));
    
  }
  
}


