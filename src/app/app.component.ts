import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  timeOnSite = 0;

  ngOnInit() {
    setInterval(() => {
      this.timeOnSite++;
    }, 1000);
  }


}
