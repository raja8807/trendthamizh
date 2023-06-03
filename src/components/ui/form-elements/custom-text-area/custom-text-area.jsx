import PropTypes from "prop-types";

const CustomTextArea = (props) => {
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
    <textarea
      id={id}
      name={id}
      rows="4"
      cols="50"
      placeholder={placeHolder}
      onChange={handleChange}
    ></textarea>
  );
};

export default CustomTextArea;

CustomTextArea.propTypes = {
  changeHandler: PropTypes.func,
  placeHolder: PropTypes.string,
};
