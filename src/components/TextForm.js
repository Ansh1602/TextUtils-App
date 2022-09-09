import React, { useState } from 'react';




export default function TextForm(props) {

    // function countWords(str) {
    //     str = str.replace(/(^\s*)|(\s*$)/gi,"");
    //     str = str.replace(/[ ]{2,}/gi," ");
    //     str = str.replace(/\n /,"\n");
    //     return str.split(' ').length;
    // }


    function toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }

    const handleUpClick = () => {
        // console.log("Upper Case was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Upper Case!", "success");
    }
    const removeSpaces = () => {
        let newtext = text.replace(/\s+/g, ' ').trim();
        setText(newtext);
        props.showAlert("Extra Spaces Removed!", "success");
    }
    
    const handleLoClick = () => {
        // console.log("Upper Case was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lower Case!", "success");
    }
    const handleTiClick = () => {
        // console.log("Upper Case was clicked" + text);
        let newtext = toTitleCase(text);
        setText(newtext);
        props.showAlert("Converted to Title Case!", "success");

    }
    const handleClClick = () => {
        // console.log("Upper Case was clicked" + text);
        let newtext = "";
        setText(newtext);
        props.showAlert("Text Cleared!", "success");
    }
    
    const copyTxt = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }




    const [text, setText] = useState('');
    // text = "new Text"   // Wrong Way to change the state
    // setText("new Text");   // Correct Way to change the state

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className="mb-4">{props.heading}</h2>
                <div className="mb-3">
                    <textarea value={text} type="text" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8" className="form-control"></textarea>
                </div>
                <button disabled={text.length === 0} className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-2 my-2`} onClick={handleUpClick}>Convert To Upper Case</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-2 my-2`} onClick={handleLoClick}>Convert To Lower Case</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-2 my-2`} onClick={handleTiClick}>Convert To Title Case</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-2 my-2`} onClick={handleClClick}>Clear Text</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-2 my-2`} onClick={removeSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-2 my-2`} onClick={copyTxt}>Copy Text</button>
                {/* <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-2 my-2`} onClick={() => this.copyCodeToClipboard()}>Remove Text</button> */}
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                {/* <p>{countWords(text)} words and {text.length} characters.</p> */}
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minute read</p>
                <hr />
                <h2 >Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
                <hr />
            </div>
        </>
    )
}
