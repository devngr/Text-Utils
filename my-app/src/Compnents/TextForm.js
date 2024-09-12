import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
            // console.log("UpperCase was Clicked" + text);
            let newText = text.toUpperCase();   
            setText(newText);
            props.showAlert("Converted to UpperCase", "success");
    }
    const handleLoClick = ()=>{
        // console.log("UpperCase was Clicked" + text);
        let newText = text.toLowerCase();   
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleBlClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text is Cleared", "success");
    }
    const handleEsClick = ()=>{
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed", "success");
    }
    const handleCopyClick = ()=>{
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to Clipboard", "success");
    }
    const handleOnChange = (event)=>{
        console.log("Handle on Change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");    
  return (
    <>
    <div className = "container" style={{color: props.mode==='dark'?'white': '#042743'}}>
        <h3 >{props.heading}</h3>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey': 'white', color: props.mode==='dark'?'white': '#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary " onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary " onClick={handleEsClick}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary " onClick={handleBlClick}>Clear Text</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white': '#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.length} Character and {text.split(" ").length} Words</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

    </div>
    </>
  )
}
