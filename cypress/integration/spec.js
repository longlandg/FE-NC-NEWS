describe("My First Test", function() {
  it("Does not do much!", function() {
    expect(true).to.equal(true);
  });
});

describe("visiting HomePageView page works", () => {
  it("Visits NC-NEWS", () => {
    cy.visit("");
  });
});

describe("visiting SignInPageView page works", () => {
  it("Visits NC-NEWS", () => {
    cy.visit("/http://localhost:3001/signin");
  });
});

// describe("/home", function() {
//   it('finds the content "type"', function() {
//     cy.visit("http://localhost:3001/signin");

//     cy.contains("LOG IN").click();
//     cy.url().should("include", "/users");
//   });
// });
describe("/home", function() {
  it('finds the content "type"', function() {
    cy.visit("http://localhost:3001/signin");

    cy.contains("LOG IN").click();
    cy.url().should("include", "/signin");
  });
});

describe("/home", function() {
  it('finds the content "type"', function() {
    cy.visit("http://localhost:3001/topics/createtopic");

    cy.contains("LOG OUT").click();
    cy.url().should("include", "/");
  });
});
