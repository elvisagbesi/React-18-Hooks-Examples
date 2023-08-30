
import { useEffect, useState } from "react";
import { convertToSnakeCase } from "../../helpers/utils";

interface Props {
  label?: string;
  subLabel?: string;
  options?: {
    value: string;
    label: string;
  }[];
  selected?: string;
  required?: boolean;
  onChange?: (value: string) => void;
}

export default function CheckGroup({
  label,
  subLabel,
  options = [],
  selected,
  onChange,
  required
}: Props) {
  const labelInfo = convertToSnakeCase(label || "").toLowerCase();

  const [value, setValue] = useState(selected || "");

  useEffect(() => {
    if (selected) {
      setValue(selected)
    }
  }, [selected]);
  
  return (
    <div>
      {(label || subLabel) && (
        <>
          <label
            htmlFor={labelInfo}
            className="text-sm font-medium text-gray-700"
          >
            {label}
            {
              required &&
              <span className="text-red-500">*</span>
            }
          </label>
          <p className="text-sx text-gray-500">{subLabel}</p>
        </>
      )}
      <fieldset className="mt-4">
        <legend className="sr-only">{label}</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onChange?.(option.value);
                setValue?.(option.value)}
              }
              className="flex items-center"
            >
              <input
                id={labelInfo}
                name={labelInfo}
                aria-checked={option.value === value}
                type="check"
                required={required}
                value={option.value}
                checked={option.value === value}
                defaultChecked={option.value === value}
                className="h-5 w-5 border-gray-300 text-primary focus:ring-primary"
              />
              <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
