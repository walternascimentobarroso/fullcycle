Desafio NodeJS

Executar o comando:

docker-compose up -d

Três serviços serão iniciados:

    Banco de Dados MYSQL (Container: db)
    Aplicação em NodeJS (Container: App, na porta 3000)
    Nginx na porta 80, com redirect para a aplicação NodeJs
