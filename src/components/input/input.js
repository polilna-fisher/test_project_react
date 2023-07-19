import React from 'react';

const Input = ({ error, ...props }) => {
    return (
        <div>
            <input className="form-control new-post-label" { ...props }/>
            {
                !!error && <span style={{ color: 'orange' }}>{error}</span>
            }
        </div>
    );
};

export default Input;