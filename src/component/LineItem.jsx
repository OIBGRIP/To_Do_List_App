import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export const LineItem = ({item,handleCheck,handleDelete}) => {
    return (
        <li className="item" key={item.id}>
                        <input
                            type="checkbox"
                            onChange={() => handleCheck(item.id)}
                            checked = {item.checked}
                            key={item.id}
                        />

                        <label
                            style={(item.checked) ? 
                            {textDecoration: "line-through"} : null}
                            onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>

                        <button>
                        <FaTrashAlt 
                            role="button"
                            onClick={() => handleDelete(item.id)}
                            tabIndex= "0"
                            aria-label={`Delete ${item.item}`}
                        />
                        </button>
                    </li>
    )
}