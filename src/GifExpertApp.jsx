// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import { AddCategory, GifGrid, ButtonDelete } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }


    const onDeleteCategory = () => {
        if (categories.length == 0) return;
        const newcategories = categories.slice(1);
        setCategories(newcategories);
    }

    const onDeleteList = () => {
        setCategories([]);
    }

    return (
        <>
        
            <h1>Gif Expert App</h1>

            <AddCategory onNewCategory={(value) => onAddCategory(value)}/>

            <div className='center'>
                <ButtonDelete onClick={onDeleteList} textButton={'Eliminar Busquedas'}/>
                <ButtonDelete onClick={onDeleteCategory} textButton={'Eliminar Busqueda Reciente'}/>
            </div>

            {
                categories.map((category) => (
                    < GifGrid key={category} category={category} />
                ))
            }

        </>
    )
}
