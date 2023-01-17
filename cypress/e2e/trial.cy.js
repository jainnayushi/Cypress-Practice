/// <reference types="cypress" />

describe("Checkbox - Dropdown test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Dropdown Test", () => {
    cy.get('[data-input ="input"]').as("input").type("Task 1");
    cy.get('[data-submit ="submit"]').as("submit").click();
    cy.get("#dropdown").select("Box 1").should("have.value", "box1");
  });
  it("Checkbox Test", () => {
    cy.get('[data-input ="input"]').as("input").type("Task 1");
    cy.get('[data-submit ="submit"]').as("submit").click();
    cy.get('input[value="item2"]').check().should("be.checked");
    cy.get('input[value="item3"]').check().should("be.checked");
    cy.get('input[value="item2"]').uncheck().should("not.be.checked");
  });
});
