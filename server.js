//carrega o modulo HTTP e URL
var http = require( 'http');
var url = require( 'url' );

//função de calback para o servidor HTTP
var callback = function ( request, response ){
    response.writeHead(200, {"Content-type": "text/plain; charset=utf-8"});
    //faz o parse da url separando o caminho da rota
    var parts = url.parse( request.url );
    // verifica a rota
    if (parts.path =="/"){
        response.end("Site Principal");
     } else if (parts.path == "/rota1"){
         response.end("Site da Rota 1");
         }else if (parts.path == "/rota2"){
         response.end("Site da Rota 2");
        }else if (parts.path == "/rota3"){
        response.end("Site da Rota 3");
        }else {
        response.end ("Rota Invalida: " + parts.path);
    }
};
//cria um servidor http que responde para todas as requisições 
var server = http.createServer(callback);
//porta que o servidor vai escutar
server.listen(3000);
// mensagem ao iniciar 
console.log("Servidor iniciando em http://localhost:3000/");