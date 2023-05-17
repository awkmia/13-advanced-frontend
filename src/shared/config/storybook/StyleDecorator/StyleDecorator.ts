import 'app/styles/index.scss';
import { Story } from '@storybook/react';

export const StyleDecorator = (story: () => Story) => story();

// Use like component
// export const StyleDecorator = (story: () => Story) => <Story>;
