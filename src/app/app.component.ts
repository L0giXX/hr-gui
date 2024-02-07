import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { CardComponent } from './shared/components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatIcon, CardComponent],
  template: `
    <div class="div-main">
      <header>
        <nav>
          <a id="nav-a-main" href="#">HR GUI</a>
          <a href="#"> Dashboard </a>
          <a href="#"> Employees </a>
          <a href="#"> Departments </a>
          <a href="#"> Reports </a>
        </nav>
      </header>
      <main>
        <h1>Welcome to Acme Inc HR System</h1>
        <p>Manage your employees and departments with ease.</p>
        <section>
          <app-card
            [cardTitle]="'Employee count'"
            [cardValue]="235"
            [iconName]="'users'"
          ></app-card>
          <app-card
            [cardTitle]="'Department count'"
            [cardValue]="12"
            [iconName]="'network'"
          ></app-card>
          <app-card
            [cardTitle]="'Average salary'"
            [cardValue]="65000"
            [iconName]="'hand-coins'"
          ></app-card>
          <app-card
            [cardTitle]="'Open Positions'"
            [cardValue]="10"
            [iconName]="'contact'"
          ></app-card>
        </section>
      </main>
      <footer>
        <p>© 2024 Acme Inc. All rights reserved.</p>
        <nav><a href="#"> Terms of Service </a><a href="#"> Privacy </a></nav>
      </footer>
    </div>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hr-gui';
}
