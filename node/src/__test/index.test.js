
import supertest from 'supertest';
import app from '../app.js';

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

describe("Test the root path", () => {
    test("The response of GET method", done => {
        supertest(app)
            .get('/')
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            })
    })
})

describe("Test the doctors by name", () => {
    test("The response of GET method", done => {
        supertest(app)
            .get('/doctors/name/prakitha')
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            })
    })
})
describe("Test the doctors by speciality", () => {
    test("The response of GET method", done => {
        supertest(app)
            .get('/doctors/search/speciality/Orthhodontist')
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            })
    })
})
// describe("Test the doctors add", () => {
//     test("The response of POST method", done => {
//         supertest(app)
//             .post('/doctors/add')
//             .then(response => {
//                 expect(response.statusCode).toBe(200);
//                 done();
//             })
//     })
// })

describe("Test the doctors delete", () => {
    test("The response of POST method", done => {
        supertest(app)
            .post('/doctors/delete/20')
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            })
    })
})