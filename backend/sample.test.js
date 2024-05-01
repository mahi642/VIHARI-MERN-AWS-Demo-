const request = require("supertest");
const app = require("./app");
const client=require('./utils/Redis');

beforeAll(done => {
  done()
})

describe("GET /", function () {
  test('should return "API is running"', function (done) {
    request(app)
      .get("/")
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.text).toBeDefined();
        done();
      });
  });
});


describe("POST /login", () => {
  test("should return a token for valid email and password", async () => {
    const credentials = {
      email: "shanmukhashreyan.d21@iiits.in",
      password: "shreyan123",
    };

    const res = await request(app)
      .post("/login")
      .send(credentials);

    expect(res.status).toBe(200);
  }, 15000);

  test("should return 403 for invalid credentials", async () => {
    const credentials = {
      email: "ashok@gmail.com",
      password: "ashok@123",
    };

    const res = await request(app)
      .post("/login")
      .send(credentials);

    expect(res.status).toBe(403);
  }, 5000);

});

afterAll(async ()=>{
    await client.quit();
});


