import React ,{useState}from 'react'


export default function TextForm(props) {

    const  [text,setText] = useState("");

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleUpCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    const handleLowCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }

    const handleClear = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Cleared the text","success");
    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text is copied","success");
    }

    const handleSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Spaces are removed","success");
    }

    const handleReverse =()=>{
        let arr = text.split('');
        let rev = arr.reverse();
        let joins = rev.join('');
        setText(joins);
        props.showAlert("Text is reversed","success");
    }

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}}id="myBox" rows="7"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpCase}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowCase}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpaces}>Remove Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverse}>Reverse string</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
