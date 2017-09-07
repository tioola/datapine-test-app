import { Observable } from 'rxjs/Rx';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';


@Injectable()
export class ItemService{
    constructor(private api : ApiService){}

    getAll(): Observable<any>{
        return this.api.get('/api/items');
    }
}