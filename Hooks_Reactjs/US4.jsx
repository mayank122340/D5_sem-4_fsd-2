import React, {useState} from "react";

function US4() {
    const [hideText, setHide] = useState('ReactJS Hooks')
    const [buttonText, setButtontext] = useState('Hide')

    function showHide() {
        if (buttonText === 'Hide') {
            setButtontext('Show')
            setHide('')
        } else {
            setButtontext('Hide')
            setHide('ReactJS Hooks')
        }
    }

    return(
        <>
            <button onClick={showHide}>{buttonText}</button>
            <h2>{hideText}</h2>
        </>
    )
} export default US4