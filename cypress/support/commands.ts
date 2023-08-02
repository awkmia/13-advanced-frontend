import {USER_LOCALSTORAGE_KEY} from "@/shared/const/localstorage";

Cypress.Commands.add('login', (username: string = 'testuser', password: string = '123') => {
    cy.log(`Logging in as ${username}`)
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            grant_type: 'password',
            username,
            password,
        },
    }).then(({body}) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body))
    });
});

declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<void>
        }
    }
}

export {};
