import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { contacts } from '../interface';
import { WhiteSpaceValidator} from '../my.validators';
import { secondService } from '../secondService';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

constructor( private _secondService:secondService) {}
private _contacts:contacts={email:'',phoneNumber:'',address:'',date:''} 
public get contacts():contacts{
  return this._contacts
}
public addItems(){
  const currentItem:contacts={
    email:this._contacts.email,
    phoneNumber:this._contacts.phoneNumber,
    address:this._contacts.address,
    date:this._contacts.date
  };
  this._secondService.addContact(currentItem)
}
  getReverseGeocodingData(latitude:number, longitude:number) {
    let latlng = new google.maps.LatLng(latitude, longitude);
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: latlng }, function (results, status) {
            let address = (results[0].formatted_address);
           let input=<HTMLInputElement>document.getElementById('address');
           input.value=address;
           input.style.fontSize="12px";
           input.style.fontFamily="Roboto";
           input.validity
        
    });
  }
  buttonToggle=false
  inputValid=false
  latitude:number=55.45
  longitude:number=37.36
  geocoder: google.maps.Geocoder;
  onChooseLocation($event:any){
    console.log($event)
    this.latitude=$event.coords.lat
    this.longitude=$event.coords.lng
    this.getReverseGeocodingData(this.latitude, this.longitude)
  }

  contactsForm:FormGroup
 
 

  ngOnInit(): void {
    this.contactsForm = new FormGroup({
      email: new FormControl(null,[Validators.required,Validators.email]),
      phoneNumber: new FormControl(null,[Validators.required,Validators.pattern("^[0-9]{4}-[0-9]{3}-[0-9]{2}-[0-9]{2}$")]),
      address: new FormControl('',[WhiteSpaceValidator.noWhiteSpace]),
      date: new FormControl(null,[Validators.required])
      })
  }
  submit(){
    if (this.contactsForm.invalid){
    return
    }
  }

}
