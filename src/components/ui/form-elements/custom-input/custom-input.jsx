import PropTypes from "prop-types";

const CustomInput = (props) => {
  const { placeHolder, id, formik, changeHandler } = props;

  const handleChange = (e) => {
    if (formik && id) {
      formik.handleChange(e);
    }
    if (changeHandler) {
      changeHandler(e.target.value);
    }
  };

  return (
    <input
      placeholder={placeHolder}
      id={id}
      name={id}
      onChange={handleChange}
    />
  );
};

export default CustomInput;

CustomInput.propTypes = {
  placeHolder: PropTypes.string,
};
