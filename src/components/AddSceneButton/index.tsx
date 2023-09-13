import {
    PropsWithChildren, forwardRef,
} from 'react';
import './styles.scss';
import { AppButtonProps } from '#components/buttons/Button/types';
import { BaseButton } from '#components/atoms/buttons/BaseButton';

type Props = PropsWithChildren<AppButtonProps>

export const AddSceneButton = forwardRef<HTMLButtonElement, Props>(({
    className,
    children,
    ...restProps
}, ref) => {
    return (
        <BaseButton
            {...restProps}
            ref={ref}
            className={`add-scene-button ${className}`}
        >
            <span className='value'>{children}</span>
        </BaseButton >
    );
});
