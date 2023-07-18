import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from '@/app/providers/ErrorBoundary';
import { Page } from '@/widgets/Page';

function MainPage() {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Главная страница')}
            <hr />
            {t('i18n support')}
            <BugButton />
        </Page>
    );
}

export default MainPage;
// Дефолтный экспорт нужен для того чтобы работала конструкция
// в асинхронном чанке MainPage.async.tsx:
// setTimeout(() => resolve(import('./MainPage')), 300);
