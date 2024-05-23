import { Flex } from '@chakra-ui/react';
import { RecipeCard } from './RecipeCard';

export const RecipeCardList = ( { recipes, onClick } ) =>
{
    return(
        <Flex
            gap={10}
            w="100%"
            mb="40px"
            flexWrap="wrap"
            justify="center"
            alignItems="center"
        >

            {recipes.map((recipes) => 
                ( 
                    <RecipeCard 
                        key={recipes.recipe.id} 
                        recipe={recipes.recipe} 
                        onClick={onClick} 
                    /> 
                ))}

        </Flex>
    );
};