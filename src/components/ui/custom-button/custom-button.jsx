import PropsTypes from 'prop-types'

const CustomButton = (props) => {
  const { clickHandler, children } = props;

  const handleClick = (e) => {
    e.preventDefault()
    if (clickHandler) {
      clickHandler(e);
    }
  };

  return <button type='button' onClick={handleClick}>{children}</button>;
};

export default CustomButton

CustomButton.propTypes = {
    clickHandler : PropsTypes.func,
    children:PropsTypes.string
}