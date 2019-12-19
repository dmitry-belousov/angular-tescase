import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.services";
import { BookmarksService } from 'src/app/services/bookmarks.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public bookmarkService: BookmarksService,
  ){}

  logout(e) {
    if (this.authService.getIsAuth()) {
      this.authService.logout();
    }
  }



  ngOnInit() {}
}
