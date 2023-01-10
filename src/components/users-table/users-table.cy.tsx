import UsersTable from "./users-table";


describe('users-table', () => {
    it('should delete user when clicking on delete button', () => {
        const removeUser = cy.spy().as('removeUser');
        const users = [
            {id: 1, email: 'a@a', fname: 'a', lname: 'a'},
            {id: 2, email: 'b@b', fname: 'b', lname: 'b'},
            {id: 3, email: 'c@c', fname: 'c', lname: 'c'},
        ];
        cy.mount(<UsersTable users={users} removeUser={removeUser}/>);
        cy.get(`button[name=${users[0].id}]`).click();
        cy.get('@removeUser').should('have.been.calledWith', {id: 1, email: 'a@a', fname: 'a', lname: 'a'});
    });
    it('should display 5 rows', () => {
        const users = [
            {id: 1, email: 'a@a', fname: 'a', lname: 'a'},
            {id: 2, email: 'b@b', fname: 'b', lname: 'b'},
            {id: 3, email: 'c@c', fname: 'c', lname: 'c'},
            {id: 4, email: 'd@d', fname: 'd', lname: 'd'},
            {id: 5, email: 'e@e', fname: 'e', lname: 'e'},
        ];
        cy.mount(<UsersTable users={users} removeUser={() => {
        }}/>);
        cy.get('tr').should('have.length', 6);
    })
    it('should display 6 td in each row', () => {
        const users = [
            {id: 1, email: 'a@a', fname: 'a', lname: 'a'},
            {id: 2, email: 'b@b', fname: 'b', lname: 'b'},
            {id: 3, email: 'c@c', fname: 'c', lname: 'c'},
            {id: 4, email: 'd@d', fname: 'd', lname: 'd'},
            {id: 5, email: 'e@e', fname: 'e', lname: 'e'},
        ];
        cy.mount(<UsersTable users={users} removeUser={() => {
        }}/>);
        //check that each tr has 6 td
        cy.get('table').find('tr').its('length').should('eq', 6);
    })
});