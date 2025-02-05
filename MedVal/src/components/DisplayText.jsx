import PropTypes from 'prop-types';

function DisplayText({ text }) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

DisplayText.propTypes = {
  text: PropTypes.string.isRequired,
};
export default DisplayText;
