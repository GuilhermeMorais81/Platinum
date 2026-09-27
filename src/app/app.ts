import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideUser } from '@lucide/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LucideUser],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private router = inject(Router);
  protected readonly title = signal('Platinum');
  query : string = "";
  
  catchQuery(event : Event) : void {
    const raw = event.target as HTMLInputElement;
    this.query = raw.value;
  }

  sendQuery() : void {
    localStorage.setItem("query", JSON.stringify(this.query));
    this.router.navigate(['/busca']);
  }
}
