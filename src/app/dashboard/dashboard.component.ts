import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
      <div fxLayout="column">
          <div class="events">
              <mat-toolbar color="primary">
                  <mat-toolbar-row >
                      Missions
                  </mat-toolbar-row>
              </mat-toolbar>
              <app-mission-item
                      *ngFor="let mission of missions"
                      [mission] = "mission"
              >
              </app-mission-item>
          </div>
      </div>
  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  missions: string[] = [];
  constructor() { }

  ngOnInit() {
  }

}
