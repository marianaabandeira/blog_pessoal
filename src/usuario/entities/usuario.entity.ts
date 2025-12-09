import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Postagem } from "../../postagem/entities/postagem.entity"


@Entity({ name: "tb_usuarios" })    
// Define que esta classe será convertida em uma tabela chamada "tb_usuarios"
export class Usuario {

    @PrimaryGeneratedColumn()
    // Chave primária gerada automaticamente (auto increment)
    id: number

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    // Nome do usuário — obrigatório
    nome: string

    @IsEmail()
    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    // E-mail do usuário — obrigatório e precisa ter formato válido
    usuario: string

    @MinLength(8)
    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    // Senha do usuário — obrigatória e precisa ter no mínimo 8 caracteres
    senha: string

    @Column({ length: 5000 })
     // URL ou base64 da foto do usuário — opcional
    foto: string

    // Indica o lado UM do relacionamento, indicando que esse campo se conecta ao campo Usuario da Model Postagem
    @OneToMany(() => Postagem, (postagem) => postagem.usuario)
    // RELACIONAMENTO: UM usuário pode ter VÁRIAS postagens.
    // Esse campo representa a lista de postagens criadas pelo usuário.
    postagem: Postagem[]

}