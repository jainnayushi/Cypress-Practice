/// <reference types="cypress" />

describe("Notion tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.wait(1000);
  });
  it("Check Landing Page", () => {
    cy.contains("Notion");
  });
  it.only("Add Tasks", () => {
    cy.contains("Task 1").should("not.exist");
    cy.get('[data-input ="input"]').as("input").type("Task 1");
    cy.get('[data-submit ="submit"]').as("submit").click();
    cy.contains("Task 1").should("exist");
    cy.contains("item added to the list");

    cy.contains("Task 2").should("not.exist");
    cy.get("@input").type("Task 2");
    cy.get("@submit").click();
    cy.contains("Task 2").should("exist");
    cy.contains("item added to the list");

    cy.contains("Task 3").should("not.exist");
    cy.get("@input").type("Task 3");
    cy.get("@submit").click();
    cy.contains("Task 3").should("exist");
    cy.contains("item added to the list");
  });
  it("Edit Task 1", () => {
    cy.contains("Task 1").should("not.exist");
    cy.get('[data-input ="input"]').type("Task 1");
    cy.get('[data-submit ="submit"]').click();
    cy.contains("Task 1").should("exist");
    cy.contains("item added to the list");
    cy.contains("Task 2").should("not.exist");
    cy.get('[data-input ="input"]').type("Task 2");
    cy.get('[data-submit ="submit"]').click();
    cy.contains("Task 2").should("exist");
    cy.contains("item added to the list");
    cy.contains("Task 3").should("not.exist");
    cy.get('[data-input ="input"]').type("Task 3");
    cy.get('[data-submit ="submit"]').click();
    cy.contains("Task 3").should("exist");
    cy.contains("item added to the list");

    cy.contains("Task 1").should("exist");
    cy.get('[data-edit ="Task 1"]').click();
    cy.get('[data-input ="input"]').clear().type("Task 1 Updated");
    cy.get('[data-submit ="submit"]').click();
    cy.contains("Task 1 Updated").should("exist");
    cy.contains("value changed");
  });
  it("Remove Task 3", () => {
    cy.contains("Task 1").should("not.exist");
    cy.get('[data-input ="input"]').type("Task 1");
    cy.get('[data-submit ="submit"]').click();
    cy.contains("Task 1").should("exist");
    cy.contains("item added to the list");
    cy.contains("Task 2").should("not.exist");
    cy.get('[data-input ="input"]').type("Task 2");
    cy.get('[data-submit ="submit"]').click();
    cy.contains("Task 2").should("exist");
    cy.contains("item added to the list");
    cy.contains("Task 3").should("not.exist");
    cy.get('[data-input ="input"]').type("Task 3");
    cy.get('[data-submit ="submit"]').click();
    cy.contains("Task 3").should("exist");
    cy.contains("item added to the list");

    cy.contains("Task 3").should("exist");
    cy.get('[data-delete ="Task 3"]').click();
    cy.contains("Task 3").should("not.exist");
    cy.contains("item removed");
  });
  it("Clear all Tasks", () => {
    cy.contains("Task 1").should("not.exist");
    cy.get('[data-input ="input"]').type("Task 1");
    cy.get('[data-submit ="submit"]').click();
    cy.contains("Task 1").should("exist");
    cy.contains("item added to the list");
    cy.contains("Task 2").should("not.exist");
    cy.get('[data-input ="input"]').type("Task 2");
    cy.get('[data-submit ="submit"]').click();
    cy.contains("Task 2").should("exist");
    cy.contains("item added to the list");
    cy.contains("Task 3").should("not.exist");
    cy.get('[data-input ="input"]').type("Task 3");
    cy.get('[data-submit ="submit"]').click();
    cy.contains("Task 3").should("exist");
    cy.contains("item added to the list");

    cy.get('[data-clear ="clear"]').click();
    cy.contains("empty list", { timeout: 2 * 1000 }).should("exist");
    cy.contains("empty list", { timeout: 4 * 1000 }).should("not.exist");
  });
});
