import { Component, Input } from '@angular/core';
     
class Item{
    purchase: string;
    done: boolean;
    price: number;
     
    constructor(purchase: string, price: number) {
  
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}
 
@Component({
    selector: 'purchase-app',
    templateUrl : 'app.component.html'
})
export class AppComponent { 
    text: string;
    price: number = 0;
    @Input() public showLoading: boolean = false;

    notify(){
        this.showLoading = true;
    }
    
    constructor(){};
    items: Item[] = 
    [
        { purchase: "Headphones", done: false, price: 15.9 },
        { purchase: "Camera", done: false, price: 60 },
        { purchase: "USB - cable", done: true, price: 22.6 },
        { purchase: "Beer", done: false, price:310 }
    ];
    addItem(text: string, price: number): void {
         
        if(text==null || text.trim()=="" || price==null)
            return;
        this.items.push(new Item(text, price));
    }
}