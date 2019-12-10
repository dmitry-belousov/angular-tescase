import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { RepositoryService } from "src/app/project/services/repository.service";
import { AuthService } from "src/app/services/auth.services";
import { AppRoutingModule } from "src/app/app-routing.module";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  checkoutForm;
  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private route: AppRoutingModule
  ) {
    this.checkoutForm = this.formBuilder.group({
      login: "",
      password: ""
    });
  }
  onSubmit(customerData) {
    // Process checkout data here
    console.warn("Your order has been submitted", customerData);
    this.authService.register(customerData);
    this.checkoutForm.reset();
    this.route.redirectToLogin("Your account created. Please login to enter the system.");
  }

  ngOnInit() {}
}
