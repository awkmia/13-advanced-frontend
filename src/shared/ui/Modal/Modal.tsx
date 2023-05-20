import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string,
    children?: ReactNode
}

export const Modal = (props: ModalProps) => {
    const {
        children,
        className,
    } = props;

    const mods = {

    };

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay}>
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};
