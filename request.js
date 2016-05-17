
var MessageList = [];

function testLongPolling(){
  request.post('/getMessage/28?id=MacTaylor').then(function(response){
    //do something
    MessageList.push(response.data);    
    
    testLongPolling();
    
  });
}
