 import * as chai from 'chai';
 import Math from '../src/math';
 import app from '../src';
 import * as request from "supertest-as-promised";

const expect = chai.expect;

 describe('math',()=>{
    it('should be able to add 10 with 20 to be 30',()=>{
       expect(Math.add(10,20)).to.equals(30);
    });

    it('should be able to multiply 10 with 5 to be 50',()=>{
       expect(Math.mul(10,5)).to.equals(50);
    });

     it('index should work',()=>
         request(app).get('/').expect(200)
             .then((res)=>{
                 expect(res.text).to.equals("Hello World");
             })
     );
 });
