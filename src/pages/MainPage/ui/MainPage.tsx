import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';

function MainPage() {
    const { t } = useTranslation();

    return (
        <div>
            <Counter />
            {t('Главная страница')}
            <hr />
            {t('i18n support')}
            <BugButton />
        </div>
    );
}

export default MainPage;
