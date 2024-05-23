import { useState }       from 'react';
import { Flex }           from '@chakra-ui/react';
import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage }     from './pages/RecipePage';

export const App = () => 
{
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <Flex width="100%" minHeight="100vh" bg="rgb(255,235,181)" justify="center">
      { selectedRecipe ?
      (
        <RecipePage recipe={selectedRecipe} onClick={setSelectedRecipe} />
      ) : (
        <RecipeListPage onClick={setSelectedRecipe} />
      )} 
    </Flex>
  )
};
