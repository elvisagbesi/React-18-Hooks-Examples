import { ReactNode } from "react";

export interface ButtonPropType {
  label: string;
  loading?: boolean;
  className?: string;
  onClick?: any;
  colspan?: number;
  disabled?: boolean;
  icon?: ReactNode;
}

const Button = ({
  label,
  loading,
  className,
  onClick,
  colspan,
  disabled,
  icon,
}: ButtonPropType) => {
  return (
    <div className={` col-span-${colspan || 1}`}>
      <button
        disabled={disabled}
        onClick={onClick}
        type={onClick ? "button" : "submit"}
        className={`${
          className
            ? className
            : "text-white bg-primary hover:bg-primary border border-gray-100/30 focus:ring-offset-2 focus:ring-primary"
        } flex w-full justify-center py-2 px-4 rounded-md shadow-sm text-sm font-semibold focus:outline-none disabled:text-white disabled:bg-gray-200`}
      >
        {icon && icon}
        {loading ? (
          <>
            <div className={` flex justify-center items-center text-white`}>
              Loading
            </div>
          </>
        ) : (
          <>{label}</>
        )}
      </button>
    </div>
  );
};

export default Button;
