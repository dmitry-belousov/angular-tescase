import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AuthService } from "src/app/services/auth.services";
import { AppRoutingModule } from "src/app/app-routing.module";
import { BookmarksService } from "src/app/services/bookmarks.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  checkoutForm;
  redirectMessage;
  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private bookmarks: BookmarksService,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      login: "",
      password: ""
    });
  }

  onSubmit(customerData) {
    this.authService
      .login(customerData)
      .then(() => {
        this.router.navigate(["projects"]);
        this.checkoutForm.reset();
        this.redirectMessage = "";
        this.bookmarks.getBookmarks();
        
      })
      .catch(e => {
        console.log(e);
        this.redirectMessage = e.error.message;
      });
  }

  ngOnInit() {
    this.redirectMessage = "Login to continue";
  }
}
