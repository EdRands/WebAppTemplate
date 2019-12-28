/* Visit the web app and see the welcome message. */

describe("The App", function() {
  it("successfully loads", () => {
    cy.visit("/");
  });

  it("has a title", function() {
    cy.title().should("equal", "Web App");
  });

  it("displays a welcome heading", function() {
    cy.get("h1").should("contain", "Hello, World!");
  });
});
