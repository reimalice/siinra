import { Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component'
import { LoginComponent } from './login/login.component';
import { AuthorizatedGuard } from "./core/guards/authorizated.guard";


export const routes: Routes = [{
  path: '',
  component: TemplateComponent,
  children: [{
    path: '',
    redirectTo: '/starter',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: './modulos/modulos.module#ModulosModule'
  }, {
    path: 'starter',
    loadChildren: './starter/starter.module#StarterModule'
  }], canActivate: [AuthorizatedGuard]
},
{
  path: 'login',
  component: LoginComponent
},
{ path: '**', redirectTo: 'login' }
];