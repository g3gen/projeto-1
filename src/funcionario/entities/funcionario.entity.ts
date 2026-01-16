import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tb_funcionarios" })
export class Funcionario {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    nome: string;

    @IsNotEmpty()
    @Column({ length: 50, nullable: false })
    cargo: string;

    @IsNotEmpty()
    @Column('decimal', { precision: 10, scale: 2, nullable: false })
    salario: number;

    @IsNotEmpty()
    @Column({ type: "date", nullable: false })
    dataAdmissao: Date;
}
