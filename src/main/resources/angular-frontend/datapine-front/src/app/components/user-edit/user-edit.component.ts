
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
    selector: 'app-user-edit',
    styleUrls: ['./user-edit.component.css'],
    templateUrl: './user-edit.component.html'
})
export class UserEditComponent {

    @Input('user') user;
    @Output('emitevent') event : EventEmitter<any> = new EventEmitter<any>(); 

    confirmPassword;

    saveErrorMessage = "";


    constructor(private userService: UserService) { }

    close(){
        this.event.emit('close');  
    }

    onSubmit(form) {
        

        if (this.user.id != null && this.user.id != '') {
            this.userService.update(this.user).subscribe(response =>{
                console.log(response);
                this.event.emit('updated');
            });
        } else {

            this.userService.add(this.user).subscribe(reponse => {
                    console.log(reponse.json());
                    this.event.emit('saved');                    
                },
                error => {

                    if (error.status == 409) {
                        this.saveErrorMessage = "Email is already registered, please try another email.";
                    } else {
                        this.saveErrorMessage = "Unexpected error!";
                    }
                    console.log(error.status);
            });
        }

    }

}