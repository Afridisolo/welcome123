import { useState } from "react";
import "./Style.css";




function Read(){
    const [varName, setVarName] = useState();

    const clickFunction1 = () => {
        setVarName('The new Value'); 
    };



    return(
        <>
        <div className="content-4">
            <div className="heading-1">
                <h1>READ MORE</h1>
                {/* <h4>{varName}</h4> */}
            </div>
            <div className="product-section-1">
                <div className="box-email" onClick="clickFunction1()" >
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                    </span>
                    <p>
                        <h5>
                        How to quickly buiild a <br/>
                        Replenishment flow</h5> </p>
                    <p>
                    The cost of a personalized replenishment flow is almost always a mess of branching logic and a ton of someone's time. But not anymore.
                    </p>    
                </div>
                <div className="box-mobile">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#000000" d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM144 448c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16zM304 64L80 64l0 320 224 0 0-320z"/></svg>
                    </span>
                    <p>
                    <h5>
                    How Do You Measure and <br/>Improve Your Retention <br/>Strategy With Data?
                    </h5>
                    With acquisition becoming <br/>increasingly difficult and expensive, <br/> using your data to inform a solid.
                    </p>
                </div>
                <div className="box-chat">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path fill="#000000" d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9l.3-.5z"/></svg>
                    </span>
                    <p>
                    <h5>
                        Improved margins for returning customers
                    </h5>
                    These are the three types of moments you have to activate your existing customer base. Cultural, manufactured, and customer moments.
                    </p>
                </div>
                  
            
               

            </div>
        </div>



        </>        
    );

};



export default Read;