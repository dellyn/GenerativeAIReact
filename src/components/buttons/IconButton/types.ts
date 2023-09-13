import { BaseButtonProps, BaseButtonRefs } from '#components/atoms/buttons/BaseButton/types';
import { ReactElement } from 'react';

export type IconButtonProps = BaseButtonProps & {
    icon: ReactElement
    isLoading?: boolean
}

export type IconButtonRefs = BaseButtonRefs
