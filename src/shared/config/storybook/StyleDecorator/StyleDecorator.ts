// eslint-disable-next-line awkmia-plugin/layer-imports
import '@/app/styles/index.scss';
import { Story } from '@storybook/react';

export const StyleDecorator = (story: () => Story) => story();

// Use like component
// export const StyleDecorator = (story: () => Story) => <Story>;
