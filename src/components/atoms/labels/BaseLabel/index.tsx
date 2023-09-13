import {
    forwardRef,
    PropsWithChildren,
} from 'react';

import { BaseLabelProps, BaseLabelRefs } from './types';

export const BaseLabel = forwardRef<BaseLabelRefs, PropsWithChildren<BaseLabelProps>>(({
    className,
    onChange,
    children,
    ...restProps
}, ref) => {
    return (
        <label
            {...restProps}
            className={`base-label ${className}`}
        >{children}</label>
    );
});
