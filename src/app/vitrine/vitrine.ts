import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from "../models/Game";
import { Router } from '@angular/router';
import { CestaService } from '../cesta-service';

@Component({
  imports: [CommonModule],
  selector: 'app-vitrine',
  styleUrl: './vitrine.css',
  templateUrl: './vitrine.html',
})
export class Vitrine {
  private router = inject(Router);
  private cestaService = inject(CestaService);

  lista: Game[] = [
  new Game(
    1,
    'Silent Hill 3',
    29.99,
    0.20,
    new Date('2003-09-01'),
    'Uma obra-prima do terror psicologico seguindo Heather Mason.'
  ),
  new Game(
    2,
    'Silent Hill 2',
    59.99,
    0.0,
    new Date('2001-09-24'),
    'Uma obra-prima do terror psicológico seguindo James Sunderland em uma cidade coberta por neblina.'
  ),
  new Game(
    3,
    'Castlevania: Symphony of the Night',
    19.99,
    0.10,
    new Date('1997-03-20'),
    'O jogo de plataforma e ação que definiu o gênero, estrelando Alucard explorando o castelo do Drácula.'
  ),
  new Game(
    4,
    'Metal Gear Solid V: The Phantom Pain',
    29.99,
    0.70,
    new Date('2016-02-13'),
    'O ultimo titulo lançado da iconica serie de operações taticas de espionagem por Hideo Kojima.'
  )
  ];

  showDetail(game : Game) {
    localStorage.setItem("gameDetail", JSON.stringify(game));
    this.router.navigate(['/detalhe'])
  }

  addToCesta(game : Game) {
    this.cestaService.addToCesta(game);
  }
}
