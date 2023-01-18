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
      cy.log("item2 checked");
      cy.pause();
      cy.get('input[value="item3"]').check().should("be.checked");
      cy.log("item3 checked");
      cy.pause();
      cy.get('input[value="item2"]').uncheck().should("not.be.checked");
      cy.log("item2 Unchecked");
      cy.pause();
    });
    it("Checkbox Test2", () => {
      cy.get('[data-input ="input"]').as("input").type("Task 1");
      cy.get('[data-submit ="submit"]').as("submit").click();
      cy.get('input[value="item2"]')
        .as("checkbox")
        .invoke("is", ":checked")
        .then((initial) => {
          if (initial) {
            cy.get("@checkbox").uncheck();
            cy.wait(2000);
          } else {
            cy.get("@checkbox").check({ force: true });
            cy.wait(2000);
          }
        });
    });
  });
  