import UsersTable from "./users-table";


describe('users-table', () => {
    it('should delete user when clicking on delete button', () => {
        const removeUser = cy.spy().as('removeUser');
        const users = [
            {id: 1, email: 'a@a', fname: 'a', lname: 'a'},
        ];
        cy.mount(<UsersTable users={users} removeUser={removeUser}/>);
        cy.get('button').click();
        cy.get('@removeUser').should('have.been.calledWith', {id: 1, email: 'a@a', fname: 'a', lname: 'a'});
    });

    it('should display users', () => {
        cy.mount(<UsersTable users={[]} removeUser={() => {
        }}/>);
        cy.get('table').should('have.length', 1);
        cy.get('tr').should('have.length', 1);
    });

    it('should display 1 user', () => {
        cy.mount(<UsersTable users={[
            {
                id: 1,
                email: 'eee@eee',
                fname: 'fname',
                lname: 'lname',
                password: 'password'
            }
        ]} removeUser={() => {
        }}/>);
        cy.get('table').should('have.length', 1);
        cy.get('tr').should('have.length', 2);
    });
})