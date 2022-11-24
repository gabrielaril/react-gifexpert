
import { useState } from 'react'
import { AddCategory, GifGrid } from './componets';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Drangon Ball']);

    const onAddCategory = (newCategory) => {
        // console.log(newCategory);
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }


    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />
            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}
