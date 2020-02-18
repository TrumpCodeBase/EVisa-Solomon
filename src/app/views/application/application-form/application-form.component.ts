import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatProgressBar, MatButton, MatSnackBar } from "@angular/material";
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { Router } from "@angular/router";
import { log } from "util";

@Component({
  selector: "app-application-form",
  templateUrl: "./application-form.component.html",
  styleUrls: ["./application-form.component.scss"],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    }
  ]
})
export class ApplicationFormComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      // purposeCtl: ["", Validators.required],
      // visaCtl: ["", Validators.required]
      purposeCtl: [""],
      visaCtl: [""],
      stayDate: [""]
    });

    this.secondFormGroup = this._formBuilder.group({
      familyName: [""],
      givenName: [""],
      dob: [""],
      sexCtl: [""],
      mStatusCtl: [""],
      country: [""],
      nationality: [""],
      passport: [""],
      exdate: [""],
      occupation: [""],
      pExDate: [""],
      place: [""],
      authority: [""]
    });

    this.thirdFormGroup = this._formBuilder.group({
      noAndStreet: [""],
      suburb: [""],
      state: [""],
      postcode: [""],
      country: [""],
      hTelephone: [""],
      mTelephone: [""],
      snoAndStreet: [""],
      town: [""],
      province: [""],
      postal: [""],
      shTelephone: [""],
      smTelephone: [""]
    });
    this.fourthFormGroup = this._formBuilder.group({
      emergencyFamilyName: [""],
      emergencyGivenName: [""],
      emergencyRelationship: [""],
      emergencyAddress: [""],
      emergencySuburb: [""],
      emergencyState: [""],
      emergencyPostcode: [""],
      emergencyCountry: [""],
      emergencyHTelephone: [""],
      emergencyMTelephone: [""]
    });
  }
  submit() {
    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
    this.thirdFormGroup.reset();
    this.fourthFormGroup.reset();
    let submit = this.snackBar.open("Successfully Submitted", "close", {
      duration: 3000
    });
    if (submit) {
      this.router.navigate(["application/details"]);
    }
  }
}
