import React, {useState} from 'react'

export default function MyUppercase(props) {

    const [text, setText] = useState('')

    const handelChange = (event) =>{
        setText(event.target.value)
    }

    const handeluppercasebtn = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
    }

    const handellowercasebtn = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
    }

    const handelcapitalizewod = (str) =>{
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }

    const handelcapitalizebtn = () =>{
       setText(handelcapitalizewod(text))
    }

    const handelClearallbtn = () => {
        let newtext = ''
        setText(newtext)
    }



  return (
    <div>
        <div className='container'>
            <p><strong>{props.uppercaseheading}</strong></p>

            <div className='textaeresec mb-4'>
                <textarea className='form-control' rows='8' placeholder='Enter Text' value={text} onChange={handelChange} id='commt' name='commt'></textarea>
            </div>

            <button type='button' className='btn btn-success me-2' onClick={handeluppercasebtn}>Click to Uppercase</button>
            <button type='button' className='btn btn-info me-2' onClick={handelcapitalizebtn}>Click to Capitalize</button>
            <button type='button' className='btn btn-primary me-2' onClick={handellowercasebtn}>Click to LowerCase</button>
            <button type='button' className='btn btn-warning' onClick={handelClearallbtn}>Click to Clear All</button>
        </div>
    </div>
  )
}
