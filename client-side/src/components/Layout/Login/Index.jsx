import PropTypes from "prop-types";
import { Card, Typography } from "@material-tailwind/react";
// import { useDispatch } from "react-redux";

import { loginInputData } from "../../../utils/constants";
import CustomButton from "../../Common/Button/Index";
import CustomInputTag from "../../Common/Input/Index";
import { loginValidations } from "../../../utils/yup";
import useFormHandler from "../../../hooks/ReactHookForm/Index";
import axiosInstance from "../../../utils/axios";
import { showError, showSuccess } from "../../../utils/toast";

export default function Login({ onClose }) {
  //   const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useFormHandler(loginValidations);

  const onSubmit = async (data) => {
    try {
      console.log(data, "admin login");
      const response = await axiosInstance.post("/admin/login", data);
      console.info("Login success response", response);
      if (response.data?.success === true) {
        onClose();
      } else {
        showError("Wrong Credentials");
      }
      // dispatch();
      showSuccess("Login Successful");
    } catch (error) {
      console.error("Login Error:", error);
      showError(error?.response?.data?.message);
    }
  };
  return (
    <Card
      color="transparent"
      shadow={false}
      className=" flex flex-col items-center px-4 py-4 md:py-10 md:px-0"
    >
      <Typography variant="h4" color="blue-gray">
        Admin Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to Login.
      </Typography>
      <form
        className="mt-8 mb-2 w-72 max-w-screen-lg md:w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-1 flex flex-col gap-4">
          {loginInputData.map(({ type, label, auth }, i) => (
            <CustomInputTag
              key={i}
              type={type}
              label={label}
              registering={register(auth)}
              errors={errors[auth]}
            />
          ))}
        </div>
        <div className="mt-5 flex justify-end gap-5">
          <CustomButton type="submit" value={"Submit"} />
        </div>
      </form>
    </Card>
  );
}

Login.propTypes = {
  onClose: PropTypes.func.isRequired,
};
