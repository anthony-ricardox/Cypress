<div align="center">

# 🌲 Cypress Automation Lab

### Projeto de estudos em Automação de Testes com Cypress

[![Cypress](https://img.shields.io/badge/Cypress-14.0-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](#-licença)

</div>

---

## 📖 Sobre o projeto

Este repositório foi criado com fins **educacionais**, reunindo testes automatizados desenvolvidos com o [Cypress](https://www.cypress.io/) para praticar conceitos de **automação de testes end-to-end (E2E)**, **testes de API**, **boas práticas de QA** e **estruturação de projetos de teste**.

A ideia é evoluir aqui os fundamentos até tópicos mais avançados, como:

- ✅ Testes E2E em interfaces web
- ✅ Testes de API (REST)
- ✅ Custom Commands
- ✅ Fixtures e massa de dados
- ✅ Page Object Model (POM)
- ✅ Integração com CI/CD

---

## 🗂️ Estrutura do projeto

```bash
cypress-automation-lab/
├── cypress/
│   ├── e2e/                # Casos de teste (specs)
│   ├── fixtures/           # Massa de dados para os testes
│   ├── support/
│   │   ├── commands.js     # Comandos customizados
│   │   └── e2e.js          # Configurações globais
│   └── downloads/          # Arquivos baixados durante os testes
├── cypress.config.js       # Configurações do Cypress
├── package.json
└── README.md
```

---

## 🚀 Tecnologias utilizadas

| Tecnologia | Descrição |
|---|---|
| [Cypress](https://www.cypress.io/) | Framework de automação de testes E2E |
| [Node.js](https://nodejs.org/) | Ambiente de execução JavaScript |
| [Mocha](https://mochajs.org/) | Framework de testes (usado internamente pelo Cypress) |
| [Chai](https://www.chaijs.com/) | Biblioteca de asserções |

---

## ⚙️ Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Git](https://git-scm.com/)
- Um editor de código, como o [VS Code](https://code.visualstudio.com/)

---

## 🔧 Como executar o projeto

```bash
# Clone este repositório
git clone https://github.com/seu-usuario/cypress-automation-lab.git

# Acesse a pasta do projeto
cd cypress-automation-lab

# Instale as dependências
npm install

# Abra o Cypress no modo interativo (Test Runner)
npx cypress open

# Ou execute os testes em modo headless (via terminal)
npx cypress run
```

---

## 🧪 Executando testes específicos

```bash
# Executar uma spec específica
npx cypress run --spec "cypress/e2e/login.cy.js"

# Executar testes em um navegador específico
npx cypress run --browser chrome

# Executar testes com uma tag/ambiente específico
npx cypress run --env ambiente=homolog
```

---

## 📋 Boas práticas aplicadas

- 🔹 Separação de testes por funcionalidade
- 🔹 Uso de `data-cy` para seletores estáveis
- 🔹 Reutilização de lógica com **Custom Commands**
- 🔹 Dados de teste organizados em **Fixtures**
- 🔹 Nomenclatura clara e padronizada dos testes (`describe`, `context`, `it`)
- 🔹 Testes independentes (sem dependência entre eles)

---

## 🗺️ Roadmap de estudos

- [x] Configuração inicial do Cypress
- [x] Primeiros testes E2E
- [ ] Testes de API (cy.request)
- [ ] Implementação de Page Object Model
- [ ] Integração com GitHub Actions (CI/CD)
- [ ] Relatórios de execução com Mochawesome
- [ ] Testes visuais (Visual Regression)

---

## 🤝 Contribuindo

Contribuições, sugestões e trocas de aprendizado são muito bem-vindas! Sinta-se à vontade para:

1. Fazer um **fork** do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Commitar suas alterações (`git commit -m 'Adiciona minha feature'`)
4. Enviar um **push** para a branch (`git push origin feature/minha-feature`)
5. Abrir um **Pull Request**

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

### 👨‍💻 Autor

Feito com 💚 durante os estudos de automação de testes com Cypress.

</div>
