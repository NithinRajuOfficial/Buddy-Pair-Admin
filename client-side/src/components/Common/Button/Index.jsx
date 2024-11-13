import PropTypes from "prop-types";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const CustomButton = ({ classAtbt, onClick, value, type }) => {
  const [size, setSize] = useState();

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setSize("sm");
    } else {
      setSize("md");
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Button
      ripple={true}
      size={size}
      {...(type ? { type } : {})}
      className={`${classAtbt && classAtbt}`}
      onClick={onClick}
    >
      {value}
    </Button>
  );
};
export default CustomButton;

CustomButton.propTypes = {
  classAtbt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
};
