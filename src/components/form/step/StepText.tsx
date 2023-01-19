/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import { IStepTextProps } from '../StepSidebar/StepSidebar';

const stepTextStyle = css({
  p: {
    lineHeight: 1.4,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },

  '.step-number': {
    color: '#AEABFF',

    fontSize: 12,
  },

  '.step-label': {
    color: 'white',

    fontSize: 14,
    fontWeight: 'bold',
  },

  '@media (max-width: 760px)': {
    display: 'none',
  },
});

const StepText = ({ label, stepNumber }: IStepTextProps) => {
  return (
    <div css={[stepTextStyle]}>
      <p className="step-number">Step {stepNumber}</p>
      <p className="step-label">{label}</p>
    </div>
  );
};

export default StepText;
