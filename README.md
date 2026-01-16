# 📄 DOCUMENTAÇÃO – PROJETO RH

## 1. Título do Projeto e Modelo de Negócio

**Título:** RH Tech – Sistema de Gestão de Colaboradores  

**Modelo de Negócio:** Sistema de cadastro de RH para gerenciamento interno de funcionários.

---

## 2. Descrição Geral

O projeto consiste em uma **API Backend** desenvolvida para facilitar o gerenciamento de informações de funcionários de uma empresa. O sistema permite:

* Registro centralizado de colaboradores
* Atualização de dados salariais e cargos
* Remoção de registros
* Consulta rápida de profissionais cadastrados

---

## 3. Entidade e Atributos

A entidade principal do sistema é **Funcionário** (`Employee`), contendo os seguintes atributos:

| Atributo        | Tipo                | Descrição                          |
| --------------- | ------------------- | ---------------------------------- |
| `id`            | Long / Primary Key  | Identificador único do colaborador |
| `nome`          | String              | Nome completo do colaborador       |
| `salario`       | BigDecimal / Double | Valor da remuneração               |
| `cargo`         | String              | Função exercida na empresa         |
| `data_admissao` | LocalDate / Date    | Data de entrada na empresa         |

---

## 4. Funcionalidades Principais (CRUD)

O sistema implementa as seguintes operações fundamentais:

* **Cadastrar (POST):** Cria um novo registro de colaborador
* **Listar Todos (GET):** Retorna a lista de todos os funcionários cadastrados
* **Buscar por ID (GET):** Localiza um colaborador específico pelo seu identificador
* **Atualizar (PUT):** Permite alterar as informações de um colaborador existente
* **Deletar (DELETE):** Remove o registro de um colaborador do sistema

### 🔍 Consulta Específica

Além do CRUD básico, o sistema conta com um método adicional:

* `findAllByCargo(String cargo)` – Filtra e retorna colaboradores de acordo com o cargo informado

---

## 5. Tecnologias Utilizadas

As seguintes tecnologias são utilizadas no desenvolvimento da aplicação:

* **Backend:** TypeScript com o framework **NestJS**
* **Banco de Dados:** MySQL
* **Testes de API:** Postman ou Insomnia

---

## 📌 Observações

Este projeto tem como objetivo o aprendizado e a aplicação prática de conceitos de **API REST**, **CRUD**, **NestJS** e **integração com banco de dados relacional**.
