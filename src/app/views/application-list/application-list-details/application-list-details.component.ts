import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApplicationListService } from "../application-list.service";

@Component({
  selector: "app-application-list-details",
  templateUrl: "./application-list-details.component.html",
  styleUrls: ["./application-list-details.component.scss"]
})
export class ApplicationListDetailsComponent implements OnInit {
  rows = [];
  data: any = [];
  visaId: number;

  constructor(
    private route: ActivatedRoute,
    private service: ApplicationListService
  ) {}

  ngOnInit() {
    this.visaId = this.route.snapshot.params["id"];
    this.rows = this.service.getAll();
    this.loadData();
  }

  loadData() {
    console.log(this.rows);
    this.data = this.rows[this.visaId]; // should be change this index id as visa id
    console.log(this.data);
  }
}
