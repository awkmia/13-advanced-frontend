import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { sendComment } from 'features/addCommentForm/model/services/sendComment/sendComment';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import cls from './addCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string,
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = (props: AddCommentFormProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText) || '';
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendComment = useCallback(() => {
        dispatch(sendComment());
    }, [dispatch]);

    const mods: Record<string, boolean> = {};

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, mods, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('Введите текст комментария')}
                    onChange={onCommentTextChange}
                    value={text}
                />
                <Button
                    onClick={onSendComment}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>

    );
};

export default AddCommentForm;
