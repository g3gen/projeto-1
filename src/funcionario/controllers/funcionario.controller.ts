import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post } from "@nestjs/common";
import { FuncionarioService } from "../services/funcionario.service";
import { Funcionario } from "../entities/funcionario.entity";

@Controller("/funcionarios")
export class FuncionarioController {

    constructor(private readonly funcionarioService: FuncionarioService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Funcionario[]> {
        return this.funcionarioService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Funcionario> {
        return this.funcionarioService.findById(id);
    }

    @Get('/cargo/:cargo')
    @HttpCode(HttpStatus.OK)
    findByCargo(@Param('cargo') cargo: string): Promise<Funcionario[]> {
        return this.funcionarioService.findByCargo(cargo);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() funcionario: Funcionario): Promise<Funcionario> {
        return this.funcionarioService.create(funcionario);
    }

    

}