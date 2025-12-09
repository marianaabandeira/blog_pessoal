import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';
import { Bcrypt } from '../../auth/bcrypt/bcrypt';

// Serviço responsável pelas operações relacionadas ao usuário (CRUD)
@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario) // Injeção do repositório do TypeORM para manipular a tabela "Usuario"
        private usuarioRepository: Repository<Usuario>,
        private bcrypt: Bcrypt  // Injeção do serviço de criptografia para manipular senhas
    ) { }

    // Busca um usuário pelo nome de usuário (login)
    async findByUsuario(usuario: string): Promise<Usuario | null> {
        return await this.usuarioRepository.findOne({
            where: {
                usuario: usuario
            }
        })
    }

    // Retorna todos os usuários cadastrados
    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find();
    }

    // Busca um usuário pelo ID
    async findById(id: number): Promise<Usuario> {
        let usuario = await this.usuarioRepository.findOne({
            where: { id }
        });

           // Lança exceção caso o usuário não exista
        if (!usuario)
            throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

        return usuario;
    }

      // Cria um novo usuário
    async create(usuario: Usuario): Promise<Usuario> {
        let usuarioBusca = await this.findByUsuario(usuario.usuario);

        if (!usuarioBusca) {
            // Antes de cadastrar o usuario chamamos a função de Criptografia construída no arquivo bcrypt - Criptografa a senha antes de salvar no banco
            usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)

            // Salva e retorna o usuário criado
            return await this.usuarioRepository.save(usuario);
        }

        // Lança exceção caso o usuário já exista
        throw new HttpException("O Usuário ja existe!", HttpStatus.BAD_REQUEST);

    }

        // Atualiza um usuário existente
    async update(usuario: Usuario): Promise<Usuario> {
        let usuarioUpdate: Usuario = await this.findById(usuario.id) // Função para localizar o usuario pelo ID
        let usuarioBusca = await this.findByUsuario(usuario.usuario) // Função para localizar o usuario pelo email

        if (!usuarioUpdate)
            throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

        if (usuarioBusca && usuarioBusca.id !== usuario.id)
            throw new HttpException('Usuário (e-mail) já Cadastrado, digite outro!', HttpStatus.BAD_REQUEST);

        // Antes de atualizar o usuario chamamos a função de Criptografia construída no arquivo bcrypt
        usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)
        return await this.usuarioRepository.save(usuario);
    }
}