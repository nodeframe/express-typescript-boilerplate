import * as express from 'express';
import * as seneca from 'seneca';
const app = express();

app.get('/',(req,res)=>{
  res.send('Hello World');
});

app.get('/api/payment',(req,res)=>{
  res.send({success:true});
});

export default app;
