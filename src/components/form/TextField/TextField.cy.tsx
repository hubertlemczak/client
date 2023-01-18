import { composeStories } from '@storybook/testing-react';
import * as rawStories from './TextField.stories';

const stories = composeStories(rawStories);

describe('', () => {
  beforeEach(() => {
    cy.viewport('macbook-11');
  });

  it('Mounts in no label state.', () => {
    cy.mount(<stories.NoLabel />);
  });

  it('Mounts in label state.', () => {
    const { name } = stories.WithLabel.args!.label!;

    cy.mount(<stories.WithLabel />);
    cy.get('div > input').type('Hello hehe');
    cy.get('div > label').should('contain.text', name);
  });
});
