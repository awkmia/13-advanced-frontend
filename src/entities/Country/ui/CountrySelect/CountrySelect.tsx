import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback, useMemo } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

// const options = [
//     { value: Country.Russia, content: Country.Russia },
//     { value: Country.Belarus, content: Country.Belarus },
//     { value: Country.Kazakhstan, content: Country.Kazakhstan },
//     { value: Country.Ukraine, content: Country.Ukraine },
//     { value: Country.Armenia, content: Country.Armenia },
// ];

const options = Object.entries(Country).map((country) => ({
    value: country[0],
    content: country[1],
}));

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        onChange,
        value,
        readonly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            onChange={onChangeHandler}
            value={value}
            defaultValue={t('Укажите страну')}
            label={t('Укажите страну')}
            items={options}
            readonly={readonly}
            direction="top"
        />
    );
});
