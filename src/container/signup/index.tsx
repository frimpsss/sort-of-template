import { SignUpForm } from "@/components/form";

const initialValues = {
    username: "",
    password: "",
  };
  function handleSubmit(){}
  export default function SignUpContainer(){
    return <SignUpForm initialValues={initialValues} onSubmit={handleSubmit}/>
  }