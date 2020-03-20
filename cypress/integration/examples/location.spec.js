context('Location', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/chooseameal')
  })

  it('cy.url() - get the current URL', () => {
    cy.url().should('contains', '/chooseameal')
  })

  it('cy.location() - get window.location', () => {
    cy.location().should(loc => {
      expect(loc.hash).to.be.empty
      expect(loc.host).to.eq('localhost:3000')
      expect(loc.hostname).to.eq('localhost')
      expect(loc.href).to.eq('http://localhost:3000/chooseameal')
      expect(loc.origin).to.eq('http://localhost:3000')
      expect(loc.pathname).to.eq('/chooseameal')
      expect(loc.port).to.eq('3000')
      expect(loc.protocol).to.eq('http:')
      expect(loc.search).to.be.empty
    })
  })

  it('cy.hash() - get the current URL hash', () => {
    cy.hash().should('be.empty')
  })
})
