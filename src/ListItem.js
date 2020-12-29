import React from 'react';
import './ListItems.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function ListItem(props) {
    const items = props.items;
    const listItems = items.map(item =>
        {
            return <div className='list' key={item.key}>
                <p>
                    <input 
                    type='text' 
                    id={item.key} 
                    value={item.text}
                    onChange={
                        (e) => {
                            props.setUpdate(e.target.value, item.key)
                        }
                    }/>
                    <span>
                        <DeleteForeverIcon 
                        onClick={() => props.deleteItem(item.key)} />
                    </span>
                </p>
            </div>
        })
    return (
        <div>
           {listItems}
        </div>
    )
}
