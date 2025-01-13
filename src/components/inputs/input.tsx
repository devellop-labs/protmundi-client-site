import React from "react";

import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  useFormContext,
} from "react-hook-form";

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    rows?: number;
    // control: Control<FieldValues> | undefined;
    name: string;
    label?: string;
    description?: string;
    error?: FieldError | undefined;
  };

const FilteredInput: React.FC<TextInputProps> = ({
  rows = 0,
  className,
  error,
  ...props
}) => {
  const classes =
    className +
    ` outline-0 border-[2px] rounded-[5px] h-[50px] p-6 ${
      error
        ? "border-red-500"
        : "border-[#c3deea] focus-within:border-primary focus-visible:border-primary focus:border-primary transition-all"
    }`;

  if (rows > 1) {
    return (
      <textarea
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        className={`${classes} min-h-[160px]`}
        rows={rows}
      />
    );
  }

  return (
    <input
      {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
      type={props.type}
      className={`${classes}`}
    />
  );
};

const Input: React.FC<TextInputProps> = (props) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field, fieldState: { error }, formState }) => (
        <label
          className="flex flex-col gap-1 text-dark h-fit"
          htmlFor={field.name}
        >
          <div className="flex flex-col gap-1">
            <div
              className={`text-[15px] font-[500] ${!props.label && "hidden"}`}
            >
              {props.label}
            </div>
            <div
              className={`${
                !props.description && "hidden"
              } font-[500] text-[12px]`}
            >
              {props.description}
            </div>
            <div className="flex flex-col">
              <FilteredInput
                error={error}
                id={field.name}
                {...props}
                {...field}
              />
              <p className="text-red-400">{error?.message}</p>
            </div>
          </div>
        </label>
      )}
    />
  );
};

export default Input;
