import React from "react";
import { ItemList } from "./ItemList";


export const Content = ({items, handleCheck, handleDelete}) => {

    
    
    return(
        <main>
            {(items.length) ? (
            <ItemList 
            items = {items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            />
            ):(
                <p>Your List is Empty</p>
            )}
        </main>
    )
}