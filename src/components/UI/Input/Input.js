import React from 'react';

export default props => {
    const inputType = props.type || 'text';
    const htmlFor = `${inputType}-${Math.random()}`;

    return(
        <>
            <input
                type={inputType}
                id={htmlFor}
                onChange={props.onChange}
                defaultChecked='true'
                />
             <label htmlFor={htmlFor}>{props.label.toUpperCase()}</label>
        </>
    );
};