import React from 'react';
import {useTranslation} from "react-i18next";

const AboutPage = () => {

    // NameSpace нужно добавить public/locales/en/...
    //Для подгрузки chunk в useTranslation() нужно первым аргументов передать название nameSpace, в данном случае 'about':
    // const {t} = useTranslation('about');
    const {t} = useTranslation('about');

    return (
        <div>
            {t('О сайте')}
        </div>
    );
};

export default AboutPage;
