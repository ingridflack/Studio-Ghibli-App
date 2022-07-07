/// <reference types="cypress" />

import { markMovieAsFavorite, unmarkMovieAsFavorite } from "../utils";

context("Favorites", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should mark a movie as favorite", () => {
    markMovieAsFavorite(0);
  });

  it("should unmark a movie as favorite", () => {
    markMovieAsFavorite(0);
    unmarkMovieAsFavorite(0);
  });

  it("should search and list the movies", () => {
    cy.get("[data-cy=input]").type("My Neighbor Totoro");
    cy.get('[data-testid="movie-card-container"]').should(
      "have.length.at.least",
      1
    );
  });
});
