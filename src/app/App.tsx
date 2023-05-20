import React, { Suspense, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';
import { Modal } from 'shared/ui/Modal/Modal';

function App() {
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    {/* eslint-disable-next-line max-len */}
                    i18n supporti18n supporti18n supporti18n supporti18n supporti18n supporti18n supporti18n
                </Modal>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <button type="button" onClick={() => setIsOpen(true)}>Toggle</button>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
