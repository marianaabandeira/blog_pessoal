import { Injectable } from "@nestjs/common"; // Importa o decorator que transforma a classe em um service do NestJS
import * as bcrypt from 'bcrypt'; // Importa a biblioteca bcrypt que faz a criptografia de senhas


@Injectable()   // Diz ao NestJS que esta classe pode ser usada (injetada) em outros serviços e controllers
export class Bcrypt {

    // Função responsavel por criptografar a senha o usuário
    async criptografarSenha(senha: string): Promise<string> {
        let saltos: number = 10; // Quantidade de "salt rounds" — quanto maior, mais seguro, porém mais lento
        return await bcrypt.hash(senha, saltos) // Gera o hash da senha usando bcrypt e retorna como string
    }

     // Função responsável por comparar a senha criptografada (do banco) com a senha digitada (login)
    async compararSenhas(senhaBanco: string, senhaDigitada: string): Promise<boolean> {
        return bcrypt.compareSync(senhaDigitada, senhaBanco); // Compara sincronamente e retorna true se bater, false caso contrário
    }

}