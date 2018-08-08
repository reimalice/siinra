import { Component } from '@angular/core';
import {AuthenticationService} from "./login/shared/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AuthenticationService ]

})
export class AppComponent {
  title = 'Sistema de Información del Instituto Nacional de Reforma Agraria';
}
