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
        status: "Approved",
        regDate: "04-Feb-2020",
        reference: "51600024998",
        type: {
          visa: "Business Visa",
          stayLength: "3 DAYS",
          stayFund: "Own Funds",
          receiptNo: "kaMqggaq",
          feeAmt: "$72.46 AUD"
        },
        applicant: {
          applicant: "Jude Dinesh Cedric Weerasekera",
          nationality: "Canada",
          countryOfBirth: "Sri Lanka",
          DofB: "16-Apr-1972"
        },
        passport: {
          passportNo: "HN146409",
          expiryDate: "31-Oct-2026",
          issueDate: "31-Oct-2016"
        },
        alias: {
          givenNames: "N/A",
          surname: "N/A"
        },
        history: {
          visited: "No",
          criminal: "No",
          deported: "No",
          patient: "No"
        },
        address: {
          residential: "N/A",
          street: "20 Warrumbangle Prd",
          suburb: "Fitzgibban",
          state: "Queensland",
          postcode: "4018",
          country: "Australia",
          phone: "+61478516434"
        },
        emergency: {
          givenNames: "Marie",
          familyName: "mudiappa",
          homePhone: "416464501"
        }
      },
      {
        id: 1,
        status: "Awaiting Payment",
        regDate: "04-Feb-2020",
        reference: "N/A",
        type: {
          visa: "Visitor Visa",
          stayLength: "3 DAYS",
          stayFund: "Own Funds",
          receiptNo: "kaMqggaq",
          feeAmt: "$72.46 AUD"
        },
        applicant: {
          applicant: "Jude Dinesh Cedric Weerasekera",
          nationality: "Canada",
          countryOfBirth: "Sri Lanka",
          DofB: "16-Apr-1972"
        },
        passport: {
          passportNo: "HN146409",
          expiryDate: "31-Oct-2026",
          issueDate: "31-Oct-2016"
        },
        alias: {
          givenNames: "N/A",
          surname: "N/A"
        },
        history: {
          visited: "No",
          criminal: "No",
          deported: "No",
          patient: "No"
        },
        address: {
          residential: "N/A",
          street: "20 Warrumbangle Prd",
          suburb: "Fitzgibban",
          state: "Queensland",
          postcode: "4018",
          country: "Australia",
          phone: "+61478516434"
        },
        emergency: {
          givenNames: "Marie",
          familyName: "mudiappa",
          homePhone: "416464501"
        }
      },
      {
        id: 2,
        status: "Rejected Visa",
        regDate: "04-Feb-2020",
        reference: "2342423445",
        type: {
          visa: "Restricted Visa",
          stayLength: "3 DAYS",
          stayFund: "Own Funds",
          receiptNo: "kaMqggaq",
          feeAmt: "$72.46 AUD"
        },
        applicant: {
          applicant: "Jude Dinesh Cedric Weerasekera",
          nationality: "Canada",
          countryOfBirth: "Sri Lanka",
          DofB: "16-Apr-1972"
        },
        passport: {
          passportNo: "HN146409",
          expiryDate: "31-Oct-2026",
          issueDate: "31-Oct-2016"
        },
        alias: {
          givenNames: "N/A",
          surname: "N/A"
        },
        history: {
          visited: "No",
          criminal: "No",
          deported: "No",
          patient: "No"
        },
        address: {
          residential: "N/A",
          street: "20 Warrumbangle Prd",
          suburb: "Fitzgibban",
          state: "Queensland",
          postcode: "4018",
          country: "Australia",
          phone: "+61478516434"
        },
        emergency: {
          givenNames: "Marie",
          familyName: "mudiappa",
          homePhone: "416464501"
        }
      }
    ];
  }
}
