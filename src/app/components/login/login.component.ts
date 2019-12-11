import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AuthService } from "src/app/services/auth.services";
import { AppRoutingModule } from "src/app/app-routing.module";
import { BookmarksService } from 'src/app/services/bookmarks.service';
import { HeaderComponent } from '../header/header.component';

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
    private route: AppRoutingModule,
    private bookmarks: BookmarksService,
  ) {
    this.checkoutForm = this.formBuilder.group({
      login: "",
      password: ""
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn("Your order has been submitted", customerData);
    this.authService
      .login(customerData)
      .then(() => {
        this.route.redirectToProjects();
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
    console.log(this.route.getRedirectMessage());
    this.redirectMessage = this.route.getRedirectMessage();
  }
}
