
import { useState } from "react";
import Navbar from "../Component/Navbar";
import SliderInfo from "./SliderInfo";

const Home = () => {

    const[homeValue, setHomeValue] = useState(1700);
    const[downPayment, setDownPayment] = useState(600);
    const[loanAmount, setLoanAmount] = useState(2400);
    const[interestRate, setInterestRate] =useState(6);
  return (
    <>
        <Navbar />
        <div style={{display:"flex"}}>
        {/* SLider Div */}
            <div style={{width:"50%" , padding:'0px 1rem'}}>
            <SliderInfo setValue = {setHomeValue} title={"Home Value"} symbol={"$"} value={homeValue} min={1000} max={10000} />

            <SliderInfo setValue={setDownPayment} title={"Down Payment"} symbol={"$"} value={downPayment} min={0} max={homeValue} />

            <SliderInfo setValue={setLoanAmount} title={"Loan Amount"} symbol={"$"} value={loanAmount} min={0} max={homeValue} />

            <SliderInfo setValue={setInterestRate} title={"Interest Rate"} symbol={"%"} value={interestRate} min={2} max={20} />
            </div>

        {/* Graph Div  */}
            <div style={{width:"50%"}}>
                
            </div>
    
        </div>



        
    </>
  )
}

export default Home;