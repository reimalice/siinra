import { Component } from '@angular/core';
import {AuthenticationService} from "../../login/shared/authentication.service";
import {StorageService} from "../../core/services/storage.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public user: User;
  constructor(
    private storageService: StorageService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.user = this.storageService.getCurrentUser();
  }

  public logout(): void{
    this.authenticationService.logout().subscribe(
        response => {if(response) {this.storageService.logout();}}
    );
  }

}
