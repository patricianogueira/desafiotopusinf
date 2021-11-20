Tecnologias utilizadas com suas respectivas versões;

"cors": "^2.8.5",
"express": "^4.17.1",
"knex": "^0.95.14",
"sqlite3": "^5.0.2"
Node: v16.13.0


yarn add cors
yarn add express
yarn add knex
yarn add sqlite3
yarn add insomnia
yarn add node


no arquivo knexfile.js adicionar a seguinte configuração no module.export 
migrations = {
	directory: '.src/database/migration'
}

Para executar as migrations, realiza os seguintes comandos no terminal do VS Code:
npx knex migrate:make create_funcionario
npx knex migrate:latest
npx knex migrate:make create_dependente
npx knex migrate:latest


Orientações de execução do código;
Abrir a pasta backend no terminal no modo administrador ou no terminal do VS Code  e executar o comando npm start ou yarn start.