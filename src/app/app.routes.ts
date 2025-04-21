import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    {path: "register", component: RegisterComponent},
    {path: "form", component: FormComponent}
];
