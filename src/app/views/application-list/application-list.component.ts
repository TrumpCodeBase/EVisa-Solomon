import { Component, OnInit } from "@angular/core";
import { ApplicationListService } from "./application-list.service";

@Component({
  selector: "app-application-list",
  templateUrl: "./application-list.component.html",
  styleUrls: ["./application-list.component.scss"]
})
export class ApplicationListComponent implements OnInit {
  rows = [];
  columns = [];

  constructor(private service: ApplicationListService) {}

  ngOnInit() {
    this.columns = this.service.getDataConf();
    this.rows = this.service.getAll();
  }
}
