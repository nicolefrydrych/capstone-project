describe('Find dropdown and select the first element', () => {
  it('looks for dropdown', () => {
    cy.visit('http://localhost:3000/shoppinglist')
    cy.get('select')
      .select('paprika')
      .contains('paprika')
    cy.get('[data-cy=selectedProduct]')
      .first()
      .contains('paprika')
  })
})
