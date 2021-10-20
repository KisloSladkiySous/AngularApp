import { Injectable } from '@angular/core';
import { contacts, Item } from './interface';

@Injectable({
  providedIn: 'root',
})

export class service {
  private _items:Item[]=[];
  addItem(item:Item){
        this._items.push(item)
}
  getItems():Item[]{
        return this._items
    }
}
    
    
