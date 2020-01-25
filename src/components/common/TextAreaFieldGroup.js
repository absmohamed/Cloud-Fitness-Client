import React from 'react'
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextAreaFieldGroup = ({
    name, 
    placeholder,
    value,
    error, 
    info,
    onChange
    
}) => {
    return (
        <div className="form-group">
            <textarea
                className={classnames('form-control', {
                    'is-invalid': error
                })}
                placeholder={placeholder}
                name={name}
                value={value}
                // onChange allows us to type in to the inputs
                onChange={onChange}
            />
            {info && <small className="form-text">{info}</small>}
            {error && (<div className="invalid-feedback">{error}</div>)}
        </div>
    )
}

TextAreaFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired
};
export default TextAreaFieldGroup;