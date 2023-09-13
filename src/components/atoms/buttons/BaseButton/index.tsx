import { PropsWithChildren, forwardRef } from 'react';
import { BaseButtonProps } from './types';
import './styles.scss';

type Props = PropsWithChildren<BaseButtonProps>;

export const BaseButton = forwardRef<HTMLButtonElement, Props>(({
  children,
  className,
  disabled,
  ...restProps
}, ref) => {
  return (
    <button
      className={`base-button ${className} ${disabled ? 'disabled' : ''}`}
      disabled={disabled}
      {...restProps}
      ref={ref}
    >
      {children}
    </button>
  );
});
