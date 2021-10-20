import { Injectable } from "@angular/core";
import { contacts } from "./interface";
@Injectable({
    providedIn: 'root',
  })
  
export class secondService{
    private _contacts:contacts[]=[];
    addContact(contacts:contacts){
          this._contacts.push(contacts)
  }
    getContacts():contacts[]{
          return this._contacts
      }
}