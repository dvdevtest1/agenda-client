import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { MaterialImportsModule } from '../material-imports-module/material-imports.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './shared/user.service';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialImportsModule,
    HttpClientModule
  ],
  exports: [LoginComponent, RegisterComponent],
  providers: [UserService]
})
export class UserAdminModule { }
