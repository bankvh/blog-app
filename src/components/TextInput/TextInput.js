import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';

function TextInput({
  label, value, setValue, error, placeholder, textarea, message,
}) {
  const onTextChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="text-input-container">
      <label htmlFor={label} className="label">
        {label}
      </label>

      <div className="input-container">
        { textarea
          ? (
            <>
              <textarea
                className={`text-area input ${error && 'error'}`}
                value={value}
                placeholder={placeholder}
                onChange={onTextChange}
              />
              {error && <span className="material-icons error">close</span>}
            </>
          )
          : (
            <>
              <input
                type="text"
                className={`text-input input ${error && 'error'}`}
                value={value}
                placeholder={placeholder}
                onChange={onTextChange}
              />
              {error && <span className="material-icons error">close</span>}
            </>
          )}
      </div>
      <p className={`message ${error && 'error'}`}>{error || message}</p>
    </div>
  );
}

TextInput.defaultProps = {
  error: '',
  message: '',
  placeholder: '',
  textarea: false,
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  error: PropTypes.string,
  message: PropTypes.string,
  placeholder: PropTypes.string,
  textarea: PropTypes.bool,
};

export default TextInput;
