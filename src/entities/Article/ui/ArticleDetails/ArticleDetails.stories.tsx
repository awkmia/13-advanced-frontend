import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleDetails } from 'shared/ui/ArticleDetails/ArticleDetails';

export default {
    title: 'shared/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
