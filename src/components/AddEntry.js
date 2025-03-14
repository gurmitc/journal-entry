import React, {useState, useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }


export function AddEntry(){
    const accountList = ["User 1", "User 2", "User 3", "User 4"]
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [account, setAccount] = useState('User 1')
    const [currentDate, setCurrentDate] = useState(getDate());

    const { addEntry } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
    
        const newEntry = {
          id: Math.floor(Math.random() * 100000000),
          date: currentDate,
          account,
          title,
          description
        }
    
        addEntry(newEntry);
      }

    return(
        <div>
        <h2>New Entry</h2>
        <form onSubmit={onSubmit}>
            <div>
                <label>User</label>
                <select onChange={(e) => setAccount(e.target.value)} className="user-selection">
                {accountList.map(
                    (account) => {
                    return <option value={account}>{account}</option>;
                    }
                )}
                </select>
            </div>
            <div className="form-control">
                <label>Title</label>
                <input type="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter text..."/>
            </div>
            <div className="form-control">
                <label>Description</label>
                <textarea type="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter text..."></textarea>   
            </div>
            <div>
                <button className="btn">Submit</button>
            </div>
        </form>
        </div>
    )
}