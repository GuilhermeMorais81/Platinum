import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from "../models/Game";
import { Cesta } from '../cesta/cesta';
import { ItemCesta } from '../models/ItemCesta';
import { CestaModel } from '../models/CestaModel';

@Component({
  imports: [CommonModule],
  selector: 'app-vitrine',
  styleUrl: './vitrine.css',
  templateUrl: './vitrine.html',
})
export class Vitrine {
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
    location.href="./detalhe";
  }

  addToCesta(game : Game){
    let cesta : CestaModel = this.getCesta();
    let item : ItemCesta = new ItemCesta(game, 1);
    let itemRepetido = cesta.itens.find(x => x.game?.id === item.game?.id)
    if(itemRepetido) this.increaseItemQuantity(itemRepetido, 1);
    else cesta.itens.push(item);
    localStorage.setItem("cesta", JSON.stringify(cesta));
    location.href = "./cesta";
  }

  getCesta() {
    let json = localStorage.getItem("cesta");
    //se a cesta ja existir carrega com os itens atuais
    if(json != null && json != undefined)
      return Object.assign(new CestaModel(), JSON.parse(json));
    else
      return new CestaModel();
  }

  increaseItemQuantity(item : ItemCesta, increase : number) {
    item.quantity += increase;
    this.updateTotal(item);
  }

  updateTotal(item : ItemCesta) {
    item.total = item.quantity * item.game?.getPriceNumber()!;
  }
}
