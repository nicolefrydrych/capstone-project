describe('Click the first bookmark', () => {
  it('looks for bookmark', () => {
    cy.visit('http://localhost:3000/chooseameal')
    cy.get('[data-cy=bookmark]')
      .eq(0)
      .click()
    cy.get('[data-cy=bookmark]')
      .eq(1)
      .click()

    cy.visit('http://localhost:3000/favorites')
    cy.get('[data-cy=bookmarkedRecipeName]')
      .eq(0)
      .contains('Roasted vegetables')
    cy.get('[data-cy=bookmarkedRecipeName]')
      .eq(1)
      .contains('Roasted potatoes and paprika')
  })
})
