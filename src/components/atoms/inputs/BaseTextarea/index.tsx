import { forwardRef } from 'react';
import { BaseTextareaProps } from './types';
import './styles.scss'


export const BaseTextarea = forwardRef<HTMLTextAreaElement, BaseTextareaProps>(({ className, ...restProps }, ref) => {
    return (
        <textarea
            {...restProps}
            ref={ref}
            className={`base-textarea ${className}`} />
    );
});
