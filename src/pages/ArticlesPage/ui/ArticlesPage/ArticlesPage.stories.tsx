import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import withMock from 'storybook-addon-mock';
import { Article } from 'entities/Article';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 1000,
    user: { id: '1', username: 'admin' },
    blocks: [],
    type: [],
    title: 'sub',
    subtitle: 'subchick',
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_expand=user&_page=2&_limit=9&_sort=createdAt&_order=asc&q=`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
            ],
        },
    ],
};
