# Lotus

<img src="./public/images/logo.svg" alt="Logo da Lotus" width="400" height="100"/>

**Lotus** é um projeto de frontend responsável por coletar e exibir informações enviadas por um **Arduino** conectado a um **biodigestor**. O projeto tem como objetivo facilitar o monitoramento e controle de dados relacionados ao processo de biodigestão, fornecendo uma interface simples e intuitiva para visualizar os parâmetros do sistema.

## Funcionalidades

- Exibe informações em tempo real do biodigestor, como temperatura, níveis de gás, etc.
- Interface interativa com gráficos para facilitar o acompanhamento dos dados.
- Possibilidade de integração com outros sistemas ou dispositivos para monitoramento remoto.

## Tecnologias Utilizadas

- **Next.js**: Framework React para criação do frontend.
- **React**: Biblioteca JavaScript para construção da interface de usuário.
- **Styled Components**: Estilização da interface.
- **Lucide Icons**: Importação de ícones.

## Instalação

### 1. Clone o repositório

Primeiro, clone o repositório para a sua máquina local:

```bash
git clone https://github.com/Lotus-Bio/lotus-frontend-2.0.git
cd lotus-frontend
```

### 2. Instalar dependências

Instale as dependências necessárias para rodar o projeto:

```bash
npm install
```

## 3. Arquivo .env

Na estrutura do projeto, há um arquivo chamado ´.env.example.´ Para que o projeto funcione corretamente, renomeie esse arquivo para ´.env´ e atribua valores a todas as variáveis de ambiente listadas nele.

Para obter esses valores, crie um projeto no Firebase e siga as instruções de configuração fornecidas pela plataforma. Em seguida, copie os dados do objeto ´firebaseConfig´ e preencha as variáveis correspondentes no arquivo ´.env´.

Após essa configuração, o projeto estará pronto para utilizar o Firebase como banco de dados.

### 4. Rodar o frontend

Para iniciar o servidor de desenvolvimento local, execute o seguinte comando:

```bash
npm run dev
```

Isso irá iniciar o servidor local em http://localhost:3000. A partir daí, você poderá visualizar a interface do projeto e monitorar os dados do biodigestor.
