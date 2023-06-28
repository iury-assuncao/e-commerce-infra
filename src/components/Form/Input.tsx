import React from 'react';
import { InputErrorMessage } from './InputErrorMessage';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label?: string; errors?: any };

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ label, errors, name, ...props }: Props, ref) => {
    return (
      <div className="flex w-full flex-col items-start justify-start gap-1">
        {label && (
          <label className="mt-5 text-sm font-semibold">{label}:</label>
        )}
        <input
          {...props}
          ref={ref}
          className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition-all focus:border-orange-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <InputErrorMessage name={name} errors={errors} />
      </div>
    );
  }
);
