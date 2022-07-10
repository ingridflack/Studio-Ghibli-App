/// <reference types="cypress" />

import { markMovieAsFavorite, unmarkMovieAsFavorite } from "../utils";

context("Favorites", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should mark a movie as favorite", () => {
    markMovieAsFavorite(0);
  });

  it("should unmark a movie as favorite", () => {
    markMovieAsFavorite(0);
    unmarkMovieAsFavorite(0);
  });
});
