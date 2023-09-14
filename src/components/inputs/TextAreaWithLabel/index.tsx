import { FC, TextareaHTMLAttributes } from 'react';
import { Label } from '#components/labels/Label';
import { BaseLabelProps } from '#components/labels/Label/types';
import { AutoResizingTextarea } from '../AutoResizingTextarea';
import './styles.scss';

interface BaseTextareaProps {
    labelProps: BaseLabelProps & { value?: string }
    inputProps: TextareaHTMLAttributes<HTMLTextAreaElement>
}

export const TextAreaWithLabel: FC<BaseTextareaProps> = ({ labelProps = {}, inputProps = {} }) => {
    return (
        <div className="textarea-with-label">
            {labelProps.value && <Label {...labelProps}
                htmlFor={inputProps.id}>{labelProps.value}</Label>}
            <AutoResizingTextarea
                {...inputProps}
                id={inputProps.id}
                className={`textarea ${inputProps.className}`}
                placeholder='Enter your description of the desired result'
            />
        </div>
    );
};

