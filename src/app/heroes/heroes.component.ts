import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  template: `
      <div fxLayout="column">
          <div class="events">
              <mat-toolbar color="primary">
                  <mat-toolbar-row >
                      Heroes
                  </mat-toolbar-row>
              </mat-toolbar>


              <app-hero-item
                      *ngFor="let hero of heroes"
                      [hero] = "hero"
              >
              </app-hero-item>
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
