describe("HomPageView", () => {
  it("Visits NC-NEWS", () => {
    cy.visit("");
  });
  it("finds the content LOG IN button, clicks, then goes to url with /signin ", function() {
    cy.visit("http://localhost:3000/signin");

    cy.contains("LOG IN").click();
    cy.url().should("include", "/signin");
  });
  it("finds the 'comment count ascending' within the sort by drop down", function() {
    cy.visit("http://localhost:3000");
    cy.get(".sortBySelector").select("comment count ascending");
  });
});
describe("visiting SignInPageView page works", () => {
  it("Visits NC-NEWS", () => {
    cy.visit("/http://localhost:3000/signin");
  });
});

describe("posting an article", () => {
  it("Visits NC-NEWS", () => {
    cy.server();
    cy.route("POST", "/api/articles", {
      article: {
        title: "cats and their hats",
        article_id: 60,
        body: "something something hatty catty",
        topic: "cooking",
        username: "jessjelly"
      }
    });
    cy.visit("/article/postarticle");
  });
});
