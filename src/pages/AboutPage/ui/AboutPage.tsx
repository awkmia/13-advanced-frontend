import React from 'react';
import { useTranslation } from 'react-i18next';
import { HStack } from 'shared/ui/Stack';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Page } from 'widgets/Page/Page';

function AboutPage() {
    // NameSpace нужно добавить public/locales/en/...
    // Для подгрузки chunk в useTranslation() нужно первым аргументов передать название nameSpace, в данном случае 'about':
    // const {t} = useTranslation('about');
    const { t } = useTranslation('about');

    return (
        <Page>
            {t('О сайте')}
            <div>Абра-кадабра-а-а-а-а-а-а-а-а-а-а-а!!!</div>
            <HStack>
                <div>Абра-кадабра-а-а-а-а-а-а-а-а-а-а-а!!!</div>
                <ListBox />
            </HStack>
            <div>Абра-кадабра-а-а-а-а-а-а-а-а-а-а-а!!!</div>
            <div>Абра-кадабра-а-а-а-а-а-а-а-а-а-а-а!!!</div>
            <div>Абра-кадабра-а-а-а-а-а-а-а-а-а-а-а!!!</div>
            <div>Абра-кадабра-а-а-а-а-а-а-а-а-а-а-а!!!</div>
            <div>Абра-кадабра-а-а-а-а-а-а-а-а-а-а-а!!!</div>
            <div>Абра-кадабра-а-а-а-а-а-а-а-а-а-а-а!!!</div>
        </Page>
    );
}

export default AboutPage;
// Дефолтный экспорт нужен для того чтобы работала конструкция
// в асинхронном чанке AboutPage.async.tsx:
// setTimeout(() => resolve(import('./AboutPage')), 300);
