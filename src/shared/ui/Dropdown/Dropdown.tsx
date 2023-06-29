import { classNames } from 'shared/lib/classNames/classNames';
import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import cls from './Dropdown.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
}

export function Dropdown(props: DropdownProps) {
    const {
        className,
        items,
        trigger,
    } = props;

    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={cls.menu}>
                {items.map((item) => {
                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {({ active }) => (
                                <button
                                    type="button"
                                    onClick={item.onClick}
                                    className={classNames(cls.item, { [cls.active]: active })}
                                >
                                    {item.content}
                                </button>
                            )}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
