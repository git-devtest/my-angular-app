// src/app/components/hello-world/hello-world.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  template: `
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  `,
  styles: [`
    h1 { color: #333; }
    p { color: #666; }
  `]
})
export class HelloWorldComponent {
  title = 'Mi Primera Aplicación Angular';
  description = 'Bienvenido al curso de Angular 17+';
}