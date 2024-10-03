import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { CreateProductService } from './services/createProduct/create-product.service';
import { FindAllProducts } from './services/getAllProducts/get-all-products.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductsService, CreateProductService, FindAllProducts],
})
export class ProductsModule {}
