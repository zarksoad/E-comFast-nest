import { Product } from './../../entities/product.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CheckIfProductExist {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async CheckProduct(ProductId: number): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id: ProductId },
    });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }
}
