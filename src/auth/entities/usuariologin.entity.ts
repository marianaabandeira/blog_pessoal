import { ApiProperty } from "@nestjs/swagger"

export class UsuarioLogin {

    @ApiProperty() 
    public usuario: string

    @ApiProperty() 
    public senha: string

}

/**
 * Classe utilizada no login, serve apenas para receber e-mail e senha
 * Não cria tabela no banco
 */