import React, { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type IPropButton = {} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ ...props }: IPropButton) {
    return <button {...props}>{props.children}</button>;
}
