app.post('/getMessage/:channel/?id',function(request,response){
  setTimeout(function(){
    response.writeHead(200,{Content-Type:"text/html"});
    response.end("THIS IS NEW MESSAGE");
  },10000);
});
