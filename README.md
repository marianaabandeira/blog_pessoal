# 💻 Blog Pessoal | Backend API com NestJS

O **Blog Pessoal** é uma **API RESTful** desenvolvida com **NestJS**, voltada para o gerenciamento de **usuários, postagens e temas**, com foco em **boas práticas de backend**, **segurança**, **organização de código** e **escalabilidade**.

O projeto demonstra habilidades em **Node.js**, **TypeScript** e **desenvolvimento de APIs modernas**, incluindo autenticação, relacionamento entre entidades e testes automatizados.

---

## 🚀 Projeto em Funcionamento

🌐 **API em produção:**  
https://blogpessoal-zvr5.onrender.com  

📄 **Documentação Swagger:**  
https://blogpessoal-zvr5.onrender.com/swagger

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

| Camada | Tecnologias |
|------|------------|
| Backend | NestJS, Node.js, TypeScript |
| Banco de Dados | PostgreSQL, TypeORM |
| Autenticação | JWT, Bcrypt |
| Testes | Jest, Supertest (E2E) |
| Documentação | Swagger |

> 💡 Projeto desenvolvido com foco em **código limpo**, **segurança** e **manutenção**.

---

## ✨ Funcionalidades Implementadas

### 👤 Usuários
- Cadastro com validação de dados
- Login com autenticação JWT
- Atualização e listagem de informações do usuário

### ✍️ Postagens
- CRUD completo (Criar, Listar, Atualizar e Deletar)
- Associação de postagens a temas

### 🏷️ Temas
- Cadastro e listagem de temas
- Relacionamento **Tema ↔ Postagem**  
  (um tema pode possuir várias postagens)

### 🔐 Segurança
- Rotas protegidas via **Bearer Token (JWT)**

---

## 🧪 Testes Automatizados

O projeto conta com **testes E2E**, garantindo o correto funcionamento dos principais fluxos da API:

- Cadastro de usuário
- Login e geração de token JWT
- Acesso a rotas protegidas

### Executar os testes:
```bash
npm run test:e2e
```

---

## 🎯 Execução em Ambiente Local

Instruções para execução da aplicação em ambiente local.

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **NPM**
- **PostgreSQL**

### Passo a Passo

1. **Clone o repositório:**

```bash
git clone https://github.com/marianaabandeira/blog_pessoal.git
```
```bash
cd blog_pessoal
```
   
2. **Instale as dependências:**
   
```bash
npm install
```

3. Configure as variáveis de ambiente criando um arquivo .env na raiz do projeto com as configurações do banco de dados. Exemplo:
   
```env
PORT=4000
DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=sua_senha
DB_DATABASE=blog_pessoal
JWT_SECRET=sua_chave_secreta
```

> ℹ️ A aplicação é executada por padrão na porta 4000, utilizando o fuso horário UTC-03:00.

4. Execute a aplicação:
   
```bash
npm run start:dev
```

---

  ## 👩‍💻 Desenvolvedora

**Mariana Bandeira Santos**

- GitHub: https://github.com/marianaabandeira  
- LinkedIn: https://www.linkedin.com/in/marianaabandeira/


