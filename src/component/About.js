import React, {useState} from 'react'

export default function About(props) {

    const [myStyle, setMyStyle] = useState({backgroundColor: 'black', color: 'white', padding: '20px', marginTop: '25px', borderRadius: '15px'})

    const [btntext, setBtnText]= useState('Active Light Mode')
    const [btnStyle, setBtnStyle] = useState({backgroundColor: 'black', color: 'white'})
    
    const toggleStyle = () => {
        if(myStyle.color === 'white'){
            setMyStyle({color: '#fff', backgroundColor: '#666', padding: '20px', marginTop: '25px', borderRadius: '15px'})
            setBtnText('Active Dark Mode')
            setBtnStyle({backgroundColor: '#666', color: '#fff'})
        }

        else{
            setMyStyle({color: 'white', backgroundColor: '#000', padding: '20px', marginTop: '25px', borderRadius: '15px'})
            setBtnText('Active Light Mode')
             setBtnStyle({backgroundColor: '#000', color: '#fff'})
        }
    }


  return (
    <div className='container mt-5'>
        <h3>{props.theme_title}</h3>
        <div className='themebox' style={myStyle}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
           
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <button type='button' className='btn btn-success me-2 mt-3' onClick={toggleStyle} style={btnStyle}>{btntext}</button>

    </div>
  )
}
