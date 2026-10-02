const assert = require("chai").assert;
const { add, subtract, multiply, divide } = require("../src/mylib");

describe("mylib", () => {

  before(() => {
    console.log("Tests are starting.");
  });

  after(() => {
    console.log("Tests are completed.");
});

    describe("add(+)", () => {
  it("adds two numbers correctly", () => {
    assert.equal(add(10, 5), 15);
  });
});

    describe("subtract(-)", () => {
  it("subtracts two numbers correctly", () => {
    assert.equal(subtract(10, 5), 5);
  });
});

    describe("multiply(*)", () => {
  it("multiplies two numbers correctly", () => {
    assert.equal(multiply(10, 5), 50);
  });
});

    describe("divide(/)", () => {
  it("divides two numbers correctly", () => {
    assert.equal(divide(10, 5), 2);
    });
    
it("throws an error when dividing by zero", () => {
  assert.throws(
    () => divide(10, 0),
    "Cannot divide by zero"
  );

  });
});

});

