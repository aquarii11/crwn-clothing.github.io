import React from 'react';
import {CustomButtonContainer} from './custom-button.styles';

const CustomButton =({children,...props}) =>
{
	//console.log('isGoogleSignIn',isGoogleSignIn)
	return(
				<CustomButtonContainer {...props}>
		           {children}
		       </CustomButtonContainer>
       )
	
}

export default CustomButton;