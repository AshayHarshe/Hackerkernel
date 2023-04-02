import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  addToCartForm: FormGroup;
    productList: any = [];
    constructor(private formbuilder: FormBuilder) {
        this.addToCartForm = this.formbuilder.group({
            productName: [''],
            price: [''],
        })
    }
    ngOnInit(): void {
        let data = localStorage.getItem('productList');
        this.productList = JSON.parse(data || '');
    }
    submit() {
        this.productList.push(this.addToCartForm.value)
        localStorage.setItem('productList', JSON.stringify(this.productList));
    }
}
