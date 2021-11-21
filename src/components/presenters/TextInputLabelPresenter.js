import React, { useState, useEffect } from "react";
import {StringIsAlpha, StringIsNumeric, StringIsMixed} from "./StringPresenters";

export const TextInputLabelPresenter = (props) => {    
    return (
        <div>
            <input name={"input"} value={props.input} onChange={props.handleInputChange}/>
            { props.input.length > 0 && (
                <div>
                    {/^[A-Za-z \.\?]+$/.test(props.input) && <StringIsAlpha label={props.input}/>}
                    {(/^\d+$/.test(props.input)) && <StringIsNumeric label={props.input} />}
                    {!(/^[A-Za-z \.\?]+$/.test(props.input) || /^\d+$/.test(props.input)) && <StringIsMixed label={props.input}/>}
                </div>
            )
        }
        </div>
    )
}