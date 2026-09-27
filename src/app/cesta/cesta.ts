import { Component } from '@angular/core';
import { CestaModel } from '../models/CestaModel';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-cesta',
  styleUrl: './cesta.css',
  templateUrl: './cesta.html',
})
export class Cesta {
  cesta : CestaModel = new CestaModel();

  ngOnInit(): void {
    let json = localStorage.getItem("cesta");
    if(json) {
      this.cesta = JSON.parse(json);
    }
    else console.log("CESTA NOT FOUND");
  }

  estaVazio() : boolean {
    return this.cesta.itens.length == 0;
  }

  calcQuantidadeTotal() : number {
    let sum : number = 0;
    for(let item of this.cesta.itens) 
      sum = sum + item.quantity;
    return sum;
  }

  calcValorTotal(): string {
    let sum : number = 0;
    for(let item of this.cesta.itens) 
      sum = sum + item.total;
    return sum.toFixed(2);
  }
}
