import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string,
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('profile');

    const mods: Record<string, boolean> = {

    };

    return (
        <div className={classNames(cls.ProfilePageHeader, mods, [className])}>
            <Text title={t('Профиль')} />
            <Button
                className={cls.editBtn}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Редактировать')}
            </Button>
        </div>
    );
};
