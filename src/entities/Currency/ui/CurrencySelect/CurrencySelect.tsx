import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

// const options = [
//     { value: Currency.RUB, content: Currency.RUB },
//     { value: Currency.EUR, content: Currency.EUR },
//     { value: Currency.USD, content: Currency.USD },
// ];

const options = Object.entries(Currency).map((currency) => ({
    value: currency[0],
    content: currency[1],
}));

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        onChange,
        value,
        readonly,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <ListBox
            className={className}
            value={value}
            defaultValue={t('Укажите валюту')}
            label={t('Укажите валюту')}
            items={options}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top right"
        />
    );
});
