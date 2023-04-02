import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  addToCartForm: FormGroup;
  productList: any = [];
  constructor(private formbuilder: FormBuilder,private product:ProductService) {
      this.addToCartForm = this.formbuilder.group({
          productName: [''],
          price: [''],
      })
  }

  addedProducts: product[] | undefined ;

  ngOnInit(): void {
      let data = localStorage.getItem('productList');
      let cartdata = localStorage.getItem('cart');

      
      this.productList = JSON.parse(data || '');
      this.addedProducts = this.product.getAddedProducts();
  }

  // addToCart = true;

  // addToCartButton() {
  //   this.addToCart = false;
  // }

  delete(i: any) {
    this.productList.splice(i, 1);
    localStorage.setItem('productList', JSON.stringify(this.productList));
}

addToCart(product: product) {
  this.product.addToCart(product);
  product.isAddedToCart = true;
}

}
