/// <reference types="cypress" />

context("Search", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the search result", () => {
    cy.get("[data-cy=input]").type("My Neighbor Totoro");
    cy.get('[data-testid="movie-card-container"]').should(
      "have.length.at.least",
      1
    );
  });

  it("should render the alert component for an empty search result", () => {
    cy.get("[data-cy=input]").type("This movie doesn't exist");
    cy.get('[data-testid="alert-container"]').should("have.length", 1);
  });
});
