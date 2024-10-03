import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { CreateProductService } from './services/createProduct/create-product.service';
import { FindAllProducts } from './services/getAllProducts/get-all-products.service';
import { CheckIfProductExist } from './services/common/check-if-product-exist.service';
import { DeleteProductService } from './services/deleteProduct/delete.product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    CreateProductService,
    FindAllProducts,
    CheckIfProductExist,
    DeleteProductService,
  ],
})
export class ProductsModule {}
