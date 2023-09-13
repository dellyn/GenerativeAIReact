import classNames from 'classnames';
import { Input } from '#components/inputs/Input';
import { InputProps } from './types';
import './styles.scss';

export const InputWithLabel = ({ labelProps, inputProps }) => {
    return (
        <div className="input-with-label-container">
            <label
                {...labelProps}
                htmlFor={inputProps.id}
            >{labelProps.value}</label>
            <Input
                {...inputProps}
                id={inputProps.id}
                className={classNames('input', inputProps.className)} />
        </div>
    );
};
