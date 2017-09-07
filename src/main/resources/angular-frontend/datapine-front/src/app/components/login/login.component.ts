import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    styleUrls: ['./login.component.css'],
    templateUrl:'./login.component.html'
})
export class LoginComponent{


    public email:string;
    public password:string;
    errorMessage="";

    constructor(private loginService: LoginService, private router : Router){}   

    login(){
        
        console.log(this.email);
        let login = this.loginService.login(this.email,this.password).subscribe(response => {
                
                console.log(response);
                this.loginService.isLogged = response.ok;
                this.router.navigate(['/users']);
            },
            error => {
                this.loginService.isLogged = false;
                this.errorMessage = "Login failed!"
                
            }
        );      

    }
}