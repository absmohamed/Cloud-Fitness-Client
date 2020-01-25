import React from 'react'
import classnames from 'classnames';
import PropTypes from 'prop-types';

const InputGroup = ({
    name, 
    placeholder,
    value,
    error, 
    icon,
    type,
    onChange
    
}) => {
    return (
        <div className="input-group">
            <div className="icon">
                <span>
                <i className={icon} />
                </span>
            </div>
            <input
                className={classnames('form-control', {
                    'is-invalid': error
                })}
                placeholder={placeholder}
                name={name}
                value={value}
                // onChange allows us to type in to the inputs
                onChange={onChange}
            />
            {error && (<div className="invalid-feedback">{error}</div>)}
        </div>
    )
}

InputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
InputGroup.defaultProps = {
    type:'text'
}

export default InputGroup;