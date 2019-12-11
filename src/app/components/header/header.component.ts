import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.services";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  logout(e) {
    console.log(this.authService.getIsAuth());

    if (this.authService.getIsAuth()) {
      e.stopPropagation();
      e.preventDefault();
      this.authService.logout();
    }
  }

  ngOnInit() {}
}
