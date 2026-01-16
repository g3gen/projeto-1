import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Funcionario } from './entities/funcionario.entity';
import { FuncionarioService } from './services/funcionario.service';

@Module({
  imports: [TypeOrmModule.forFeature([Funcionario])],
  providers: [FuncionarioService],
  controllers: [],
  exports: [],
})
export class FuncionarioModule {}
