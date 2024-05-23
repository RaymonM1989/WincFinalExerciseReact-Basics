import { InputGroup, Input, InputRightElement } from '@chakra-ui/react';

export const TextInput = ( { placeholder, width, onChange, addon }) =>
{
    return (
        <InputGroup 
            m="20px" 
            size={{ base: "sm", md: "lg" }} 
            width={width}
            boxShadow='lg'
        >

            <Input 
                placeholder={placeholder} 
                _placeholder={{ opacity: 0.6, color: "rgb(66, 10, 10)" }} 
                color="rgb(66, 10, 10)"
                borderWidth="2px"
                borderColor="rgb(66, 10, 10)"
                focusBorderColor="rgb(66, 10, 10)"
                onChange={onChange} 
            />
            <InputRightElement mr="10px" h="full">
                {addon}
            </InputRightElement>
            
        </InputGroup>
    );
};