import PropTypes from 'prop-types'
import {  useSelector } from 'react-redux';

export const FindContacts = ({ onInput }) => {
  const {
    filter: { filter },
  } = useSelector(state => state);
  // console.log(filter);

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        placeholder="Enter find name"
        value={filter}
        onChange={onInput}
      />
    </div>
  );
};

FindContacts.propTypes = {
  onInput: PropTypes.func.isRequired,
};