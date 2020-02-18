import { Component, OnInit, ViewChild } from "@angular/core";
import { MatProgressBar, MatButton, MatSnackBar } from "@angular/material";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { CustomValidators } from "ng2-validation";
import { Router } from "@angular/router";

@Component({
  selector: "app-main-signin",
  templateUrl: "./main-signin.component.html",
  styleUrls: ["./main-signin.component.scss"]
})
export class MainSigninComponent implements OnInit {
  @ViewChild(MatButton, { static: false }) submitButton: MatButton;
  signinForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    const password = new FormControl("", Validators.required);
    // const confirmPassword = new FormControl(
    //   "",
    //   CustomValidators.equalTo(password)
    // );

    this.signinForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: password
      // agreed: [false, Validators.required]
    });
  }

  onSubmit() {
    if (!this.signinForm.invalid) {
      // do what you wnat with your data
      console.log(this.signinForm.value);
      if (
        this.signinForm.value.email == "admin@gmail.com" &&
        this.signinForm.value.password == "123456"
      ) {
        this.router.navigate(["application/details"]);
      } else {
        this.snackBar.open(
          "Please check your credentials and try again",
          "close",
          {
            duration: 3000
          }
        );
        this.signinForm.reset();
      }
    }
  }
}
