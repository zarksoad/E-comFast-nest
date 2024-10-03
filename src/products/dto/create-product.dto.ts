import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'it should be a  string' })
  @IsNotEmpty({ message: 'it should be empty' })
  name: string;

  @IsNumber()
  @IsPositive({ message: 'price should be a positive number' })
  @IsNotEmpty()
  price: number;

  @IsString({ message: 'it should be a string' })
  @IsNotEmpty({ message: 'it should be empty' })
  description: string;

  @IsNumber()
  @IsPositive({ message: 'stock must be a non-negative integer' })
  @IsNotEmpty({ message: 'it should be empty' })
  stock: number;
}
