const http = require('http');
const express = require('express');
const { isIPv4 } = require('net');
const aplicacao = express();

const servidorHttp = http.createServer(aplicacao);
const io = require('socket.io')(servidorHttp);

io.addListener('connection', (socket) => {
    console.log('um usuario conectou');
    socket.addListener('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);

    })
})

aplicacao.use(express.static('public'))

servidorHttp.listen(1000, ipIPv4);//adicionar Ipv4 da rede

