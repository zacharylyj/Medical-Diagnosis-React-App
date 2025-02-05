import PropTypes from 'prop-types';

function TextInput({ onTextChange }) {
  const handleChange = (event) => {
    onTextChange(event.target.value);
  };

  return (
    <input type="text" onChange={handleChange} placeholder="Enter text here" />
  );
}
TextInput.propTypes = {
  onTextChange: PropTypes.string.isRequired,
};
export default TextInput;
