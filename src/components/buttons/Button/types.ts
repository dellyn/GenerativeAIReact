import { BaseButtonProps, BaseButtonRefs } from '#components/atoms/buttons/BaseButton/types';
import { ReactNode } from 'react';

export type AppButtonProps = BaseButtonProps & { isLoading?: boolean, icon: ReactNode }
export type AppButtonRefs = BaseButtonRefs
