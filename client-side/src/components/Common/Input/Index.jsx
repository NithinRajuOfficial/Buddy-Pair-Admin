import PropTypes from "prop-types";
import { Input, Tooltip } from "@material-tailwind/react";
import { PiExclamationMarkBold } from "react-icons/pi";

const CustomInputTag = ({ type, label, registering, errors }) => {
  return (
    <div className="relative">
      <Input type={type} size="lg" label={label} {...registering}/>
      {errors && (
        <Tooltip
          content={errors?.message}
          placement="right"
          className="bg-gray-300 text-red-500 tooltip-custom"
        >
          <span className="absolute top-3 right-2 bg-gray-300 text-red-500 p-1 rounded-full cursor-pointer">
            <PiExclamationMarkBold />
          </span>
        </Tooltip>
      )}
    </div>
  );
};

export default CustomInputTag;

CustomInputTag.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  registering: PropTypes.object.isRequired,
  errors: PropTypes.object,
};