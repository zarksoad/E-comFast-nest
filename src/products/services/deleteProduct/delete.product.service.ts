import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';
import { CheckIfProductExist } from '../common/check-if-product-exist.service';

@Injectable()
export class DeleteProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly checkProductExist: CheckIfProductExist,
  ) {}

  async deleteProduct(productId: number): Promise<void> {
    const product = await this.checkProductExist.CheckProduct(productId);
    await this.productRepository.delete({ id: product.id });
  }
}
