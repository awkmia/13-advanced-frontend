import React, { ErrorInfo, ReactNode } from 'react';
import { TFunction, withTranslation, WithTranslation } from 'react-i18next';

interface ErrorBoundaryProps extends WithTranslation {
    children: ReactNode;
    t: TFunction;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
        console.log(error, info);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        const { t } = this.props;

        if (hasError) {
            // You can render any custom fallback UI
            return <h1>{t('Something went wrong.')}</h1>;
        }

        return children;
    }
}

export default withTranslation()(ErrorBoundary);
// export default ErrorBoundary;
