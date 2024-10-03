import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductService } from './services/createProduct/create-product.service';
import { FindAllProducts } from './services/getAllProducts/get-all-products.service';

@Injectable()
export class ProductsService {
  constructor(
    private readonly createProductService: CreateProductService,
    private readonly findAllProducts: FindAllProducts,
  ) {}

  async create(createProductDto: CreateProductDto) {
    return await this.createProductService.createProduct(createProductDto);
  }

  async findAll() {
    return await this.findAllProducts.findAllProducts();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
