const http = require('http');
const port = 4000;
const server = http.createServer((req,res)=>{
   if(req.url=='/')
   {
      res.writeHead(200,'Content-Type','application/json');
      res.write(JSON.stringify({message:"hello there"}));
      res.end();//is it impt to place res.end everywhere
      
   }
  if (req.url=='/new')
  {
   res.write("this is new page");
   res.end();

  }else{
   res.write('error 404');
   res.end();
  }
})

server.listen(port,()=>{
   console.log(`Server started at ${port}`)
})