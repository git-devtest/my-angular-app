import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo-dos',
  standalone: true,
  template: `
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  `,
  styles: [`
    h1 { color: #00f; }
    p { color: #f00; }
  `]
})
export class SaludoDosComponent {
  title = 'Componente agregado desde cero, aplicando lo aprendido';
  description = 'Bienvenido al curso de Angular 17+';
}
