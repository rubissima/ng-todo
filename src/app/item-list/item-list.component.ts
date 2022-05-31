import { Component, OnInit, Input } from '@angular/core';
import { ItemComponent } from 'src/app/item/item.component';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Input() itemList: string[];

  constructor() { 
    this.itemList = [];
  }

  ngOnInit(): void {
  }

}
