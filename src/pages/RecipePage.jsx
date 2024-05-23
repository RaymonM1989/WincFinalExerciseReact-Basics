import { useEffect } from 'react'
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import { Tag }    from '../components/ui/Tag';
import { Button } from '../components/ui/Button';

export const RecipePage = ( { recipe, onClick } ) => {

  //Scroll to top when opening a Recipe Page 
  useEffect(() => 
  {
    window.scrollTo(0, 0)
  }, [])

  return (

    <Flex
      m="20px 0px"
      pb="20px" 
      direction="column" 
      align="center" 
      width="90%"
      bg="rgb(150, 144, 144)"
      borderRadius="xl"
    >
      
      <Heading 
        mt="20px" 
        color="rgb(66, 10, 10)" 
        textShadow="0.5px 0.5px rgb(255,235,181)"
      >
        { recipe.label }
      </Heading>

      <Box 
        m="20px 0px"
        width="100%"
        height="30vh"
        bgImage={ recipe.image }
        bgPosition="center"
        bgSize="cover"
        boxShadow='inset 0 2px 20px 4px rgba(0, 0, 0, 0.2)'
      />

      <Box 
        mt="10px" 
        width="95%" 
        overflow="hidden" 
        border="2px"
        borderColor="rgb(66, 10, 10)"
        borderRadius="xl" 
        boxShadow='md' 
      >

        <Flex 
          direction={{ base: "column", sm: "row" }}  
          gap={{ base: "0px", sm: "20px" }}
          align="center" 
          justify="center"
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

        <Flex m="20px" justify="space-between" direction="row" wrap="wrap" gap="20px">

          <Flex
            padding="4px"
            width={{ base: "100%", lg: "30%" }} 
            height="max-content" 
            direction="column"
            align="center"
            border="2px" 
            borderColor="rgb(255,235,181)"
            borderRadius="lg"
            textAlign="center"
          >

            <Flex p="20px" w="100%" direction="row" justify="space-around">
              <Text m="20px" textTransform="capitalize" color="rgb(255,235,181)">
                DISH TYPE:<br/> {recipe.dishType} <br/><br/>
                MEAL TYPE:<br/> {recipe.mealType}
              </Text>
              <Text m="20px" color="rgb(255,235,181)">
                COOKING TIME:<br/> {recipe.totalTime} <br/><br/>
                SERVINGS:<br/> {recipe.yield}
              </Text>
            </Flex>
   
            <Flex p="20px" w="100%" borderTop="2px" borderColor="rgb(255,235,181)" direction="column" align="center">
              <Text mb="20px" color="rgb(255,235,181)">
                INGREDIENTS:
              </Text>

              {recipe.ingredientLines.map((ingredients) => 
                ( 
                  <Text 
                    key={ingredients}  
                    color="rgb(255,235,181)"
                  >
                    {ingredients}
                  </Text> 
                ))
              }
            </Flex>

          </Flex> 

          <Flex
            order={{ base: "3", lg: "2" }}
            padding="4px"
            width={{ base: "100%", lg: "30%" }} 
            height="max-content" 
            direction="column"
            align="center"
            border="2px" 
            borderColor="rgb(255,235,181)"
            borderRadius="lg"
            textAlign="center"
          >

            <Text m="20px" color="rgb(255,235,181)">
              Energy: { Math.round(recipe.totalNutrients.ENERC_KCAL.quantity * 100) / 100} kcal <br/>
              Protein: { Math.round(recipe.totalNutrients.PROCNT.quantity * 100) / 100} g <br/>
              Fat: { Math.round(recipe.totalNutrients.FAT.quantity * 100) / 100} g <br/>
              Carbs: { Math.round(recipe.totalNutrients.CHOCDF.quantity * 100) / 100} g <br/>
              Cholesterol: { Math.round(recipe.totalNutrients.CHOLE.quantity * 100) / 100} mg <br/>
              Sodium: { Math.round(recipe.totalNutrients.NA.quantity * 100) / 100} mg
            </Text>
              
          </Flex> 
            
          <Flex
            order={{ base: "2", lg: "3" }}
            padding="4px"
            width={{ base: "100%", lg: "30%" }} 
            height="max-content"
            direction="column"
            align="center"
            border="2px"
            borderColor="rgb(255,235,181)"
            borderRadius="lg"
          >

            
              <Text pt="20px" color="rgb(255,235,181)">
                CAUTIONS
              </Text>

              <Flex p="20px" w="100%" borderBottom="2px" borderColor="rgb(255,235,181)" direction="row" wrap="wrap" gap={4} justify="center">

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

              <Text pt="20px" color="rgb(255,235,181)">
                DIET
              </Text>

              <Flex p="20px" w="100%" borderBottom="2px" borderColor="rgb(255,235,181)" direction="row" wrap="wrap" gap={4} justify="center">

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

            <Text pt="20px" color="rgb(255,235,181)">
              HEALTH LABELS
            </Text>

            <Flex p="20px" w="100%" direction="row" wrap="wrap" gap={2} justify="center">

              {recipe.healthLabels.map((healthLabel) => 
                ( 
                  <Tag 
                    key={healthLabel}  
                    label={healthLabel} 
                    bgcolor="rgb(166, 255, 210)" 
                    color="rgb(8, 51, 29)"
                  /> 
                ))}

            </Flex>

          </Flex>

        </Flex> 

      </Box> 

      <Button mt="20px" onClick={() => onClick()}>Find Another Recipe</Button>

    </Flex>
  );
};
