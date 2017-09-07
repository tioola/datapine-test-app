import { ItemService } from '../../services/item.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector:'app-item-list',
    styleUrls:['./item-list.component.css'],
    templateUrl:'./item-list.component.html'
})
export class ItemListComponent implements OnInit{

    items;
    
    constructor(private itemService : ItemService){}


    ngOnInit(): void {
        this.itemService.getAll().subscribe( response =>{
            this.items = response.json();            
        })
    }


}