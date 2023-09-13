import {
  PropsWithChildren, forwardRef,
} from 'react';
import { BaseButton } from '#components/atoms/buttons/BaseButton';
import { AppButtonProps } from './types';
import './styles.scss';

type Props = PropsWithChildren<AppButtonProps>

export const Button = forwardRef<HTMLButtonElement, Props>(({
  className,
  children,
  isLoading,
  icon,
  ...restProps
}, ref) => {
  return (
    <BaseButton
      {...restProps}
      ref={ref}
      className={`button ${className}`}
    >{icon && icon}
      {isLoading ? 'Loading...' : ''}
      {children}
    </BaseButton >
  );
});
