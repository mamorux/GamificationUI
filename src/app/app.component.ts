import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <mat-toolbar color="primary">
          <mat-toolbar-row >
              Gamification heroes
          </mat-toolbar-row>
      </mat-toolbar>
      <mat-sidenav-container class="my-sidenav-container">
          <mat-sidenav #sidenav mode="side">
              <mat-nav-list>
                  <a mat-list-item routerLink="/heroes">Heroes</a>
                  <a mat-list-item routerLink="/dashboard">Dashboard</a>
                  <a mat-list-item routerLink="/errors">Errors</a>
              </mat-nav-list>
          </mat-sidenav>
          <mat-sidenav-content>
              <button mat-icon-button (click)="sidenav.toggle()">
                  <mat-icon>menu</mat-icon>
              </button>
              <!--    <app-ws-client></app-ws-client>-->
              <router-outlet></router-outlet>
          </mat-sidenav-content>
      </mat-sidenav-container>
       `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GamificationUI';
}
