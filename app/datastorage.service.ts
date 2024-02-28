import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DatastorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
   }

   async init(){
    let storage = await this.storage.create();
    this._storage = storage;
  }


  set(cca2: string, countryname: string){
    this._storage?.set(cca2, countryname);
  }

  async retrieve(cca2: string){
    return this._storage?.get(cca2);

  }
}
