import {
  MutableRefObject,
  ButtonHTMLAttributes,
} from 'react';

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type BaseButtonRefs = {
    buttonRef: MutableRefObject<HTMLButtonElement | null>;
};
