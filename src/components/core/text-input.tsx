import { FC } from "react";
import { BiError } from "react-icons/bi";
interface TextFieldProps {
  id: string;
  label: string;
  handleChange: any;
  handleBlur: any;
  type: "text" | "number" | "email" | "number" | "password";
  values: any;
  errors?: any;
  touched?: any;
  placeholder?: string;
}
const TextField: FC<TextFieldProps> = ({
  id,
  label,
  handleBlur,
  handleChange,
  type,
  values,
  errors,
  touched,
  placeholder,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-meduim text-[0.98rem]  text-slate-500"
      >
        {label}
      </label>
      <div className="mt-2 relative">
        <input
          autoCorrect="false"
          type={type ?? "text"}
          name={id}
          value={values[id]}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder ?? ""}
          className="shadow-sm w-full focus:ring-[#00308F] focus:border-[#00308F] border-slate-300 px-2 py-[0.3rem] text-[1rem] lg:text-[0.9rem] duration-300 rounded-md font-[100] text-slate-800"
        />
        {errors[id] && touched[id] && (
          <div
            className=" absolute  inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
            aria-hidden="true"
          >
            <BiError
              style={{
                color: "red",
              }}
            />
          </div>
        )}
      </div>
      {errors[id] && touched[id] && (
        <p className="text-[0.8rem] text-[red] mt-1 font-light">{errors[id]}</p>
      )}
    </div>
  );
};

export default TextField;
