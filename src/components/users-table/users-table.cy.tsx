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
})