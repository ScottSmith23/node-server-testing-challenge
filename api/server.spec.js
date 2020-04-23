const request = require('supertest');

const server = require("./server");
const db = require('../data/dbConfig');

describe("server", function () {
    describe("GET/", function () { 
        
      it("should return 200 OK", function () {
        return request(server)
        .get("/")
        .then(res => {
            console.log(res.body)
        expect(res.status).toBe(200);
            });
        });

        it("should return api:up", function () {
            return request(server)
            .get("/")
            .then(res => {
            expect(res.body).toMatchObject({ api: 'up' });
                });
            });
    });
    describe("POST/", function () { 
        
        beforeEach(async () => {
            await db("cheese").truncate();
        });

        it("should return 201", function () {
          return request(server)
          .post("/cheese")
          .send({type:"nacho"})
          .then(res => {
              console.log(res.body)
          expect(res.status).toBe(201);
              });
          });

          it("should return a message", function () {
            return request(server)
            .post("/cheese")
            .send({type:"nacho"})
            .then(res => {
                console.log(res.body)
            expect(res.body.message).toBe('Cheese added successfully');
                });
            });

            it("should return the object with an ID", function () {
                return request(server)
                .post("/cheese")
                .send({type:"nacho"})
                .then(res => {
                    console.log(res.body)
                expect(res.body.cheese).toMatchObject({ id: 1, type: 'nacho' });
                    });
                });

                it('should add the cheese to the DB', async function () {
                    const cheeseName = 'nacho'
                    const existing = await db('cheese').where({type: cheeseName})
                    expect(existing).toHaveLength(0);
                   await request(server)
                    .post("/cheese")
                    .send({type:cheeseName})
                    .then(res => {
                    expect(res.body.message).toBe("Cheese added successfully");
                     
                    });
                    const inserted = await db("cheese"); //.where({ name: hobbitName });
                    expect(inserted).toHaveLength(1);
                    
                    });
  

      });
 });