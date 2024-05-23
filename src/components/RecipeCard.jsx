import { Flex, Image, Text, Heading, Box } from '@chakra-ui/react';
import { Tag } from './ui/Tag';

export const RecipeCard = ( { recipe, onClick } ) => 
{  
  return (
    <Flex 
      w="400px"
      h="700px" 
      bg="rgb(150, 144, 144)"
      borderWidth="2px" 
      borderColor="rgb(66, 10, 10)" 
      borderRadius="lg"
      overflow="hidden"
      direction="column"
      align="center"
      boxShadow="lg"
      cursor={'pointer'} 
      onClick={ () => onClick(recipe) }
      _hover=
        {{ 
          borderColor: "rgb(122, 97, 22)", 
          boxShadow: "xl", 
          bg: "rgb(166, 154, 154)"
        }}
    >

        <Image 
          src={ recipe.image } 
          alt={ recipe.label } 
          w="100%" 
          h="300px"
          boxShadow='md' 
        />

        <Flex gap ={4}>
          { recipe.mealType.map((type) => 
          ( 
            <Text key={type} color="rgb(255,235,181)">
              { type.toUpperCase() }
            </Text> 
          ))}
        </Flex>
        
        <Heading fontSize="1.3em" color="rgb(66, 10, 10)" textShadow="0.5px 0.5px rgb(255,235,181)">
          { recipe.label }
        </Heading>
        
        <Text textTransform="capitalize" fontSize="1.2em" color="rgb(255,235,181)">
          { recipe.dishType }
        </Text>

        <Box 
          mt="10px" 
          width="90%" 
          overflow="hidden" 
          border="2px"
          borderColor="rgb(66, 10, 10)"
          borderRadius="lg" 
          boxShadow='md' 
        >

          <Flex m="10px" justify="space-around">

            <Flex
              padding="4px"
              width="40%" 
              height="max-content" 
              direction="column"
              align="center"
              border="1px" 
              borderColor="rgb(255,235,181)"
              borderRadius="lg"
            >

              <Text color="rgb(255,235,181)">
                DIET
              </Text>

              {recipe.dietLabels.map((dietLabel) => 
                ( 
                  <Tag 
                    key={dietLabel}  
                    label={dietLabel} 
                    bgcolor="rgb(158, 211, 255)" 
                    color="rgb(12, 37, 59)"
                  /> 
                ))}

            </Flex>

            <Flex
              padding="4px"
              width="40%" 
              height="max-content"
              direction="column"
              align="center"
              border="1px"
              borderColor="rgb(255,235,181)"
              borderRadius="lg"
            >

              <Text color="rgb(255,235,181)">
                CAUTIONS
              </Text>

              {recipe.cautions.map((caution) => 
                ( 
                  <Tag 
                    key={caution} 
                    label={caution} 
                    bgcolor="rgb(235, 162, 182)" 
                    color="rgb(87, 12, 33)" 
                  /> 
                ))}

            </Flex> 

          </Flex>

          <Flex 
            direction="row" 
            justify="space-around" 
            align="center"
            borderTop="1px" 
            borderColor="rgb(66, 10, 10)" 
          >

            { recipe.healthLabels.includes("Vegetarian") &&  
              <Tag 
                label="Vegetarian" 
                bgcolor="rgb(166, 255, 210)" 
                color="rgb(8, 51, 29)" 
              />
            }
            { recipe.healthLabels.includes("Vegan") &&  
              <Tag 
                label="Vegan" 
                bgcolor="rgb(166, 255, 210)" 
                color="rgb(8, 51, 29)" 
              />
            }
            { recipe.healthLabels.includes("Pescatarian") &&  
              <Tag
                label="Pescatarian" 
                bgcolor="rgb(166, 255, 210)" 
                color="rgb(8, 51, 29)" 
              />
            }

          </Flex>

        </Box>

    </Flex>
  );
};



