import React from 'react';
import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation();

    return (
        <div>
            {t('Главная страница')}
            <hr />
            {t('i18n support')}
        </div>
    );
}

export default MainPage;
