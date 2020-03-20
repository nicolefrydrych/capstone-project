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

    cy.visit('http://localhost:3000/chooseameal')
    cy.get('[data-cy=createdRecipeName]')
      .first()
      .contains('Rice with tomatoes')
  })
})
