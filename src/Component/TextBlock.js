import React, {useState} from 'react'

export default function TextBlock(provs) {
  
  const[text, setText] = useState('');
  const[buttonText, setButtonText] = useState('Convert to UpperCase');
  
  const convertUpper = (event)=> {
    if(text === text.toUpperCase()) {
      setButtonText("Convert to UpperCase");
      setText(text.toLocaleLowerCase());
    }else {
      setButtonText("Convert to LowerCase");
      setText(text.toUpperCase());
    }
    /* setText(text.toUpperCase()); */
  }
  const clear = ()=> {
    setText('');
  }

  const onCheng = (event)=> {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-3">

        <h1>{provs.heading}-</h1>
        <div class="form-floating">

          <textarea class="form-control" placeholder="Leave a comment here" id="myBox" rows={8} value={text} onChange={onCheng}></textarea>
          <label>{provs.Text}</label>

          <button className='btn btn-primary my-3' onClick={convertUpper}>{buttonText}</button>
          <button className='btn btn-primary my-3 mx-3' onClick={clear}>{provs.clearText}</button>

          <h1 className='my-2'>Your text summary:</h1>
          <p>{text.split(' ').length-1} Words and {text.length} characters</p>
          <p>{(0.008*text.length)} Minuts read</p>
          <h3>Preview:</h3>
          <p>{text}</p>

        </div>
      </div>
    </>
  )
}
