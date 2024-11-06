import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { SaludoDosComponent } from './components/saludo-dos/saludo-dos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloWorldComponent, SaludoDosComponent],
  template: `
    <app-hello-world></app-hello-world>
    <app-saludo-dos></app-saludo-dos>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'my-angular-app';
}
