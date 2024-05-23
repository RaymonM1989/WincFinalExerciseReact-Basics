import { useState }       from 'react';
import { data }           from '../utils/data';
import { Flex, Heading }  from '@chakra-ui/react';
import { SearchIcon }     from '@chakra-ui/icons'
import { TextInput }      from '../components/ui/TextInput';
import { RecipeCardList } from '../components/RecipeCardList';

export const RecipeListPage = ( { onClick } ) => 
{
  const [searchField, setSearchField] = useState("");

  const matchedRecipes = data.hits.filter((recipe) =>
  {
    return recipe.recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) =>
  {
    setSearchField(event.target.value);
  };

  return (
    
    <Flex 
      mt="20px" 
      direction="column" 
      align="center" 
      width="90%"
    >

      <Heading color="rgb(66, 10, 10)">
        Recipe Picker
      </Heading>

      <TextInput 
        placeholder="Filter Recipes" 
        width="80%"
        onChange={handleChange} 
        addon={<SearchIcon color="rgb(66, 10, 10)" />}
      />

      <RecipeCardList onClick={onClick} recipes={matchedRecipes} />

    </Flex>
  );
};