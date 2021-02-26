import { Component, OnInit } from "@angular/core";
// import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: "app-user-profile",
  templateUrl: "user-profile.component.html"
})
export class UserProfileComponent implements OnInit {
  // currentUser: any;
  // constructor(private token: TokenStorageService) { }

  ngOnInit() {
    // this.currentUser = this.token.getUser();
  }
}
