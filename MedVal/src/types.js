import PropTypes from 'prop-types';

export const userType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    role: PropTypes.oneOf(['user', 'admin']).isRequired,
});