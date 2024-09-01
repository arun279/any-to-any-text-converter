describe('Text Format Converter', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should upload a file and convert it', () => {
    cy.get('input[type="file"]').attachFile('test.epub');
    cy.get('button').contains('Convert').click();
    cy.get('a').contains('here').should('be.visible');
  });
});