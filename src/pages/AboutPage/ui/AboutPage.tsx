import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { RatingCard } from '@/entities/Rating';

function AboutPage() {
    // NameSpace нужно добавить public/locales/en/...
    // Для подгрузки chunk в useTranslation() нужно первым аргументов передать название nameSpace, в данном случае 'about':
    // const {t} = useTranslation('about');
    const { t } = useTranslation('about');

    return (
        <Page>
            {t('О сайте')}
            <RatingCard
                title="Как вам статья?"
                feedbackTitle="Оставьте отзыв о статье"
                hasFeedback
            />
            <StarRating />
        </Page>
    );
}

export default AboutPage;
// Дефолтный экспорт нужен для того чтобы работала конструкция
// в асинхронном чанке AboutPage.async.tsx:
// setTimeout(() => resolve(import('./AboutPage')), 300);
