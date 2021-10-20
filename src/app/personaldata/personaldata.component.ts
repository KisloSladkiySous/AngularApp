import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { service } from '../service';
import {Item} from '../interface'
@Component({
  selector: 'app-personaldata',
  templateUrl: './personaldata.component.html',
  styleUrls: ['./personaldata.component.scss']
})

export class PersonaldataComponent implements OnInit {
  public form:FormGroup 
  private _item:Item={fName:'',lName:''} 
  constructor(private _service:service) { } 
  public get Item():Item{
    return this._item
  }
  public addItems(){
    const currentItem:Item={
      fName:this._item.fName,
      lName:this._item.lName
    };
    this._service.addItem(currentItem)
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      fName!: new FormControl("",[Validators.required]),
      lName!: new FormControl("",[Validators.required]),
    })
  }
  submit(){

    if (this.form.invalid){
      return
    } 
    
  }
}
