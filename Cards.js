import './Cards.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState ,useEffect} from 'react';

export default function Card(){
    const [touchedT,setTouchT] = useState(false);
    const [touchedD,setTouchD] = useState(false);

    const [truth,setTruth] = useState([]);
    const [dare,setDare] = useState([]);

    

    function Truth(){
        if(touchedD) setTouchD(false);
        setTouchT(true);
        fetch("https://api.truthordarebot.xyz/v1/truth")
        .then(res=>res.json())
        .then(
            (result)=>{
                setTruth(result);
            }
        )
        
        

    }
    function  Dare(){
        if(touchedT) setTouchT(false);
        setTouchD(true);
        fetch("https://api.truthordarebot.xyz/api/dare")
        .then(res=>res.json())
        .then(
            (result)=>{
                setDare(result);
            }
        )
        
        
    }

    if(touchedT)
    {
        return(
            <>
            <div className="Card">
                {truth.question}
            </div>
            <div className='buttons'>
                <Button variant="primary" className="btn-primary w-50" onClick={Truth}>Truth</Button>
                <Button variant="primary" className="btn-primary w-50" onClick={Dare}>Dare</Button>
            </div>
            </>
            
        );
    }
    else if(touchedD){
        return(
            <>
            <div className="Card">
                {dare.question}
            </div>
            <div className='buttons'>
                <Button variant="primary" className="btn-primary w-50" onClick={Truth}>Truth</Button>
                <Button variant="primary" className="btn-primary w-50" onClick={Dare}>Dare</Button>
            </div>
            </>
            
        );
    }
    else{
        return(
            <>
            <div className="Card">
                Truth or Dare
            </div>
            <div className='buttons'>
                <Button variant="primary" className="btn-primary w-50" onClick={Truth}>Truth</Button>
                <Button variant="primary" className="btn-primary w-50" onClick={Dare}>Dare</Button>
            </div>
            </>
            
        );
    }
    
}