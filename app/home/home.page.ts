import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpserviceService } from '../httpservice.service';
import { HttpOptions } from '@capacitor/core';
import { Router, RouterModule } from '@angular/router';
import { DatastorageService } from '../datastorage.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
})
export class HomePage {
  countryName!: any;
  cca2!: any;
  options: HttpOptions = {
    url: 'https://restcountries.com/v3.1/independent?status=true&fields=cca2,name'
  }
  constructor(private https: HttpserviceService, private router: Router) {}

  ngOnInit(){
    this.countryName =[];
    
  }

  ionViewWillEnter(){
    this.getCountryName();
  }

  private async getCountryName(){
    let result = await this.https.get(this.options);
    console.log((result));
    //console.log(((result.data)))
    this.countryName = (result.data);
    
  }

  /*async loadCountry(){
    await this.getCountryName();
    
    this.router.navigate(['/country'])
  }*/
  /*getCountryLink(countryName: any){
    
    const countryInfo = await this.https.get({
      url: `https://restcountries.com/v3.1/alpha/${country.cca2}`,
    });
    this.router.navigate(['/country', (country.cca2)], {
      state: { country: countryInfo.data },
    });
    
  }*/

}


