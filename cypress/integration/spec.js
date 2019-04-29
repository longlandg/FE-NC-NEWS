describe("HomPageView", () => {
  it("Visits NC-NEWS", () => {
    cy.visit("");
  });
  it("finds the content LOG IN button, clicks, then goes to url with /signin ", function() {
    cy.visit("http://localhost:3003/signin");

    cy.contains("LOG IN").click();
    cy.url().should("include", "/signin");
  });
  it("finds the 'comment count ascending' within the sort by drop down", function() {
    cy.visit("http://localhost:3003");
    cy.get(".sortBySelector").select("comment count ascending");
  });
});
describe("visiting SignInPageView page works", () => {
  it("Visits NC-NEWS", () => {
    cy.visit("/http://localhost:3003/signin");
  });
});

// describe("posting an article", () => {
//   it("Visits NC-NEWS", () => {
//     cy.request("POST", "http://localhost:3003/article/postarticle", {
//       title: "cats and their hats",
//       body: "something something hatty catty",
//       topic: "cooking",
//       username: "jessjelly"
//     }).then(response => {
//       // response.body is automatically serialized into JSON
//       expect(response.body).to.have.property("title", "cats and their hats"); // true
//     });
//   });
// });
