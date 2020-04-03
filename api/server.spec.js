const request = require("supertest");

const server = require("./server.js")

describe('server.js', function(){
    describe('GET /api/projects', function(){

        it('should return status 200', function(){
            return request(server)
            .get("/api/projects")
            .expect(200)
        })

        it('should return in JSON', function(){
            return request(server)
            .get("/api/projects")
            .type("application/json")
        })
    })
})
