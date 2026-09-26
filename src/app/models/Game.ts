export class Game {
    id : number;
    title : string;
    price : number;
    salesPercent : number;
    releaseDate : Date;
    description: string;

    constructor(id : number, title : string, price : number, salesPercent : number, releaseDate : Date, description : string) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.salesPercent = salesPercent;
        this.releaseDate = releaseDate;
        this.description = description;
    }

    getTitle() : string {
        if(this.title.length <= 39) return this.title;
        else return this.title.slice(0, 37) + "...";
    }

    getFullTitle() : string {
        return this.title;
    }

    getPrice() : string {
        if(this.salesPercent == 0) 
            return this.price.toFixed(2);
        else 
            return (this.price * (1 - this.salesPercent)).toFixed(2);
    }

    getFullPrice() : string {
        return this.price.toFixed(2);
    }

    onSale() : boolean {
        return this.salesPercent > 0;
    }
}