describe('Check if navigation is visible', () => {
  it('checks visibility of navigation', () => {
    cy.visit('http://localhost:3000/chooseameal')
    cy.get('nav')
      .should('be.visible')
      .should('have.css', 'border-top')
  })
})
