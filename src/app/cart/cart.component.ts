import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  addToCartForm: FormGroup;
  productList: any = [];
  constructor(private formbuilder: FormBuilder,private product:ProductService) {
      this.addToCartForm = this.formbuilder.group({
          productName: [''],
          price: [''],
      })
  }
  ngOnInit(): void {
      let data = localStorage.getItem('productList');
      this.productList = JSON.parse(data || '');

      
  }
 
quantity = 0
  addToCart = true;


  addToCartButton() {
    this.addToCart = false;
  }

  delete(i: any) {
    this.productList.splice(i, 1);
    localStorage.setItem('productList', JSON.stringify(this.productList));
}

add(){
  
}
}
