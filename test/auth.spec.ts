 import * as chai from 'chai';
 import app from '../src';
 import * as request from "supertest-as-promised";

const expect = chai.expect;

 describe('index',()=>{
     it('should return Hello World',()=>
         request(app).get('/').expect(200)
             .then((res)=>{
                 expect(res.text).to.equals("Hello World");
             })
     );
 });
