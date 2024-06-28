import React from 'react';
import { Link } from 'react-router-dom';

const SecondaryBtn = ({path, type, variant, onClick, children}) => {
    return (
        <Link to={path} className='secondaryBtn'>
            <button type={type ? type : "button"} variant={variant} onClick={onClick}>{children}</button>
        </Link>
    );
};

export default SecondaryBtn;
