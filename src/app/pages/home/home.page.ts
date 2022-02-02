import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public categories = [];
  public featuredBrands = [];
  public subBrands = [];

  products: any[] = [];

  constructor(
    private data: DataService,
  ) { }

  ngOnInit() {
    this.categories = this.data.getCategories();
    this.featuredBrands = this.data.getFeaturedBrands();
    this.subBrands = this.data.getSubBrands();
    this.products = this.data.getAllProducts();
  }

}
