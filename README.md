# Projeto Angular I - ADA | SantanderCoders 2023

Bem-vindo ao Projeto SantanderCoders 2023 - Angular I, parte das aulas ministradas pela ADA em parceria com o Santander. Este projeto implementa um CRUD em Angular 2+ para o cadastro e listagem de clientes.

# Instalação

Certifique-se de ter o Node.js e o npm instalados. Clone o repositório e instale as dependências:

```
mkdir projeto
cd projeto
git clone https://github.com/theviolatorx/Projeto-Angular-I-ADA--SantanderCoders-2023.git .
cd Projeto-Angular-I-ADA--SantanderCoders-2023
npm install
```

# Como Usar

Inicie a aplicação localmente:

```
ng server
```

Acesse http://localhost:4200/ no navegador.

# Autenticação

Antes de acessar o CRUD, faça o login no sistema. Use as credenciais fornecidas ou crie uma nova conta.

# CRUD - Cadastro de Clientes

## Cadastro

1. Vá para a seção de cadastro na barra de navegação.
2. Preencha as informações para cadastrar um novo cliente:
   * Nome
   * Data de Nascimento
   * Email
   * Sexo

```
// Exemplo de código para cadastro de cliente
const novoCliente = {
  nome: 'Nome do Cliente',
  dataNascimento: '1990-01-01',
  email: 'cliente@email.com',
  sexo: 'Masculino/Feminino',
};

// Função para cadastrar cliente
function cadastrarCliente(cliente) {
  // Lógica de cadastro aqui
}
```

# Demonstração

Veja uma demonstração ao vivo do projeto [aqui](https://vercel.com/theviolatorx/projeto-angular-i-2023-trabalho-final).

# Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests.

# Licença

Este projeto é licenciado sob a [Licença MIT](https://opensource.org/license/mit/).

# Contato

Para feedback e discussões, entre em contato em [theviolatorx@gmail.com].