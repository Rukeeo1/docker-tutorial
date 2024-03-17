import { Injectable } from '@nestjs/common';
import { shoes } from '../constants/dummy-data';
import type { Shoes } from '../constants/dummy-data';

@Injectable()
export class ProductsService {
  getProducts(): Shoes[] {
    return shoes;
  }
}
