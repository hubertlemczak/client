/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Field } from 'formik';
import ErrorField from '../ErrorField/ErrorField';

interface ISelectFieldProps {
  label?: {
    name: string;
    id: string;
  };
  options: { value: string; label: string }[];
  name: string;
  [key: string]: any;
}

const selectFieldStyle = css({
  padding: 12,
  fontWeight: 'bold',
  fontSize: 15,
  borderRadius: 8,
  border: '1px solid lightgray',
  width: '100%',
  outline: 0,
  color: '#032956',
  '::placeholder': {
    color: 'GrayText',
    opacity: 0.7,
  },
});

const selectFieldContainer = css({
  maxWidth: 450,
  marginBottom: 20,
  label: {
    display: 'block',
    fontSize: 14,
    fontWeight: 500,
    color: '#032956',
    marginBottom: 4,
    textTransform: 'capitalize',
  },
  div: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const SelectField = ({ name, label, options, ...props }: ISelectFieldProps) => {
  return (
    <div css={selectFieldContainer}>
      <div>
        {label && <label htmlFor={label.id}>{label.name}</label>}
        <ErrorField name={name} />
      </div>
      <Field
        name={name}
        css={selectFieldStyle}
        id={label?.id}
        as="select"
        {...props}
      >
        <option value="" disabled></option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
    </div>
  );
};

export default SelectField;
