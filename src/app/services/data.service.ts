import { Injectable } from '@angular/core';

// Category Interface
export interface ICategory {
  cid: number;
  name: string;
  image: string;
}

// Brand Interface
export interface IBrand {
  brandId: number;
  name: string;
  image: string;
}

// Sub Brand Interface
export interface ISubBrand {
  sid: number;
  brandId: number;
  name: string;
  image: string;
}

// Product Interface
export interface IProduct {
  pid: number;
  sid: number;
  brandId: number;
  desc: string;
  // cid: number;
  name: string;
  price: number;
  image: string;
  // color: string;
  // size: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCategories() {
    const categories = [];

    const cat1: ICategory = {
      cid: 1,
      name: 'Womens',
      image: '../../assets/images/categories/category-1.png'
    };
    const cat2: ICategory = {
      cid: 2,
      name: 'Mens',
      image: '../../assets/images/categories/category-2.png'
    };
    const cat3: ICategory = {
      cid: 3,
      name: 'Kids',
      image: '../../assets/images/categories/category-3.png'
    };

    categories.push(cat1, cat2, cat3);

    return categories;
  }

  getFeaturedBrands() {
    const brands = [];

    const brand1: IBrand = {
      brandId: 1,
      name: 'Red Wing',
      image: '../../assets/images/brands/rw.jpg'
    };
    const brand2: IBrand = {
      brandId: 2,
      name: 'Dr. Martens',
      image: '../../assets/images/brands/m.jpg'
    };

    brands.push(brand1, brand2);

    return brands;
  }

  getSubBrands() {
    const subBrands = [];

    const sub1: ISubBrand = {
      sid: 1,
      brandId: 1,
      name: 'Classic Moc',
      image: '../../assets/images/brands/Red Wing/Moc.jpg'
    };
    const sub2: ISubBrand = {
      sid: 2,
      brandId: 1,
      name: 'Iron Ranger',
      image: '../../assets/images/brands/Red Wing/Iron.jpg'
    };
    const sub3: ISubBrand = {
      sid: 3,
      brandId: 2,
      name: 'Brogue Shoes',
      image: '../../assets/images/brands/Martens/Brogue.jpg'
    };
    const sub4: ISubBrand = {
      sid: 4,
      brandId: 2,
      name: 'Buckle Shoes',
      image: '../../assets/images/brands/Martens/Buckle.jpg'
    };
    const sub5: ISubBrand = {
      sid: 5,
      brandId: 2,
      name: 'Lace Up Boots',
      image: '../../assets/images/brands/Martens/LaceUp.jpg'
    };
    const sub6: ISubBrand = {
      sid: 6,
      brandId: 2,
      name: 'Mary Jane Shoes',
      image: '../../assets/images/brands/Martens/Mary.jpg'
    };
    const sub7: ISubBrand = {
      sid: 7,
      brandId: 2,
      name: 'Oxford Shoes',
      image: '../../assets/images/brands/Martens/Oxford.jpg'
    };
    const sub8: ISubBrand = {
      sid: 8,
      brandId: 2,
      name: 'Platform Boots',
      image: '../../assets/images/brands/Martens/Platform.jpg'
    };
    const sub9: ISubBrand = {
      sid: 9,
      brandId: 2,
      name: 'Platform Shoes',
      image: '../../assets/images/brands/Martens/PlatformS.jpg'
    };
    const sub10: ISubBrand = {
      sid: 10,
      brandId: 2,
      name: 'Sandals',
      image: '../../assets/images/brands/Martens/Sandals.jpg'
    };
    const sub11: ISubBrand = {
      sid: 11,
      brandId: 2,
      name: 'Tassle Loafers',
      image: '../../assets/images/brands/Martens/Zipper.jpg'
    };
    const sub12: ISubBrand = {
      sid: 12,
      brandId: 2,
      name: 'Zipper Boots',
      image: '../../assets/images/brands/Martens/Brogue.jpg'
    };

    subBrands.push(sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8, sub9, sub10, sub11, sub12,);

    return subBrands;
  }

  getAllProducts() {
    const products = [];

    const prod1: IProduct = {
      pid: 1,
      sid: 1,
      // cid: 1,
      // color: 'whtie',
      // size:
      brandId: 1,
      name: '8863 Muleskinner',
      price: 2999.99,
      desc: 'lorem ipsum',
      image: '../../assets/images/brands/Red Wing/Classic Moc/8863 Muleskinner/Slate Muleskinner.jpg'
    };
    const prod2: IProduct = {
      pid: 2,
      sid: 1,
      brandId: 1,
      name: '1907 Rough & Tough',
      price: 3399.99,
      desc: 'lorem ipsum',
      image: '../../assets/images/brands/Red Wing/Classic Moc/1907 Rough & Tough/Copper Rough Tough.jpg'
    };
    const prod3: IProduct = {
      pid: 3,
      sid: 1,
      brandId: 1,
      name: '8131 Oro Russet Portage',
      price: 3199.99,
      desc: 'lorem ipsum',
      image: '../../assets/images/brands/Red Wing/Classic Moc/8131 Oro Russet Portage/Oro Russet.jpg'
    };
    const prod4: IProduct = {
      pid: 4,
      sid: 1,
      brandId: 1,
      name: '8756 Oro Legacy',
      price: 2999.99,
      desc: 'lorem ipsum',
      image: '../../assets/images/brands/Red Wing/Classic Moc/8756 Oro Legacy/Oro Legacy.jpg'
    };
    const prod5: IProduct = {
      pid: 5,
      sid: 2,
      brandId: 1,
      name: '8085 Rough & Tough',
      price: 3299.99,
      desc: 'lorem ipsum',
      image: '../../assets/images/brands/Red Wing/Iron Ranger/8085 Rough & Tough/IR Copper Rough Tough.jpg'
    };
    const prod6: IProduct = {
      pid: 6,
      sid: 2,
      brandId: 1,
      name: '8083 Muleskinner',
      price: 3299.99,
      desc: 'lorem ipsum',
      image: '../../assets/images/brands/Red Wing/Iron Ranger/8083 Muleskinner/Hawthorne Muleskinner.jpg'
    };
    const prod7: IProduct = {
      pid: 7,
      sid: 2,
      brandId: 1,
      name: '8083 Muleskinner',
      price: 3299.99,
      desc: 'lorem ipsum',
      image: '../../assets/images/brands/Red Wing/Iron Ranger/8083 Muleskinner/Hawthorne Muleskinner.jpg'
    };
    const prod8: IProduct = {
      pid: 8,
      sid: 3,
      brandId: 2,
      name: '3989 Yellow Stitch Smooth Leather',
      price: 2899.99,
      desc: 'lorem ipsum',
      image: '../../assets/images/brands/Martens/Brogue Shoes/3989 Yellow Stitch Smooth Leather/BLACK SMOOTH LEATHER.jpg'
    };
    const prod9: IProduct = {
      pid: 9,
      sid: 3,
      brandId: 2,
      name: '3989 BEX Smooth Leather',
      price: 3399.99,
      desc: 'lorem ipsum',
      image: '../../assets/images/brands/Martens/Brogue Shoes/3989 BEX Smooth Leather/BEX.jpg'
    };

    products.push(prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9);

    return products;
  }
}
