import React from "react";


const Hero = () => {

    return (
<>
<div className="container-fluid" id="maincontainer">
	<div className="row cont">
		<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">

  <ol className="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>


  <div className="carousel-inner carouseledit"   role="listbox">
    <div className="item active" id="resize">
      <img src="img/pranjall-kumar-sejqj6Eaqe8-unsplash.jpg" alt="pizza"/> 
    </div>
    <div className="item">
      <img src="img/chad-montano-MqT0asuoIcU-unsplash.jpg" alt="pizza2"/> 
    </div>
    <div className="item piz22">
      <img src="img/piz2.jpg" alt="pizza2"/> 
    </div>
   </div> 
  </div>

  
  <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
    </div> 
  </div>

</>
    )
}


export default Hero