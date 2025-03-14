import React, {useState, useContext} from "react";
import { GlobalContext } from '../context/GlobalState';

export function Entry({entrie}){
    const { deleteEntry } = useContext(GlobalContext);

    const [modal, setModal] = useState(false);
    
    const toggleModal = () => {
        setModal(!modal)
    }

    return(
    <>    
        <li onClick={toggleModal}>
            Title: {entrie.title} User: {entrie.account} Date: {entrie.date} <button onClick={() => deleteEntry(entrie.id)} className="delete-btn">x</button>
        </li>
        {modal && (
        <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
                <header>
                    <div><b>Title: </b>{entrie.title}</div>
                    <div><b>Date: </b>{entrie.date}</div>
                    <div><b>User: </b>{entrie.account}</div>
                </header>
                <br />
                <b>Description: </b>
                <br />
                <p>{entrie.description}</p>
                <div className="btn-div">
                    <button className="close-modal" onClick={toggleModal}>x</button>
                </div>
            </div>
        </div>
        )}
    </>
    )
}
