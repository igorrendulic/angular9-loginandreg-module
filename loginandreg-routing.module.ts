import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';

const moduleroutes: Routes = [
    {path: '', component: LayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }       
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(moduleroutes)],
    exports: [RouterModule]
})
export class LoginAndRegRoutingModule {}