import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideUser } from '@lucide/angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LucideUser],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Platinum');
}
