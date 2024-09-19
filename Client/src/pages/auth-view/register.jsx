/**Registration Page */

import CommonForm from "@/components/common-component/form";
import { registerFormControls } from "@/components/config-component";
import { useState } from "react";
import { Link } from "react-router-dom";

//Declare and initialize initial state
const initialState = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegistration() {
  const [formData, setFormData] = useState(initialState);

  function onSubmit(){}
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Create account
        </h2>
        <p className="mt-4 text-sm text-gray-600">
          Already have an account?
          <Link
            className="font-medium ml-1 text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        formData={formData}
        setFormData={setFormData}
        buttonText={'Sign Up'}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthRegistration;
