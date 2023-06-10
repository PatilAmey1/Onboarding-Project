import React,{createContext, useEffect} from 'react';
import { useState,useRef } from 'react';

export const CardContext=createContext();

export const CardProvider=({children})=>{
    const [Count,setCount]=useState(60);
    const [Length,setLength]=useState(false);
    const [ResetButton,setResetButton]=useState(false);
    const[user,setUserdetails]=useState({FirstName:"",LastName:"",radio:"",Number:""})
    //https://productdata-exf8.onrender.com/userData
    const tracingId=useRef(null);
    useEffect(()=>{
         if(Count===0){
            clearInterval(tracingId.current)
         }
         if(Count<=50){
            setResetButton(true);
         }else{
            setResetButton(false);
         }
    },[Count])
    
    const GetName=(e)=>{
    //     console.log(e.target.defaultValue);
    //     console.log(e.target.type);
    //    const {checked,type,name}=e.target;
    //    console.log(checked);
    //    console.log(type);
    //    console.log(name);
        const {name,value,defaultValue,type}=e.target;
        if(type==="radio"){
             setUserdetails({...user,radio:defaultValue})
        }else{
            setUserdetails({...user,[name]:value});
        }
        console.log(user); 
  
      }
    
    const Start=()=>{
       if(Count>0){
        console.log(Count)
        console.log(Count);
        let Id=setInterval(()=>{
            setCount((Count)=>Count-1)
        },1000)
        tracingId.current=Id;
    }
    }
    const Reset=()=>{
        clearInterval(tracingId.current);
        setCount(60);
        Start();
    }
    const lengthArr=(e)=>{
            let l=e.target.value;
            // setUserDetails([{...UserDetails},{id:l}])
            // console.log(UserDetails);
            if(l.length===10){
                setLength(true);
            }else{
                setLength(false)
            }  
    } 
    const url='https://productdata-exf8.onrender.com/UserData';
    useEffect(()=>{
        const userData=async ()=>{
           let r =await fetch(url);
           let data=await r.json();
           console.log(data);
        }
        userData();
     },[])
   
    
      
    return   <CardContext.Provider value={{Count,Start,lengthArr,Length,Reset,ResetButton,GetName,user}}>
                   {children}
           </CardContext.Provider>;
}

// const [count,setcount]=useState(0);
//    const handalChange=()=>{
//        let newCount=count+1;
//        setcount(newCount);
//    }

//     return <CardContext.Provider value={{count,handalChange}} handalChange={handalChange}></CardContext.Provider>