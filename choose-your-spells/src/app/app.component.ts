import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "choose-your-spells";
  constructor(private httpClient: HttpClient) {}
  shownText = [];
  ngOnInit() {
    console.log("HELLO");
    this.get("http://127.0.0.1:3000/spells").subscribe(
      response => {
        console.log("response");
        console.log(response);
      },
      error => {
        console.log("error");
        console.log(error);
      }
    );
  }
  public get(url: string): Observable<any> {
    return this.httpClient.get(url);
  }
}
