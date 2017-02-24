// para trabalhar com http
var http = require('http');

//cria um objeto representando o servidor, passando uma funcao de callback
var server = http.createServer(function(req, res){
	if(req.url == '/produtos'){
		res.end('<html><body><h1>Listando os produtos da loja</h1></body></html>');
	} else {
		res.end('<html><body><h1>Home da casa do codigo</h1></body></html>');
	}
});

//faz o servidor escutar a porta 3000
server.listen(3000);

console.log('Servidor esta rodando');