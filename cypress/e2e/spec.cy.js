describe('Todo Project', () => {
  it('should load page', () => {
    cy.visit('https://todo-gray-eight.vercel.app/');
  });
  it('should add a new todo to the list', () => {
    cy.visit('https://todo-gray-eight.vercel.app/');
    cy.get('input[name=task]').type('Feed the cat{enter}');
    cy.get('label').should('contain', 'Feed the cat');
  });
  it('should mark a todo as completed', () => {
    cy.visit('https://todo-gray-eight.vercel.app/');
    cy.get('input[name=task]').type('Feed the cat{enter}');
    cy.get('label').should('contain', 'Feed the cat');
    cy.get('input[type=checkbox]').check();
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through');
  });
  it('should delete a todo', () => {
    cy.visit('https://todo-gray-eight.vercel.app/');
    cy.get('input[name=task]').type('Feed the cat{enter}');
    cy.get('label').should('contain', 'Feed the cat');
    cy.get('button[name=remove-task]').click();
    cy.get('label').should('not.exist');
  });
  it('should update todo amount when adding a new todo', () => {
    cy.visit('https://todo-gray-eight.vercel.app/');
    cy.get('span').should('contain', '0');
    cy.get('input[name=task]').type('Feed the cat{enter}');
    cy.get('label').should('contain', 'Feed the cat');
    cy.get('span').should('contain', '1');
  });
  it('should update todo amount after deleting', () => {
    cy.visit('https://todo-gray-eight.vercel.app/');
    cy.get('span').should('contain', '0');
    cy.get('input[name=task]').type('Feed the cat{enter}');
    cy.get('label').should('contain', 'Feed the cat');
    cy.get('span').should('contain', '1');
    cy.get('button[name=remove-task]').click();
    cy.get('span').should('contain', '0');
  });
  it('should update completed amount when marking a todo as completed', () => {
    cy.visit('https://todo-gray-eight.vercel.app/');
    cy.get('input[name=task]').type('Feed the cat{enter}');
    cy.get('span').should('contain', '0 de 1');
    cy.get('input[type=checkbox]').check();
    cy.get('span').should('contain', '1 de 1');
  });
  it('should update completed amount after deleting', () => {
    cy.visit('https://todo-gray-eight.vercel.app/');
    cy.get('input[name=task]').type('Feed the cat{enter}');
    cy.get('span').should('contain', '0 de 1');
    cy.get('input[type=checkbox]').check();
    cy.get('span').should('contain', '1 de 1');
    cy.get('button[name=remove-task]').click();
    cy.get('span').should('contain', '0 de 0');
  });
  it('should update completed amount after marking a todo as completed and then deleting', () => {
    cy.visit('https://todo-gray-eight.vercel.app/');
    cy.get('input[name=task]').type('Feed the cat{enter}');
    cy.get('span').should('contain', '0 de 1');
    cy.get('input[type=checkbox]').check();
    cy.get('span').should('contain', '1 de 1');
    cy.get('button[name=remove-task]').click();
    cy.get('span').should('contain', '0 de 0');
  });
});