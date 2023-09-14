import { BaseTextarea } from '#components/atoms/inputs/BaseTextarea';
import { useEffect, useRef } from 'react';
import { AutoResizingTextareaProps } from './types';
import './styles.scss';

export function AutoResizingTextarea({ value = '', onChange, ...restProps }: AutoResizingTextareaProps) {
    const textareaRef = useRef(null);

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, [value]);

    return (
        <BaseTextarea
            {...restProps}
            ref={textareaRef}
            value={value}
            onChange={onChange}
            className="dynamic-textarea"
            rows={1}
        />
    );
}

