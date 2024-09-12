import "./Style.css";
import product1 from '../images/oil.jpg';
import product2 from '../images/cream.jpg';
import product3 from '../images/lipbalm.jpg';
import { useEffect, useState } from "react";
import Brands from "./Brands";

function Body(){

    const [fita, setFita] = useState();

    function clickFunction2() {
        setFita('changed value');
    }

    useEffect(() => {
        
        if (fita=== 'changed value') {
            setFita('changed value');
        } else {
            setFita('afridi Value');
        }
    }, [fita])

    return(
        <>
            <div className="title">
            <h2>YOUR FAVORITE BRANDS ARE <br/>
                HAVING A MOMENT</h2>
                {/* <h4>{fita}</h4> */}
                <div className="product-section">
                    <div className="product-1" onClick={clickFunction2}>
                        <img src={product1} />
                        <p>This is oil made fresh in india and can be able to deliver accross world</p>
                        <p className="p-1-p">
                            Read More
                        </p>
                    </div>
                    <div className="product-2">
                        <img src={product2} />
                        <p>This is face cream it helps to prevent our face fromm heavy </p>
                        <p>
                        <p className="p-2-p">
                            Read More
                        </p>
                        </p>
                    </div>
                    <div className="product-3">
                        <img src={product3} />
                        <p>imporved margins for customers </p>
                        <p className="p-3-p">
                            Read More
                        </p>
                    </div>
                </div>
                <div className="product-box">
                    <div className="box1">
                        <p>Olipop</p>

                    </div>
                    <div className="box2">
                        <p>Oura bora</p>
                    </div>
                    <div className="box3">
                        <p>hydrant</p>
                    </div>
                    <div className="box4">
                        <p>osea</p>
                    </div>
                </div>
             </div>
             <Brands fita={fita} />

        </>
    );
};
export default Body;