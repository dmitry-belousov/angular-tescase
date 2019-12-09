import { Component, OnInit } from "@angular/core";
import { User } from "./register";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  checkoutForm;
  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      login: "",
      password: ""
    });
  }
  onSubmit(customerData) {
    // Process checkout data here
    console.warn("Your order has been submitted", customerData);
    this.checkoutForm.reset();
  }

  ngOnInit() {}
}
