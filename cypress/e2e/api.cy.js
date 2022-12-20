/// <reference types="cypress" />

describe("API test", () => {
  beforeEach(() => {
    cy.visit("https://reqres.in/");
  });
});

it("GET Test", () => {
  cy.request("GET", "https://reqres.in/api/users?page=2").then((resp) => {
    expect(resp.status).equal(200);
    expect(resp.body.data[1].id).equal(8);
    expect(resp.body).to.have.property("total_pages");
  });
});
it("POST Test", () => {
  cy.request("POST", "https://reqres.in/api/users", {
    name: "Ayushi",
    job: "Developer",
  }).then((resp) => {
    expect(resp.status).equal(201);
    expect(resp.body).to.have.property("name", "Ayushi");
  });
});
it("PUT Test", () => {
  cy.request("PUT", "https://reqres.in/api/users/2", {
    name: "Ayushi",
    job: "UI Developer",
  }).then((resp) => {
    expect(resp.status).equal(200);
    expect(resp.body).to.have.property("job", "UI Developer");
  });
});
it("DELETE Test", () => {
  cy.request("DELETE", "https://reqres.in/api/users/2").then((resp) => {
    expect(resp.status).equal(204);
  });
});
