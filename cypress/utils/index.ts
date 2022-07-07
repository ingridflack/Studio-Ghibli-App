export const markMovieAsFavorite = (index: number = 0) => {
  cy.get('[data-testid="movie-card-container"]')
    .eq(index)
    .find('[data-testid="favorite-btn"]')
    .click();

  cy.get(".Toastify__toast--success")
    .should("be.visible")
    .should("contain.text", "Movie added to favorites");

  cy.get("nav > a").eq(1).click();

  cy.url().should("match", /\/favorites$/);

  cy.get('[data-testid="movie-card-container"]').should("have.length", 1);
};

export const unmarkMovieAsFavorite = (index: number = 0) => {
  cy.get('[data-testid="movie-card-container"]')
    .eq(index)
    .find('[data-testid="favorite-btn"]')
    .click();

  cy.get('[data-testid="movie-card-container"]').should("have.length", 0);

  cy.get(".Toastify__toast--success")
    .should("be.visible")
    .should("contain.text", "Movie removed from favorites");
};
