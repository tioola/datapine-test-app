import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector:'app-user-list',
    styleUrls:['./user-list.component.css'],
    templateUrl:'./user-list.component.html'
})
export class UserListComponent implements OnInit {

    users;

    userToBeEdited;

    constructor(private userService : UserService){}

    ngOnInit(): void {
        this.userService.getAll().subscribe( response =>{
            this.users = response.json();            
        })
    }


    selectUser(userToBeEdited){
        this.userToBeEdited = userToBeEdited;
    }


    prepareNewUser(){
        this.userToBeEdited = {
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    editOrSaveExecuted(){
        this.userToBeEdited = null;
        this.userService.getAll().subscribe( response =>{
            this.users = response.json();            
        })
    }
}