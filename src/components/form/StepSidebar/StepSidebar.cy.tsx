import { composeStories } from '@storybook/testing-react';
import * as rawStories from './StepSidebar.stories';

const stories = composeStories(rawStories);

describe('', () => {
  beforeEach(() => {
    cy.viewport('macbook-11');
  });

  it('Mounts in default state.', () => {
    cy.mount(<stories.Filled />);
    cy.get('p.step-label').should('have.length', 4);
  });
});
