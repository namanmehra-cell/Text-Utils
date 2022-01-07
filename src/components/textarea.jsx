import React ,{useState}from "react";
import './App.css';

export default function TextArea(props){


  const [text,settext] = useState("")
    
    function textChange(event){
      settext(event.target.value)

    }
    function button(){
      settext(text.toUpperCase())
      props.showAlert("Converted to Upper case")

    }
    function button5(){
      var lines = document.getElementById("textAreaExample1")
      lines.select();
      lines.setSelectionRange(0,999999);
      navigator.clipboard.writeText(lines.value);
      document.getSelection().removeAllRanges()
      props.showAlert("Text copied")
    }
    function button2(){
      settext(text.toLowerCase())
      props.showAlert("Converted to lower case")
    }
    function button3(){
      settext(" ");
      props.showAlert("Text Cleared")
    }
    function button4(){
    
      settext(function reverse(text){
        let o = ""
        for(var i = text.length-1;i>=0;i--){
          o = o+text[i]
        }
        return o;
      })
      props.showAlert("Text reversed")
    }
    return <div>
    <div class="form-outline" style={{color:props.mode==='light'?'black':'white'}}>
    <h1>Type</h1>
  <textarea  style={{backgroundColor:"tomato"}} value={text} onChange={textChange} class="form-control" id="textAreaExample1" rows="4"></textarea>
  <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" 
  style={{display:"inline-block"}} 
  onClick={button}>UPPER CASE
  </button> 
  <button disabled={text.length===0} onClick={button2} className="btn btn-primary my-2 mx-2">
  lower case</button>
  <button disabled={text.length===0} onClick={button3} className="btn btn-primary my-2 mx-2">
  Clear text</button>
  <button disabled={text.length===0} onClick={button4} className="btn btn-primary my-2 mx-2">
  Reverse Case</button>
  <button disabled={text.length===0} onClick={button5} className="btn btn-primary my-2 mx-2">
  Copy text</button>
  
</div>
    <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").filter(function(e){return e.length !==0}).length} words
     and {text.length} characters</p>
     <p>It will take {0.008*text.split(" ").filter(function(e){return e.length !==0}).length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter some text in text box to preview"}</p>
    </div>

    
    </div>
  
}