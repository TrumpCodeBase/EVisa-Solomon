import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DataDialogLocationComponent } from "./data-dialog-location/data-dialog-location.component";
@Component({
  selector: "app-application-details",
  templateUrl: "./application-details.component.html",
  styleUrls: ["./application-details.component.scss"]
})
export class ApplicationDetailsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openLocation() {
    this.dialog.open(DataDialogLocationComponent, {
      width: "720px"
    });
  }
}
