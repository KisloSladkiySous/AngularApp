import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { secondService } from '../secondService';
import { service } from '../service';

@Component({
  selector: 'app-dataprocessing',
  templateUrl: './dataprocessing.component.html',
  styleUrls: ['./dataprocessing.component.scss']
})
export class DataprocessingComponent implements OnInit {
  dataForm:FormGroup
  checkBoxes={dataCB:'',alertCB:''}
  constructor(private _service:service,
    private _secondService:secondService) { }
  public printItems(){
    console.log(this._service.getItems())
    console.log(this._secondService.getContacts())
    console.log(this.checkBoxes.dataCB,"+", this.checkBoxes.alertCB)

  }
  ngOnInit(): void {
    this.dataForm = new FormGroup({
      dataCB: new FormControl('',[Validators.requiredTrue])
      
      })
  }
  submit(){
    if (this.dataForm.invalid){
    return
    }
  }

}

