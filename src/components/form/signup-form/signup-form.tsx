"use client";
import { signUpSchema } from "./schema";
import { useFormik } from "formik";
import TextField from "../../core/text-input";
interface signUpFormProps {
  initialValues?: any;
  onSubmit: () => void;
}
export default function SignUpForm({
  initialValues,
  onSubmit,
}: signUpFormProps) {
  const { handleSubmit ,...form } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: () => {
      onSubmit();
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <TextField id="username" label="Username" {...form} type="text" />
          <TextField id="password" label="Password" {...form} type="password" />
        </div>

        <button
          type={"submit"}
          className="bg-[#002e62f1] hover:bg-[#002e62] duration-300 py-2 rounded-md mt-[3rem]  text-white w-full font-semibold"
        >
          Sign up
        </button>
      </form>
    </>
  );
}
