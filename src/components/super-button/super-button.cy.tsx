import SuperButton from './super-button';

const icon = 'https://icon-library.com/images/twitter-small-icon/twitter-small-icon-17.jpg';

describe('super-button', () => {
    // this is sanity test
    it('should display default button', () => {
        cy.mount(<SuperButton label="test"/>);
        cy.get('button').should('exist');
        cy.get('button').should('have.attr', 'class', 'super-button');
        cy.get('span.label').should('have.text', 'test');
        cy.get('img').should('not.exist');
    });

    it.skip('should make sure the button size zoomed when hover', () => {
        cy.mount(<SuperButton label="test"/>);
        // cy.get('button').trigger('mouseleave');
        // cy.get('button').trigger('mouseover');
        // cy.get('button').should('exist');
    });

    it('should display icon at the start', () => {
        cy.mount(<SuperButton label="With Icon" icon={icon}/>);

        // asserts on the buttons
        cy.get('button').should('exist');
        cy.get('button').should('have.attr', 'class', 'super-button');
        cy.get('span.label').should('have.text', 'With Icon');

        // asserts icon
        // both next lines are identical
        cy.get('span').first().get('img').should('exist');
        cy.get('.super-button span:first-child img').should('exist');
    });

    it('should display icon at the end', () => {
        cy.mount(<SuperButton label="With Icon" icon={icon} postfixIcon={true}/>);

        // asserts on the buttons
        cy.get('button').should('exist');
        cy.get('button').should('have.attr', 'class', 'super-button');
        cy.get('span.label').should('have.text', 'With Icon');

        // asserts icon
        cy.get('span').last().get('img').should('exist');
        cy.get('.super-button span:last-child img').should('exist');
    });


    it('should make sure the button label is "HIT ME"', () => {
        cy.mount(<SuperButton label="HIT ME" />);
        cy.get("button").should("exist");
        cy.get("button").should("have.attr", "class", "super-button");
        cy.get("span.label").should("have.text", "HIT ME");
    });







    //
    //
    //
    // it('should display icon', () => {
    //     cy.mount(<SuperButton label="test"/>);
    //     cy.get('button').invoke('css', 'width').should('equal', '200px');
    // });
});
