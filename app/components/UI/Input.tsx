import React, { InputHTMLAttributes } from 'react';

type IPropInput = {} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ ...props }: IPropInput) {
    return (
        <div className="w-full">
            <input {...props} />
        </div>
    );
}
