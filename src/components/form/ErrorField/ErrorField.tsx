/** @jsxImportSource @emotion/react */

import { css, SerializedStyles } from '@emotion/react';
import { ErrorMessage } from 'formik';

interface IErrorFieldProps {
  name: string;
  errorCustomStyle?: SerializedStyles;
  [key: string]: any;
}

const errorFieldStyle = css({
  fontSize: 12,
  fontWeight: 'bold',
  paddingLeft: 13,
  color: 'red',
  marginLeft: 'auto',
  textAlign: 'right',
  marginBottom: 4,
});

const ErrorField = ({ name, errorCustomStyle, ...props }: IErrorFieldProps) => (
  <ErrorMessage
    css={[errorFieldStyle, errorCustomStyle]}
    name={name}
    component="div"
    {...props}
  />
);

export default ErrorField;
