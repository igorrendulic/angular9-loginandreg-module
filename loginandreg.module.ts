import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatCardModule } from '@angular/material/card';
import { LayoutComponent } from './layout/layout.component';
import { LoginAndRegRoutingModule } from './loginandreg-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [LoginComponent, RegisterComponent, LayoutComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,

    LoginAndRegRoutingModule,
  ],
})
export class LoginandregModule { }
