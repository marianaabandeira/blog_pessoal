# 💻 Blog Pessoal | Backend API com NestJS

O **Blog Pessoal** é uma **API RESTful** desenvolvida com **NestJS** para gerenciar **usuários, postagens e temas**, com foco em **boas práticas de backend, segurança e escalabilidade**.  
Este projeto foi desenvolvido para **demonstrar habilidades em Node.js, TypeScript e desenvolvimento de APIs modernas**.

---

## 🚀 Projeto em Funcionamento

Acesse a aplicação:  
🌐 **[Blog Pessoal](https://blogpessoal-zvr5.onrender.com)**  

Documentação interativa (Swagger):  
📄 **[Swagger](https://blogpessoal-zvr5.onrender.com/swagger)**

---

## 🛠️ Tecnologias e Ferramentas utilizadas

| Camada | Tecnologias |
|--------|------------|
| Backend | NestJS, TypeScript, Node.js |
| Banco de Dados | PostgreSQL, TypeORM |
| Autenticação | JWT, Bcrypt |
| Testes | Jest, Supertest (E2E) |
| Documentação | Swagger |

> 💡 Foco em **código limpo, segurança e manutenção**.

---

## ✨ Funcionalidades Implementadas

- **Usuários**
  - Cadastro com validação
  - Login com token JWT
  - Atualização e listagem de dados

- **Postagens**
  - CRUD completo (Criar, Ler, Atualizar, Deletar)
  - Associação com temas

- **Temas**
  - Criar e listar temas
  - Relacionamento com postagens

- **Segurança**
  - Rotas protegidas via **Bearer Token**

---

## 🧪 Testes Automatizados

Testes garantem que **os principais fluxos da API funcionem corretamente**:  

- Cadastro de usuário  
- Login e geração de token JWT  
- Acesso a rotas protegidas  

Rodando localmente:
```bash
npm run test:e2e
```

---

## 🎯 Execução em Ambiente Local

Instruções para execução da aplicação em ambiente local.

### Pré-requisitos
* **Node.js** (Versão 18 ou superior)
* **NPM** (Gerenciador de pacotes)
* **Banco de dados** MySQL ou PostgreSQL (SQLite pode ser utilizado para desenvolvimento)

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone [https://github.com/marianaabandeira/blog_pessoal.git)
   cd blog_pessoal
   ```
   
2. **Instale as dependências:**
   
    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente criando um arquivo .env na raiz do projeto com as configurações do banco de dados. Exemplo:
   
    ```Snippet de código
    PORT=4000
    DB_TYPE=mysql
    DB_HOST=localhost
    DB_PORT=3306
    DB_USERNAME=root
    DB_PASSWORD=sua_senha
    DB_DATABASE=blog_pessoal_db
    JWT_SECRET=sua_chave_secreta
    ```
> ℹ️ A aplicação é executada por padrão na porta 4000, utilizando o fuso horário UTC-03:00.

4. Execute a aplicação:
   
     ```bash
     npm run start:dev
     ```
---

  ## 👩‍💻 Desenvolvedora
  
Mariana Badeira Santos
  
  **Github: [https://github.com/marianaabandeira)**
  
  **Linkedin: [https://www.linkedin.com/in/marianaabandeira/)**

  ---

📌 Projeto desenvolvido como parte do portfólio técnico, com foco em APIs REST, boas práticas de backend e autenticação segura.


