import { Injectable, Service, inject } from '@angular/core';
import { Game } from './models/Game';
import { CestaModel } from './models/CestaModel';
import { ItemCesta } from './models/ItemCesta';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class CestaService {

    private router = inject(Router);

    addToCesta(game : Game){
        let cesta : CestaModel = this.getCesta();
        let item : ItemCesta = new ItemCesta(game, 1);
        let itemRepetido = cesta.itens.find(x => x.game?.id === item.game?.id)
        if(itemRepetido) this.increaseItemQuantity(itemRepetido, 1);
        else cesta.itens.push(item);
        localStorage.setItem("cesta", JSON.stringify(cesta));
        this.router.navigate(['/cesta']);
    }

    getCesta() {
        if (typeof localStorage !== 'undefined') {
            const json = localStorage.getItem("cesta");
            if (json) {
                return Object.assign(new CestaModel(), JSON.parse(json));
            }
        }
        return new CestaModel();
    }

    increaseItemQuantity(item : ItemCesta, increase : number) {
        item.quantity += increase;
        this.updateTotal(item);
    }

    updateTotal(item : ItemCesta) {
        item.total = item.quantity * this.getPrice(item.game!);
    }

    getPrice(game : Game) : number {
        if(game.salesPercent == 0) 
            return game.price;
        else 
            return (game.price * (1 - game.salesPercent));
    }
}
