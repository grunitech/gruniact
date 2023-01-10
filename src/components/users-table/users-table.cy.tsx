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

        it('should display 1 user data', () => {
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
        cy.get('table')
            .within(() => {
                cy.get('td').eq(0).contains(1)
                cy.get('td').eq(1).contains('eee@eee')
                cy.get('td').eq(2).contains('fname')
                cy.get('td').eq(3).contains('lname')
                cy.get('td').eq(4).contains('button', 'DELETE')
            })
    });
})