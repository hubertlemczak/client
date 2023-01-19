/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useState } from 'react';

import Step from '../step/Step';

export interface IStepTextProps {
  stepNumber: number;
  label: string;
}

interface IProps {
  steps: IStepTextProps[];
}

const stepSidebarStyle = css({});

const StepSidebar = ({ steps }: IProps) => {
  const [isActive, setIsActive] = useState<number>();

  return (
    <div css={[stepSidebarStyle]}>
      {steps?.map((step, i) => (
        <Step
          key={i}
          isActive={isActive === step.stepNumber}
          stepNumber={step.stepNumber}
          label={step.label}
        />
      ))}
    </div>
  );
};

export default StepSidebar;
