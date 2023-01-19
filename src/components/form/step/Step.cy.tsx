import { composeStories } from '@storybook/testing-react';
import * as rawStories from './Step.stories';

const stories = composeStories(rawStories);

describe('', () => {
  beforeEach(() => {
    cy.viewport('macbook-11');
  });

  it('Mounts in default state.', () => {
    const { label } = stories.Defualt.args!;

    cy.mount(<stories.Defualt />);
    cy.get('p.step-label').should('contain.text', label);
  });

  it('Mounts in active state.', () => {
    const { label } = stories.Active.args!;

    cy.mount(<stories.Active />);
    cy.get('p.step-label').should('contain.text', label);
  });
});
