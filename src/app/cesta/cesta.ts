import { Component, OnInit, inject } from '@angular/core';
import { CestaModel } from '../models/CestaModel';
import { CommonModule } from '@angular/common';
import { ItemCesta } from '../models/ItemCesta';
import { CestaService } from '../cesta-service';

@Component({
  imports: [CommonModule],
  selector: 'app-cesta',
  styleUrl: './cesta.css',
  templateUrl: './cesta.html',
})
export class Cesta implements OnInit {
  private cestaService = inject(CestaService)
  cesta : CestaModel = new CestaModel();

  ngOnInit(): void {
    this.cesta = this.cestaService.getCesta();
  }

  isEmpty() : boolean {
    return this.cesta.itens.length == 0;
  }

  getTotalValue(): string {
    let sum : number = 0;
    for(let item of this.cesta.itens) 
      sum = sum + item.total;
    return sum.toFixed(2);
  }

  getPrice(item : ItemCesta) : string {
    if(item.game?.salesPercent == 0) 
      return item.game?.price.toFixed(2);
    else 
      return (item.game?.price! * (1 - item.game?.salesPercent!)).toFixed(2);
  }

  cleanCesta() {
    localStorage.removeItem("cesta");
    window.location.reload();
  }
}
