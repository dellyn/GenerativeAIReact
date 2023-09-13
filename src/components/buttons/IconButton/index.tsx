import {
  forwardRef,
} from 'react';
import { BaseButton } from '#components/atoms/buttons/BaseButton';
import { IconButtonProps } from './types';
import './styles.scss';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({
  icon,
  isLoading,
  className,
  ...restProps
}, ref) => {
  return (
    <BaseButton
      {...restProps}
      ref={ref}
      className={`icon-button ${className}`}
    >
      {isLoading ? 'Loading...' : ''}
      {icon}
    </BaseButton >
  );
});
