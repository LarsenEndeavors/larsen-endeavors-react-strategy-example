import React, {useState} from 'react';
import { TextInputLabelPresenter } from '../presenters/TextInputLabelPresenter';

export const TextInputLabelContainer = (props) => {
    const [name, setName] = useState("");

    const handleNameChange = ({target}) => {
        setName(target.value);
    }
    
    return (
        <TextInputLabelPresenter input={name} handleInputChange={handleNameChange}/>
    )
}