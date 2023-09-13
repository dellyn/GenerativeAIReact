import {
    forwardRef,
    PropsWithChildren,
} from 'react';
import { BaseLabelProps, BaseLabelRefs } from './types';
import { BaseLabel } from '#components/atoms/labels/BaseLabel';
import './styles.scss'

export const Label = forwardRef<BaseLabelRefs, PropsWithChildren<BaseLabelProps>>(({
    className,
    onChange,
    children,
    ...restProps
}, ref) => {
    return (
        <BaseLabel
            {...restProps}
            className={`label ${className}`}
        >{children}</BaseLabel>
    );
});
