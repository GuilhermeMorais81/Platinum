import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../models/Game';
import { DatePipe } from '@angular/common';

@Component({
  imports: [CommonModule, DatePipe],
  selector: 'app-detalhe',
  styleUrl: './detalhe.css',
  templateUrl: './detalhe.html',
})
export class Detalhe implements OnInit {

  game : Game | null = null;
  
  get notFound() : boolean {
    return this.game === null;
  }

  ngOnInit(): void {
    let json : string | null = localStorage.getItem("gameDetail");
    if(json !== null) this.game = Object.assign(new Game(0, "", 0, 0, new Date(), ""), JSON.parse(json));
  }
}
