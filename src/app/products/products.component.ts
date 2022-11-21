import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../core/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[]=[];

  constructor() { }

  ngOnInit(): void {
    this.products=[
      {id: '1', title: 'T-shirt 1', quantity: 0, price: 18, like: 0, picture:'https://static.pullandbear.net/2/photos/2022/I/0/2/p/9247/599/712/9247599712_1_1_3.jpg?t=1663000629947'},
      {id: '2', title: "T-shirt 2",  quantity: 10, price: 21, like: 0, picture:'https://static.pullandbear.net/2/photos/2022/I/0/2/p/9247/599/712/9247599712_1_1_3.jpg?t=1663000629947'},
      {id: '3', title: "T-shirt 3",  quantity: 8, price: 16, like: 0, picture:'https://static.pullandbear.net/2/photos/2022/I/0/2/p/9247/599/712/9247599712_1_1_3.jpg?t=1663000629947'},
    ]
    
    
  }
 Buy(id:string){
  //this.products.map((product)=>{
    //if(product.id.match(id)) {
      //product.quantity=product.quantity-1;
    //}
  //})
  this.products.map((product)=>product.id.match(id)?product.quantity--:'product not found')
  //ki nebda bech na3mlou traitement sans else tkoun haka:
  //this.products.map((product)=>product.id.match(id)&&product.quantity--)
 }

}
