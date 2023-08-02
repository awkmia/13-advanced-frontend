import { selectByTestId } from '../../helpers/selectByTestId';

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            cy.visit(`profile/${data.id}`);
        });
    });
    it('И профиль успешно загружается', () => {
        cy.get(selectByTestId('ProfileCard.firstname')).should('have.value', 'test');
    });
    it('И редактирует его', () => {
    });
});
