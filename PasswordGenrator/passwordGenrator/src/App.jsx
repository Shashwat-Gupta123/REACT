import { useState,useCallback,useEffect,useRef} from 'react'
import './App.css'
function App() {
  const [Password,SetPassword]=useState("");
  const [NumberAllowed,setNumberAllowed]=useState(false);
  const [CharacterAllowed,setCharacterAllowed]=useState(false);
  const [LengthAllowed,setLengthAllowed]=useState(8);
  // useRef
  const PasswordRef=useRef(Password);
  const genratePassWord=useCallback(()=>{
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(NumberAllowed==true) str+="0123456789";
    if(CharacterAllowed==true) str+="!@#$%^&**()";
    let pass="";
    for(let i=1;i<=LengthAllowed;i++){
      let char_idx=Math.floor(Math.random()*(str.length)+1);
      pass+=str.charAt(char_idx);
    }
    SetPassword(pass);
  },[NumberAllowed,CharacterAllowed,LengthAllowed,SetPassword])
  const copyClipBoard=useCallback(()=>{
    // for better user experince text selection 
    PasswordRef.current?.select() // can be null value is password so use ?
    // also we can select some part of it
    PasswordRef.current?.setSelectionRange(0,5) // to do this abbove line is must 
    window.navigator.clipboard.writeText(Password)

  },[Password])
useEffect(()=>{genratePassWord()},[LengthAllowed,CharacterAllowed,NumberAllowed,genratePassWord])
  return (
    <div>
    <div className='h-[250px] w-full bg-blue-300'>
      <div className="inline-flex relative top-4 left-[300px]">
        <input className='h-[50px] w-[900px] rounded px-[10px]' type="text" value={Password} placeholder='Password' readOnly ref={PasswordRef} ></input>
      <button className='h-[50px] w-[70px] rounded bg-red-400  ' onClick={copyClipBoard}>COPY</button>
      </div>
      <div className='relative top-4 left-[330px]'>
        <input type="range" min={0} max={20} value={LengthAllowed} id="range" onChange={(e)=>{setLengthAllowed(e.target.value)}} className='w-[100px] h-[50px] relative top-[26px]' ></input>
        <label htmlFor="range" className='w-[100px] h-[50px] relative top-[10px] left-[10px]'>Length({LengthAllowed})</label>
        <input id="default-checkbox" type="checkbox" value={NumberAllowed} onChange={() => setNumberAllowed(!NumberAllowed)} className="w-[20px] h-[20px] relative left-[190px] top-[8px] "></input>
        <label htmlForfor="default-checkbox" className="text-sm font-medium text-black-500 relative left-[80px] top-[5px]">Numbers</label>

        <input id="default-checkbox2" type="checkbox" value={CharacterAllowed} onChange={() => setCharacterAllowed(!CharacterAllowed)} className="w-[20px] h-[20px] relative left-[270px] top-[8px] "></input>
        <label htmlForfor="default-checkbox2" className="text-sm font-medium text-black-500 relative left-[160px] top-[5px]">Charaters</label>
      </div>
    </div>
    <h1>PASSWORD GENRATOR</h1>
    <p>application of react hook usestate and usecallblack and useEffect  and useref</p>
    </div>
     
  )
}

export default App
