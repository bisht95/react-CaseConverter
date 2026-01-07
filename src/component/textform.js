import React, {useState} from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('')

    const handelChange = (event) => {
        setText(event.target.value)
    }

    const handleUppercasebtn = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
    }

    const handellowercasebtn = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
    }

    const handelClearallbtn = () => {
        let newtext = ''
        setText(newtext)
    }

    const handelcapitalizewod = (str) => {
        return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
    }

    const handelcapitalizebtn = () => {
       setText(handelcapitalizewod(text))
    }

  return (
    <div className='container mt-5' style={{color: props.mode==='dark'?'white':'#000'}}>
        <p>{props.textarea_lable}</p>

        <div className='textaeresec mb-4'>
            <textarea className='form-control' rows='8' placeholder='Enter Text' value={text} onChange={handelChange} id='commt' name='commt'></textarea>
        </div>

        <button type='button' className='btn btn-success me-2' onClick={handleUppercasebtn}>Click to Uppercase</button>
        <button type='button' className='btn btn-info me-2' onClick={handelcapitalizebtn}>Click to Capitalize</button>
        <button type='button' className='btn btn-primary me-2' onClick={handellowercasebtn}>Click to LowerCase</button>
        <button type='button' className='btn btn-warning' onClick={handelClearallbtn}>Click to Clear All</button>

        <div className='mt-3'>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.replace(/\s+/g, '').length} characters</p>
        </div>
    
    </div>
  )
}
