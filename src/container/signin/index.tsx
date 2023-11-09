import { SignInForm } from "@/components/form";

const initialValues = {
    username: "",
    password: "",
  };
  function handleSubmit(){}
  export default function SignInContainer(){
    return <SignInForm initialValues={initialValues} onSubmit={handleSubmit}/>
  }