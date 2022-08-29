import chai, { expect } from "chai";
import chaihttp from "chai-http";
import { app } from "../server.mjs";

chai.use(chaihttp);

describe("Testing Get Products API", () => {
    it("should return list of Products", async () => {
        const response = await chai.request(app).get("/products");
        expect(response).to.have.status(200);
    })
})

describe("Testing Get Products API", () => {
    it("should return list of Products", async () => {
        const response = await chai.request(app).get("/products");
        expect(response).to.have.status(200);
        expect(response.body.length).greaterThan(5); // Collection has 3 data's
    })
})

describe("Testing Get a particular Product API", () => {
    it("should return 1 of Products", async () => {
        const response = await chai.request(app).get("/products/62f1efa9e8775c3d53610a83");
        expect(response).to.have.status(200);
    })
})

describe("Testing To add particular Product API", () => {
    it("should return 1 of Products", async () => {
        let body = {
            name: "Dell Aspire 3",
            specs: "Intel Core i3 11th Generation 15.6-inch (39.6 cms) Full HD Laptop - (4 GB/256 GB SSD/Intel UHD Graphics /1.7 Kg/Silver) A315-58",
            price: 32123,
            os: "Windows 11"
        }

        const response = await chai.request(app).post("/products").send(body);
        expect(response).to.have.status(200);
    })
})

describe("Testing to add particular Product API", () => {
    it("should return 1 of Products", async () => {
        let body = {
            name: "Dell Aspire 3",
            specs: "Intel Core i3 11th Generation 15.6-inch (39.6 cms) Full HD Laptop - (4 GB/256 GB SSD/Intel UHD Graphics /1.7 Kg/Silver) A315-58",
            price: 32123,
            os: "Windows 11"
        }

        const response = await chai.request(app).post("/product").send(body); // diff api
        expect(response).to.have.status(200);
    })
})