import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity({ name: "tb_postagens" })
// Diz para o TypeORM que esta classe vira uma tabela chamada tb_postagens
export class Postagem {

    @PrimaryGeneratedColumn()   // Chave Primária e Auto Incremental
    id: number;

    @IsNotEmpty() // Não deixa enviar um título vazio
    @Column({ length: 100, nullable: false })
    // Cria a coluna título com no máximo 100 caracteres e NOT NULL
    titulo: string;

    @IsNotEmpty()   
    @Column({ length: 1000, nullable: false })  
    // Cria a coluna texto com no máximo 1000 caracteres e NOT NULL
    texto: string;

    @UpdateDateColumn() // O banco atualiza este campo automaticamente sempre que a postagem for alterada
    data: Date;

    // Indica o lado MUITO do relacionamento, indicando que esse campo se conecta ao campo Postagem da Model Tema
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    // RELACIONAMENTO: MUITAS postagens podem ter O MESMO tema.
    // Mas cada postagem pertence a APENAS UM tema.
    tema: Tema

    // Indica o lado MUITO do relacionamento, indicando que esse campo se conecta ao campo Postagem da Model Usuario
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    // RELACIONAMENTO: MUITAS postagens podem ser criadas pelo MESMO usuário.
    // Mas cada postagem pertence a APENAS UM usuário.
    usuario: Usuario

}