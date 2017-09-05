import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {


    constructor(private apiService: ApiService) { }

    public isLogged: boolean = false;


    login(username, password) {
            return this.apiService.login('/api/auth', username, password);

    }

    isUserLogged() {
        return this.isLogged;
    }

}