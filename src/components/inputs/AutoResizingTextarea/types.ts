import { TextareaHTMLAttributes } from "react";

export type AutoResizingTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
}