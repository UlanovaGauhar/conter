import React from 'react';

const Button = ({ children, variant, onClick, ...props  }) => {
    return (
        <div>
            <button onClick={onClick} {...props} style={variant === 'plu25s' || variant === 'plu50s' ? { background:'none', borderColor: 'grey'} : {color: 'white', backgroundColor: ' rgba(29, 191, 115, 1)', border: 'none'}}>
                {children}
            </button>
        </div>
    );
};

export default Button;

