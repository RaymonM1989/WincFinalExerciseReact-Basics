import { useState } from 'react';
//import { Checkbox as CCheckbox } from '@chakra-ui/react';

export const Checkbox = ( { label }) =>
{
    const [isChecked, setIsChecked] = useState(false);

    // const isVegan =  (recipes) =>
    // {
    // return recipes.recipe.healthLabels.includes("Vegan");
    // }


    const checkHandler = () =>
        {
            setIsChecked(!isChecked)
            //{ id === "Vegan" ? (setLabelFilteredRecipes(isVegan))}
        };
    
    return (
        <>
            <input type="checkbox" id={label} checked={isChecked} onChange={checkHandler} />
            <label htmlFor={label}>{label}</label>
            <p>{isChecked ? "Checked" : "Unchecked"}</p>
        </>
    )
}