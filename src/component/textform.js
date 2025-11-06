import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
    }

     const hendleChange = (event) => {
        setText(event.target.value)
    }
 
    
    const [text, setText] = useState('Enter text here')

   
    return (
    <div>
        <div className='container'>
            <h3>{props.textform_heading}</h3>
           
            <div className='textareafield mt-3 mb-3'>
                 <textarea className="form-control" rows="8" id="comment" name="text" value="{text}" onChange={hendleChange}></textarea>
            </div>
           
            <button type="button" className="btn btn-success" onClick={handleUpClick}>Click To Uppercase</button>
        </div>
    </div>
  )


}




