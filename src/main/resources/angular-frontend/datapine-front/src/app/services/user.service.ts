import { Observable } from 'rxjs/Rx';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';


@Injectable()
export class UserService{
    constructor(private api : ApiService){}

    getAll(): Observable<any>{
        return this.api.get('/api/users');
    }
    
    add(user): Observable<any>{
        return this.api.post('/api/users',user);
    }

    update(user): Observable<any>{
        return this.api.put('/api/users',user);
    }

}