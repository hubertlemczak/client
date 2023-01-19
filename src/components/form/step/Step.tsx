/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import StepIcon from './StepIcon';
import StepText from './StepText';

interface IProps {
  isActive: boolean;
  label: string;
  stepNumber: number;
}

const stepStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: 20,
  width: 'fit-content',
  cursor: 'pointer',

  marginBottom: 30,
});

const Step = ({ isActive, label, stepNumber }: IProps) => {
  return (
    <div
      css={[stepStyle]}
      onClick={() => {
        /* navigate to step form section */
      }}
    >
      <StepIcon {...{ isActive, stepNumber }} />
      <StepText {...{ label, stepNumber }} />
    </div>
  );
};

export default Step;
