import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface ProfilePageProps {
    className?: string,
}

const ProfilePage = (props: ProfilePageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    const mods: Record<string, boolean> = {

    };

    return (
        <div className={classNames('', mods, [className])}>
            {t('PROFILE PAGE')}
        </div>
    );
};

export default ProfilePage;
// Дефолтный экспорт нужен для того чтобы работала конструкция
// в асинхронном чанке ProfilePage.async.tsx:
// setTimeout(() => resolve(import('./ProfilePage')), 300);
