import React, {useContext} from "react";
import { GlobalContext } from '../context/GlobalState';

export function Entry({entrie}){
    const { deleteEntry } = useContext(GlobalContext);

    return(
        
        <li>
            User: {entrie.account}<br/>Title: {entrie.title}<br/>Description: {entrie.description}<button onClick={() => deleteEntry(entrie.id)} className="delete-btn">x</button>
        </li>
    )
}
