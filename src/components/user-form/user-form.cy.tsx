import UserForm from './user-form';

describe('user-form', () => {

    it('should display with 4 elements and button', () => {
        cy.mount(<UserForm/>);
        cy.get('input').should('have.length', 4);
        cy.get('button').should('have.length', 1);
    });


    it('should raise data', () => {
        const submit = cy.spy().as('onUser');

        cy.mount(<UserForm onUser={submit}/>);
        cy.get('button[type="submit"]').click();
        cy.get('@onUser').should('have.been.calledWith', {
            email: '',
            fname: '',
            lname: '',
            password: ''
        });
    });

    it('should fill the text in the fields and raise the data', () => {
        const submit = cy.spy().as("onUser");

        cy.mount(<UserForm onUser={submit} />);
        cy.get('input[name="email"]').type('eee@eee');
        cy.get('input[name="fname"]').type('fname');
        cy.get('input[name="lname"]').type('lname');
        cy.get('input[name="password"]').type('password');
        cy.get('button[type="submit"]').click();
        cy.get("@onUser").should("have.been.calledWith", {
          email: "eee@eee",
          fname: "fname",
          lname: "lname",
          password: "password",
        });
    });
});
