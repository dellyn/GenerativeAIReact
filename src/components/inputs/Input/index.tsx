import classNames from 'classnames';
import { BaseInput } from '#components/atoms/inputs/BaseInput';
import { InputProps } from './types';
import './styles.scss';

export const Input = ({ className, ...props }): InputProps => {
  return (
    <BaseInput {...props}
      className={classNames('input', className)} />
  );
};
