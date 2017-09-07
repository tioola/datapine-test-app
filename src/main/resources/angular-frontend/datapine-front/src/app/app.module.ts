import { ItemService } from './services/item.service';
import { ItemListComponent } from './components/item-list/item-list.component';
import { AuthGuard } from './auth/auth.component';
import { LoginService } from './services/login.service';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


const appRoutes: Routes = [
  {path:'users', component: UserListComponent, canActivate: [AuthGuard] },
  {path:'login', component: LoginComponent},
  {path:'items', component: ItemListComponent},
  {path:'', component: WelcomeComponent,canActivate: [AuthGuard] }
]
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserEditComponent,
    WelcomeComponent,
    LoginComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    ApiService,
    LoginService,
    ItemService,
    AuthGuard
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
