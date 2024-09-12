import "../components/Style.css";
import product from '../images/graph.jpg';


const Brands= ({fita}) => {
    return(
        <>
        <div className="brand">
            <div className="header-2">
                <h1>
                DRIVE MORE SECOND ORDERS WITH <br/> 
                MOMENTS THAT MATTERS
                </h1>
                {/* <h2>{fita}</h2> */}
            </div>
            <div className="para-1">
                <div className="para-2">
                    <p>
                    Repeat monitors when customers enter key Moments—think cross-selling, replenishment, lapsing—and passes that intelligence to the email and SMS platforms you use today. The result is more personalized campaigns, smarter flows, and an easier retention workflow.
            Moments make it a breeze to create the kind of hyper-personalized messaging that used to require complicated if/else logic, rigid timing, and burdensome setup.
                    </p>
                </div>
                <div className="product-4">
                <img src ={product}/>  
                </div>
            </div>
            <div className="header-3">
                <h2>FEATURED MOMENTS</h2>

            </div>
            <div className="content-box">
                <div className="line-1">
            
                 <h4>Replenishment Moment</h4>
                 <p>customers in the Moment are ready to buy</p>
                </div>
                   <div className="line-2">
                      <h4>About to Lapse Moment</h4> 
                      <p>Customer in this moment are risk to Lapsing permanently</p>
                    </div>
              </div>  
                <div className="content-box-1">
                    <div className="line-3">
                        <h4>Cross Sell Moment</h4>
                        <p>customers in the moment are primed to explore more of your product </p>
                    </div>
                    <div className="line-4">
                        <h4>Subscription Upsell Moment</h4>
                        <p>customers in the moment aer primed to commit recurring orders</p>

                    </div>

            </div>
        </div>
        </>
    );
};


export default Brands;