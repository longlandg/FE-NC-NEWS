describe("My First Test", function() {
  it("Does not do much!", function() {
    expect(true).to.equal(true);
  });
});

describe("HomPageView", () => {
  it("Visits NC-NEWS", () => {
    cy.visit("");
  });
  it("finds the content LOG IN button, clicks, then goes to url with /signin ", function() {
    cy.visit("http://localhost:3002/signin");

    cy.contains("LOG IN").click();
    cy.url().should("include", "/signin");
  });
  it("finds the 'comment count ascending' within the sort by drop down", function() {
    cy.visit("http://localhost:3002");
    cy.get(".sortBySelector").select("comment count ascending");
  });
});
describe("visiting SignInPageView page works", () => {
  it("Visits NC-NEWS", () => {
    cy.visit("/http://localhost:3002/signin");
  });
});

// describe("/home", function() {
//   it('finds the content "type"', function() {
//     cy.visit("http://localhost:3001/signin");

//     cy.contains("LOG IN").click();
//     cy.url().should("include", "/users");
//   });
// });

// describe("/home", function() {
//   it('finds the content "type"', function() {
//     cy.visit("http://localhost:3002/topics/createtopic");

//     cy.contains("LOG OUT").click();
//     cy.url().should("include", "/");
//   });
// });
