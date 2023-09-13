import { forwardRef } from 'react';
import { IconButton } from '@components/buttons/IconButton';
import { IconButtonProps } from '@components/buttons/IconButton/types';
import { RemoveCircleIcon } from '@components/icons/RemoveCircleIcon';
import './styles.scss';

export const DeleteIconButton = forwardRef < HTMLButtonElement, Omit<IconButtonProps, 'icon'>>(({
  native,
  ...restProps
}, ref) => {
  return (
    <IconButton
      native={{
        ...native,
        className: `delete-icon-button ${native.className}`,
      }}
      icon={<RemoveCircleIcon/>}
      ref={ref}
      {...restProps}
    />
  );
});
