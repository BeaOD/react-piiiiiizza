import React from "react";

const PizzaTypes = () => {

    return (
<>

<div className="container">
	<div className="row ptypes">
		<h3>Pizza Types</h3>
  </div>

  <div className="row">
    <div className="col-md-3"> 
      <div className="firstimage">
        <div className="thumbnail">
          <img src="img/mariana-martinez-gJW-pfaqihA-unsplash.jpg" width="100" alt="Pizza Obolo"/>
          <div className="caption">
            <h3>Pizza Obolo</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam 
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
        </div>
      </div>
    </div>
		<div className="col-md-3 secondimage">
      <div className="thumbnail">
        <img src="img/heather-barnes-YKvGUO4Zb7Y-unsplash.jpg" alt="Pizza cheezy"/>
        <div className="caption">
          <h3>Pizza Cheezy </h3>
          <p> Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>  
        </div>
      </div>
    </div>
		<div className="col-md-3">
      <div className="thumbnail">
        <img src="img/jonas-kakaroto-zlKdLdMREtE-unsplash.jpg" alt="Pizza Sokyee"/>
        <div className="caption">
          <h3>Pizza Sokyee </h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>  
    </div>
		<div className="col-md-3">
      <div className="thumbnail">
        <img src="img/david-nuescheler-XmiigYJ6LsE-unsplash.jpg" alt="Pizza Atadwe" />
        <div className="caption">
          <h3>Pizza Snr </h3>
          <p> Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>  
    </div>
		 
	</div>
</div>

</>

)
}
export default PizzaTypes