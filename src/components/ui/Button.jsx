import { Button as CButton } from '@chakra-ui/react';

export const Button = ( { onClick, ...props }) =>
{
    return (
        <CButton 
            boxShadow='lg' 
            bgColor="rgb(66, 10, 10)" 
            color="rgb(255,235,181)" 
            onClick={onClick} 
            _hover=
                {{ 
                    color: "rgb(166, 154, 154)",
                    boxShadow: "xl"
                }}
            {...props}
        >

            {props.children}
            
        </CButton>
    )
}