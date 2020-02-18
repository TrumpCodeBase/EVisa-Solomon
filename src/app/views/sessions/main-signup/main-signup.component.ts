import { CustomValidators } from "ng2-validation";
import { ErrorStateMatcher } from "@angular/material/core";
import { MatSnackBar } from "@angular/material";
import {
  Validators,
  FormGroup,
  NgForm,
  FormGroupDirective,
  FormControl,
  AbstractControl,
  ValidationErrors
} from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-main-signup",
  templateUrl: "./main-signup.component.html",
  styleUrls: ["./main-signup.component.scss"]
})
export class MainSignupComponent implements OnInit {
  signupForm: FormGroup;
  private successUrl: string = "sessions/main-signin";

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    const password = new FormControl("", Validators.required);
    const confirmPassword = new FormControl(
      "",
      CustomValidators.equalTo(password)
    );

    this.signupForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      username: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: password,
      confirmPassword: confirmPassword,
      agreed: [false, Validators.required]
    });
  }

  onSubmit() {
    if (!this.signupForm.invalid) {
      // do what you wnat with your data
      console.log(this.signupForm.value);
      this.snackBar.open("Successfully Signup", "close", {
        duration: 2000
      });
      this.router.navigate([this.successUrl]);
    }
  }
}
