import { Game } from "./Game";

class ItemCesta {
    game : Game | null = null;
    total : number;
    quantity : number;

    constructor(game : Game, quantity: number) {
        this.game = game;
        this.quantity = quantity;
        this.total = quantity * game.getPriceNumber();
    }
}