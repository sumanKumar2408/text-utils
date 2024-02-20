import React, {useState} from 'react'
import './TextArea.css'
const TextArea = (props) => {
    const [text, setText] = useState('')
    const [newText, setNewText] = useState('');

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setNewText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setNewText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClrClick = () => {
        setNewText("");
        setText("");
        props.showAlert("Text cleared!", "success");
    }

    const handleCopyClick = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text copied!", "success");
    }

    const handleRemoveExtraSpaceClick = () => {
        let newText = text.split(/[ ]+/);
        setNewText(newText.join(" "));
        props.showAlert("Extra space removed!", "success");
    }

    const handleEncodeClick = () => {
        let encodedValue = btoa(text);
        setNewText(encodedValue);
        props.showAlert("Text encoded!", "success");
    }

    const handleDecodeClick = () => {
        let decodedValue = atob(newText);
        setNewText(decodedValue);
        props.showAlert("Text decoded!", "success");
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
  return (
    <>
        <div className='container' style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'#042743'}}>
            <div className="mb-3 text-center text-area">
                <h2  style={{backgroundColor:props.mode==='dark'?'#042743':'white'}}>{props.heading}</h2>
                <hr/>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#121212':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="10"></textarea>
            </div>
            <div className='btn-container' style={{display:'flex', justifyContent:'space-between'}}>
                <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClrClick} >Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyClick} >Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpaceClick} >Remove Extra Space</button>
                <button className="btn btn-primary mx-2" onClick={handleEncodeClick} >Encode Text</button>
                <button className="btn btn-primary mx-2" onClick={handleDecodeClick} >Decode Text</button>
            </div>
        </div>
        <div className="container my-3"style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'#042743'}}>
            <div className='container-result'>
                <div className='text-summary'>
                    <h2 className='text-center'>Your Text Summary</h2>
                    <p><b><span className='text-danger'>{text != "" ? text.split(" ").length : 0}</span></b> Words and <b><span className='text-danger'>{text.length + " "}</span></b>Character</p>
                    <p><b><span className='text-danger'>{0.008*text.split("").length}</span></b> Minutes to read</p>
                </div>
                <div className='preview'>
                    <h2 className='text-center'>Preview</h2>
                    <p>{newText}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default TextArea;