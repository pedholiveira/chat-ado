<h1 align="center">
  Chat-ado
  <br>
  <br>
</h1>

<h4 align="center">O seu chat piadista!</h4>
<h5 align="center">Sistemas Distribuídos II</h5>

<p align="center">
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
    <a href="https://github.com/phoms/chat-ado/releases"><img src="https://img.shields.io/github/release/phoms/chat-ado.svg" alt="Latest Release"></a>
</p>

Trabalho da disciplina Redes de Comunicação de Dados e Sistemas Distribuídos II do curso de Engenharia da Computação. Trata-se de uma implementação de um sistema de chat todo baseado no modelo Cliente-servidor.

## Estrutura

O projeto está divido em duas partes que se comunicam via websocket. São elas: cliente e servidor. 
<br>
<br>
O cliente é responsável por enviar e exibir ao usuário as mensagens da conversa. O lado servidor, receberá as requisições do cliente e, através de sockets, irá se integrar com o servidor back-end. 

## Como utilizar

Antes de executar o chat, deverá ser previamente instalado na máquina a plataforma de desenvolvimento Node.js e o seu gerenciador de pacotes(npm).
<br>
<br>
O servidor back-end deverá estar sendo executado na porta 8080.

**Servidor**
<br>
Para executar o servidor do socket.io é necessário executar na pasta "server" os comandos abaixo:
<br>
*npm install*
<br>
*npm start*

**Cliente**
<br>
O cliente será executado da mesma forma que o servidor:
<br>
*npm install*
<br>
*npm start*
<br>
<br>
Após isso, basta acessar <a href="http://localhost:3000/"></a> que o chat já estará disponível para uso!