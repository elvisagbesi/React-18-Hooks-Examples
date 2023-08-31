import { useId } from "react";

export interface CheckboxPropType {
  label: string;
  onCheck?: (value: any) => void
  id?: string
  name: string
}

function Checkbox({ label, onCheck, name,  id}: CheckboxPropType) {
  const componentId = useId() // component unique id
  return (
    <div>
      <div className="flex items-center">
        <input
          id={componentId ?? id}
          name={name}
          type="checkbox"
          className="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded"
          onChange={(event) => onCheck?.(event?.target.checked)}
        />
        <label
          htmlFor={componentId ?? id}
          className="ml-2 block text-sm text-gray-700 dark:text-white"
        >
          { label }
        </label>
      </div>
    </div>
  );
}

export default Checkbox;
