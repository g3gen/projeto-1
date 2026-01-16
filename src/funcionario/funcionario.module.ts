import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Funcionario } from './entities/funcionario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Funcionario])],
  providers: [],
  controllers: [],
  exports: [],
})
export class FuncionarioModule {}
