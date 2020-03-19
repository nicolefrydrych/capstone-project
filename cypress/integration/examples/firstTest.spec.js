describe('Find and click dropdown', () => {
  it('looks for dropdown menu', () => {
    cy.visit('http://localhost:3000/chooseameal')
    cy.get('[data-cy=bookmark]')
      .first()
      .click()
  })
})

describe('Find dropdown', () => {
  it('looks for dropdown', () => {
    cy.visit('http://localhost:3000/shoppinglist')
    cy.get('select')
      .select('rice')
      .contains('rice')
  })
})

describe('Check if navigation is visible', () => {
  it('checks visibility of navigation', () => {
    cy.visit('http://localhost:3000/chooseameal')
    cy.get('nav')
      .should('be.visible')
      .should('have.css', 'border-top')
  })
})

describe('Create a card', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/createarecipe')

    cy.get('input[name="name"]').type('Rice with tomatoes')
    cy.get('input[name="instruction"]').type(
      'Cook meal and add spices and tomatoes'
    )
    cy.get('input[name="products"]').type('coconutmilk, spices, tomatoes, rice')
  })

  it('clears all form fields after creation', () => {
    cy.get('[type="submit"]').click()

    cy.get('input[name="name"]').should('be.empty')
    cy.get('input[name="instruction"]').should('be.empty')
    cy.get('input[name="products"]').should('be.empty')
  })
})

describe('Check', () => {
  it('checks', () => {
    cy.visit('http://localhost:3000/createarecipe')
    cy.get('form').contains('name')
  })
})

// describe('Check the card in list', () => {
//   it('fills out the list with cards correctly', () => {
//     cy.visit('http://localhost:3000/chooseameal')

//     cy.get(
//       'section[class^="Card__CardStyled"] > [class^="Card__NameTextStyled"]'
//     ).contains('Rice with tomatoes')

//     cy.get(
//       'section[class^="Card__CardStyled"] > [class^="DivStyled"]'
//     ).contains('Cook meal and add spices and tomatoes')

//     cy.get(
//       'section[class^="Card__CardStyled"] > [class^="ProductListItemStyled"]'
//     ).contains('coconutmilk, spices, tomatoes, rice')
//   })
// })

// it('Just a test!', () => {
//   cy.visit('http://localhost:3000')
//   expect(true).to.equal(true)
// })
