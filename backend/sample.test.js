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

describe("POST /agentLogin", () => {
  test("should return a token for valid email and password", async () => {
    const credentials = {
      email: "srikar.a21@iiits.in",
      password: "srikar123",
    };

    const res = await request(app)
      .post("/agentLogin")
      .send(credentials);

    expect(res.status).toBe(200);
  }, 15000);

  test("should return 403 for invalid credentials", async () => {
    const credentials = {
      email: "ashok@gmail.com",
      password: "ashok@123",
    };

    const res = await request(app)
      .post("/agentLogin")
      .send(credentials);

    expect(res.status).toBe(403);
  }, 5000);

});

describe("GET /api/agent/getbus/:busId", () => {
  test("should return course data for valid Bus ID", (done) => {
    const validBusId = "663281a0522cc6b77ad47df4";
    request(app)
      .get(`/api/agent/getbus/${validBusId}`)
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body.bus).toBeDefined();
        done();
      })
      .catch((err) => done(err));
  }, 10000);

  test("should return 404 for invalid Bus ID", (done) => {
    const invalidBusId = "661412d4d9d5b0efd05f3080";
  
    request(app)
      .get(`/api/agent/getbus/${invalidBusId}`)
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  }, 5000);  
});

describe("GET /api/agent/gettour/:tourId", () => {
  test("should return course data for valid Tour ID", (done) => {
    const validTourId = "66328f35d899c8d9c976c6ad";
    request(app)
      .get(`/api/agent/gettour/${validTourId}`)
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body.tour).toBeDefined();
        done();
      })
      .catch((err) => done(err));
  }, 10000);

  test("should return 404 for invalid Tour ID", (done) => {
    const invalidTourId = "661412d4d9d5b0efd05f3080";
  
    request(app)
      .get(`/api/agent/gettour/${invalidTourId}`)
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  }, 5000);  
});

describe("GET /api/agent/tourplaces/:tourId", () => {
  test("should return course data for valid Tour ID", (done) => {
    const validTourId = "66328f35d899c8d9c976c6ad";
    request(app)
      .get(`/api/agent/tourplaces/${validTourId}`)
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body.places).toBeDefined();
        done();
      })
      .catch((err) => done(err));
  }, 10000);

  test("should return 404 for invalid Tour ID", (done) => {
    const invalidTourId = "661412d4d9d5b0efd05f3080";
  
    request(app)
      .get(`/api/agent/gettour/${invalidTourId}`)
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  }, 5000);  
});

afterAll(async ()=>{
    await client.quit();
});


