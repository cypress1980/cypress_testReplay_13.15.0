// it("Matching URL by GET method", () => {
//   cy.visit("https://reqres.in/");
//   cy.intercept("GET", "/api/users?page=2").as("posts");
//   cy.get("[data-id=users]").click()
//   cy.wait("@posts").its("response.body.data").should("have.length", 6);
// })

// it("Intercept by RouteMatcher", () => {
//   cy.visit("https://reqres.in/");
//   cy.intercept(
//     {
//       method: "GET",
//       url: "https://reqres.in/api/users/**",
//     },
//     (req) => {
//       // Provide a custom stubbed response
//       req.reply({
//         statusCode: 200,
//         body: {
//           data: [
//             {
//               id: 1,
//               email: "george.bluth@reqres.in",
//               first_name: "George",
//               last_name: "Bluth",
//               avatar: "https://reqres.in/img/faces/1-image.jpg",
//             },
//             {
//               id: 6,
//               email: "tracey.ramos@reqres.in",
//               first_name: "Tracey",
//               last_name: "Ramos",
//               avatar: "https://reqres.in/img/faces/6-image.jpg",
//             },
//           ],
//         },
//       });
//     }
//   ).as("getUsers");

//   // Wait for the intercepted request and assert the stubbed response contains 2 users
//   cy.wait("@getUsers").its("response.body.data").should("have.length", 2);
// });

it('Intercept by Pattern Matching ', () => {
    cy.visit('https://reqres.in/')
    cy.intercept({
    method: '+(DELETE|GET|POST)',
    url: '**/users/**'
    }, (req) => {
    req.reply({
    statusCode: 200,
    body: {
    data: [{
        id: 6,
        "email": "tracey.ramos@reqres.in",
        "first_name": "Tracey",
        "last_name": "Ramos",
        "avatar": "https://reqres.in/img/faces/6-image.jpg"},{
            id: 3,
            "email": "emma.wong@reqres.in",
            "first_name": "Emma",
            "last_name": "Wong",
            "avatar": "https://reqres.in/img/faces/3-image.jpg"}, {
    id: 8,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg'}]}
    })
    }).as('postdata')
    cy.wait('@postdata').its('response.body.data').should('have.length', 3)
})