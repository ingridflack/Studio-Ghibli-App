/// <reference types="cypress" />

context("Movies", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should redirect to details page", () => {
    cy.get('[data-testid="movie-card-container"]')
      .eq(0)
      .then((card) => {
        const url = card.attr("href");
        const title = card.find('[data-testid="card-title"]').text();

        cy.get('[data-testid="movie-card-container"]').eq(0).click();

        cy.url().should("match", new RegExp(url));
        cy.get('[data-testid="movie-title"]').should("have.text", title);
      });
  });
});
