import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
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

}