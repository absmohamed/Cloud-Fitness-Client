import React from 'react'
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
    name, 
    placeholder,
    value,
    label,
    error, 
    info,
    type,
    onChange,
    disabled
    
}) => {
    return (
        <div className="form-group">
            <input
                type={type}
                className={classnames('form-control', {
                    'is-invalid': error
                })}
                placeholder={placeholder}
                name={name}
                value={value}
                // onChange allows us to type in to the inputs
                onChange={onChange}
                disabled={disabled}
            />
            {info && <small className="form-text">{info}</small>}
            {error && (<div className="invalid-feedback">{error}</div>)}
        </div>
    )
}

TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string
}
// So basically if we don't pass it in, what will default be. We want it to be text by default
TextFieldGroup.defaultProps = {
    type: 'text'
}

export default TextFieldGroup;