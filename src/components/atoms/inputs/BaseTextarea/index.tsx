import { FC, TextareaHTMLAttributes } from 'react';
import './styles.scss'
interface BaseTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

const BaseTextarea: FC<BaseTextareaProps> = (props) => {
    return (
        <textarea {...props} className={`base-textarea ${props.className}`} />
    );
};

export default BaseTextarea;
