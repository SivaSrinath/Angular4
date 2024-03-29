import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    //selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls: ['./product-list.component.css'] 
})

export class ProductListComponent implements OnInit{
      
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number=2;
    showImage: boolean = false;
    _listFilter: string;
    errorMessage: string;

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter=value;
        this.filteredProducts= this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    onRatingClicked(message: string): void{
        this.pageTitle = 'Product List ' + message;
    }
     
    filteredProducts: IProduct[];
    products : IProduct[]=[];

   toggleImage(): void{
       this.showImage = !this.showImage;
   }

   ngOnInit(): void{
      this.productService.getProducts().subscribe({
          next: products => {
              this.products = products,
              this.filteredProducts= this.products
          },
          error: err => this.errorMessage = err
        });
   }

   constructor(private productService: ProductService) { 
    //this.listFilter='cart';
    }

   performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) != -1);
    }
}