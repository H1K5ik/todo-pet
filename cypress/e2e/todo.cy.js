describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/home')
  })

  it('displays no todo items by default', () => {
    cy.get('[data-test-id="create"]').should('have.length', 1)

    cy.get('[data-test-id="create"]').first().should('have.text', 'Create your first ToDo')
    cy.get('input').should('have.value', '')
    cy.get('button').first().should('have.text', 'Add todo')
  })

  it('can add new todo items', () => {
    const newItem = 'Feed the cat'

    cy.get('input').type(`${newItem}{enter}`)
    cy.contains('Add todo').click()

    cy.get('img').should('have.length', 4)
  })
})
