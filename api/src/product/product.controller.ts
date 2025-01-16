import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Inject,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles/roles.guard';
import { Roles } from '../auth/roles/roles.decorator';
import { Role } from '../auth/roles/roles.enum';
import { CreateProductUseCase } from './usecases/create-product.usecase';
import { GetAllProductUseCase } from './usecases/get-all.usecase';
import { GetOneProductUseCase } from './usecases/get-one.usecase';
import { UpdateProductUseCase } from './usecases/update.usecase';
import { DeleteProductUseCase } from './usecases/delete.usecase';

@UseGuards(AuthGuard, RolesGuard)
@Controller('product')
export class ProductController {
  @Inject(CreateProductUseCase)
  private createProductUseCase: CreateProductUseCase;

  @Inject(GetAllProductUseCase)
  private getAllProductUseCase: GetAllProductUseCase;

  @Inject(GetOneProductUseCase)
  private getOneProductUseCase: GetOneProductUseCase;

  @Inject(UpdateProductUseCase)
  private updateProductUseCase: UpdateProductUseCase;

  @Inject(DeleteProductUseCase)
  private deleteProductUseCase: DeleteProductUseCase;

  @Roles(Role.Stock)
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.createProductUseCase.execute(createProductDto);
  }

  @Get()
  findAll() {
    return this.getAllProductUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getOneProductUseCase.execute(id);
  }

  @Roles(Role.Stock)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.updateProductUseCase.execute(id, updateProductDto);
  }

  @Roles(Role.Stock)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteProductUseCase.execute(id);
  }
}
