# 🍕 Pizza App

**Pizza App** é um projeto exemplo de um site de pizzaria desenvolvido com **Vue.js**, **Pinia**, **TypeScript** e **TailwindCSS**.  
O objetivo é demonstrar boas práticas na criação de interfaces modernas e reativas utilizando o ecossistema Vue.

---

## 📸 Preview

![Imagem do projeto em execução](https://github.com/alexsandro49/pizza-app/blob/main/screenshot.png)

---

## 🚀 Tecnologias utilizadas
### Front-end:
- [TypeScript](https://www.typescriptlang.org/)
- [Vue.js](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
### Back-end:
- [TypeScript](https://www.typescriptlang.org/)
- [Express.js](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 🧱 Funcionalidades

- Listagem de sabores de pizza
- Filtro por tipo (tradicional, especial, doce, etc)
- Exibição de preços e descrições
- Carrinho de compras
- Design responsivo

---

## 📁 Estrutura de Pastas
```
prisma/              # Schema e migrations do Prisma
src/
├── routes/          # Rotas da aplicação (Express Router)
├── utils/           # Funções auxiliares
├── prisma.ts        # Configuração do cliente Prisma
├── index.ts         # Arquivo principal do servidor
```

## Como executar o projeto:
### Preparando a API:
1. Clone o repositório da API na sua máquina:
   ```
   git clone https://github.com/alexsandro49/pizza-app-backend.git
   ```
2. Entre na pasta do repositório:
   ```
   cd pizza-app-backend/
   ```
3. Instale as dependências:
   ```
   npm install
   ```
4. Inicie o container com o banco de dados:
   ```
   docker compose up -d
   ```
5. Execute a API:
   ```
   npm run dev
   ```

#### A API é necessária para o acesso ao banco de dados.

### Preparando o front-end:
1. Clone o repositório do front-end na sua máquina:
   ```
   git clone https://github.com/alexsandro49/pizza-app.git
   ```
2. Entre na pasta do repositório:
   ```
   cd pizz-app/
   ```
3. instale as dependências:
   ```
   npm install
   ```
4. Execute o front-end:
   ```
   npm run dev
   ```

#### O projeto estará disponível em http://localhost:5173/

## Referências
- [Pizza icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/pizza/)

## License
- [MIT](https://github.com/alexsandro49/pizz-app/blob/main/LICENSE)
