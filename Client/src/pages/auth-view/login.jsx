import CommonForm from "@/components/common-component/form";
import { loginFormControls } from "@/components/config-component";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  userName: null,
  password: "",
};
function AuthLogin() {
  const [formData, setFormData] = useState(initialState);

  function onSubmit() {}
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Login
        </h1>
        <p className="mt-4 text-sm text-gray-600">
          Don't have an account?
          <Link
            className="font-medium ml-1 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        formData={formData}
        setFormData={setFormData}
        buttonText={"Login"}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthLogin;
