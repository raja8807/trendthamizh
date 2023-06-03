import PropTypes from "prop-types";

const CustomSelect = (props) => {
  const { options, changeHandler, id, formik } = props;

  const handleChange = (e) => {
    if (formik && id) {
      formik?.setFieldValue(id, e.target.value);
    }
    if (changeHandler) {
      changeHandler(e.target.value);
    }
  };

  return (
    <select name="cars" id="cars" onChange={handleChange}>
      {options?.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;

CustomSelect.propTypes = {
  options: PropTypes.array,
  changeHandler: PropTypes.func,
};
