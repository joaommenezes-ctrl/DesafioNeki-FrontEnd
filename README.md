# EventHub - Web Client

Este é o cliente Web do projeto **EventHub**, desenvolvido em **React**. Através desta interface, administradores podem gerenciar eventos (criar, editar, listar e excluir) com facilidade diretamente pelo navegador.

O projeto consome a API RESTful desenvolvida em Spring Boot.

---

##  Funcionalidades

* **Autenticação de Administrador:**
  * Login seguro com opção de "Lembrar de mim" (Persistência de dados).
  * Redirecionamento automático para a Dashboard após login.
* **Cadastro de Administrador:**
  * Formulário com validação visual de senha e confirmação de senha.
* **Dashboard de Eventos:**
  * Visualização de eventos em lista ou grid (Cards).
  * **Modal de Cadastro:** Adição rápida de eventos sem recarregar a página.
  * **Edição:** Alteração de data e localização em tempo real.
  * **Exclusão:** Remoção de eventos com feedback visual.

---

##  Tecnologias Utilizadas

* **[React](https://react.dev/)** - Biblioteca principal.
* **[React Router Dom](https://reactrouter.com/)** - Navegação entre páginas (Login, Cadastro, Home).
* **[Axios](https://axios-http.com/)** - Requisições HTTP para o Backend.
* **[Styled Components](https://styled-components.com/)** - Estilização.

---
