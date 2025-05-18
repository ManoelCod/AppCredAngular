# AppCredAngular

App para consulta de crédito utilizando Angular.

## Pré-requisitos

- [Docker](https://www.docker.com/) instalado
- [Docker Compose](https://docs.docker.com/compose/) instalado

## Como executar a aplicação com Docker

1. **Clone o repositório:**
   ```sh
   git clone <url-do-repositorio>
   cd AppCredAngular/appcred
   ```

2. **Build e execução com Docker Compose:**
   ```sh
   docker compose up --build
   ```

3. **Acesse a aplicação:**
   - Abra o navegador e acesse: [http://localhost:4200](http://localhost:4200)

## Estrutura do Docker

- O Dockerfile realiza o build da aplicação Angular e serve os arquivos estáticos usando NGINX.
- O `docker-compose.yml` expõe a aplicação na porta 4200 do host.

## Observações

- Certifique-se de que o backend (API) esteja rodando e acessível para que a aplicação Angular funcione corretamente.
- Se precisar alterar a URL da API, edite o arquivo:
  ```
  src/app/services/apicred.service.ts
  ```
  e ajuste o valor de `baseUrl`.

---

> Para dúvidas ou problemas, consulte a documentação oficial do Angular ou abra uma issue neste repositório.
