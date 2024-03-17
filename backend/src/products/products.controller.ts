import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import type {Shoes} from '../constants/dummy-data'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(): Shoes[] {
    return this.productsService.getProducts();
  }
}
