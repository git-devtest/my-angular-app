// src/app/components/user-card/user-card.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class.active]="isActive">
      <h2>{{ user.name }}</h2>
      <button (click)="onActivate()">
        {{ isActive ? 'Desactivar' : 'Activar' }}
      </button>
    </div>
  `,
  styles: [`
    .active { background-color: #e0e0ff; }
    div { padding: 1rem; border: 1px solid #ccc; }
  `]
})
export class UserCardComponent {
  user = { name: 'Jhon Harold' };
  isActive = false;

  onActivate() {
    this.isActive = !this.isActive;
  }
}