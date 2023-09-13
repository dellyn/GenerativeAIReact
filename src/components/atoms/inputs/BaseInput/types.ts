import { InputHTMLAttributes, MutableRefObject } from 'react';

export type BaseInputProps = Partial<InputHTMLAttributes<HTMLInputElement>> & {
    debounceMs?: number;
};

export type BaseInputRefs = {
    inputRef?: MutableRefObject<HTMLInputElement | null>;
};
