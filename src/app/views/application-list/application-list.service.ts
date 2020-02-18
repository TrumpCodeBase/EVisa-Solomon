import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ApplicationListService {
  constructor() {}
  getDataConf() {
    return [
      {
        prop: "type",
        name: "Permit Type"
      },
      {
        prop: "status",
        name: "Status"
      },
      {
        prop: "regDate",
        name: "Registered Date"
      },
      {
        prop: "surname",
        name: "Surname"
      },
      {
        prop: "name",
        name: "Given Name"
      },
      {
        prop: "passport",
        name: "Passport Number"
      },
      {
        prop: "expiry",
        name: "Passport Expiry"
      },
      {
        prop: "reference",
        name: "Reference No"
      }
    ];
  }
  getAll() {
    return [
      {
        id: 0,
        type: "Business Visa",
        status: "Approved",
        regDate: "04-Feb-2020",
        surname: "Joyce",
        name: "Watson",
        passport: "HN14643209",
        expiry: "31-Oct-2026",
        reference: "51603424998"
      },
      {
        id: 1,
        type: "Visiter Visa",
        status: "Awaiting Payment",
        regDate: "23-Feb-2020",
        surname: "Joyce",
        name: "Watson",
        passport: "HN14643209",
        expiry: "31-Oct-2026",
        reference: "51603424998"
      },
      {
        id: 2,
        type: "Restricted Employment Visa",
        status: "Approved",
        regDate: "25-Feb-2020",
        surname: "Joyce",
        name: "Watson",
        passport: "HN14643209",
        expiry: "31-Oct-2026",
        reference: "51603424998"
      }
    ];
  }
}
