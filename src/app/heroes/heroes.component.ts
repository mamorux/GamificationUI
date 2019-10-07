import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  template: `
      <div fxLayout="column">
          <div class="events">
              <mat-toolbar color="primary">
                  <mat-toolbar-row >
                      Incidents
                      <span class="example-spacer"></span>
<!--                      <button mat-icon-button (click)="clearIncidents()">-->
                          <mat-icon>delete</mat-icon>
<!--                      </button>-->
                  </mat-toolbar-row>
              </mat-toolbar>


              <app-incident-item
                      *ngFor="let hero of heroes"
                      [hero] = "hero"
              >
              </app-incident-item>
          </div>
      </div>
  `,
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: string[] = [];
  constructor() { }

  ngOnInit() {
  }

}
