import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'it should be a  string' })
  @IsNotEmpty({ message: 'it should be empty' })
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString({ message: 'it should be a string' })
  @IsNotEmpty({ message: 'it should be empty' })
  description: string;

  @IsNumber()
  @IsNotEmpty({ message: 'it should be empty' })
  stock: number;
}
