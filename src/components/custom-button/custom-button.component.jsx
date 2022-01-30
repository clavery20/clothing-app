import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn,...otherProps})  => (
    <buttton 
      className={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`}
     {...otherProps}
     >
        {children}
    </buttton>
)
export default CustomButton;