describe("My First Test", function() {
  it("Does not do much!", function() {
    expect(true).to.equal(true);
  });
});

describe("visiting page works", () => {
  it("Visits NC-NEWS", () => {
    cy.visit("");
  });
});

// describe("visiting page works", function() {
//   it("Visits NC-NEWS", function() {
//     cy.request("/api/");
//   });
// });
