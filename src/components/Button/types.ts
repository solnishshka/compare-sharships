import { HTMLAttributes } from "react";

export type Props = HTMLAttributes<HTMLButtonElement> & {
    variant?: 'bordered' | 'filled' | 'link';
    size?: 'sm' | 'lg' | 'xl';
    disabled?: boolean;
}