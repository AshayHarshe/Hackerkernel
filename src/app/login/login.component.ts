
import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm:FormGroup
  constructor(private formbuilder: FormBuilder,private router:Router,private http:HttpClient, private product:ProductService, private user:UserService) {

    this.loginForm = this.formbuilder.group({
        productName: [''],
        price: [''],
    })
   }


   productList =[]
  ngOnInit(): void {
    this.user.userAuthReload();
    
    // https://reqres.in/api/login
  
    this.product.getAllProduct().subscribe({
      next: (res: any) => {
        console.log(res.data);
        
      },
      error: (error:any) => {
        alert(error);
      },
      complete: () => {
        console.log('Request Completed');
      },
    });

  }

  loginbtn(){
   localStorage.setItem('user',this.productList[0]);
   this.router.navigate(['../home'])



  }




}
