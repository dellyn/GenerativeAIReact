import { InputHTMLAttributes, LabelHTMLAttributes, MutableRefObject } from 'react';

export type BaseLabelProps = Partial<LabelHTMLAttributes<HTMLLabelElement>>

export type BaseLabelRefs = {
    inputRef?: MutableRefObject<HTMLLabelElement | null>;
};
