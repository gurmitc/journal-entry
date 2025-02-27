import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import { Entry } from "./Entry";

export function EntryList(){
    const {entries} = useContext(GlobalContext);


    return(
        <div>
            <h2>Entries</h2>
            <div className ={(entries.length > 1) && "scroll"}>
            <ul className="list">
                {entries.map(entrie => (<Entry key={entrie.id} entrie={entrie} />)
                )}
            </ul>
            </div>
        </div>
    )
}