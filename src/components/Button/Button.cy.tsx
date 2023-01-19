import { composeStories } from '@storybook/testing-react';
import * as rawStories from './Button.stories';

const stories = composeStories(rawStories);

describe('', () => {
  beforeEach(() => {
    cy.viewport('macbook-11');
  });

  it('Mounts in label state.', () => {
    const { label } = stories.Defualt.args!;

    cy.mount(<stories.Defualt />);
    cy.get('button').should('contain.text', label);
  });
});
