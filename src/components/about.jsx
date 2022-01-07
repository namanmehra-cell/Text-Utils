import React from "react";

export default function About(){


    return (
    <><div className="accordion" id="accordionExample" >
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>About this website</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
         
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum mauris eget eros faucibus, in porta leo pulvinar.
 Praesent eu dui pulvinar, accumsan massa non, congue sapien. Aenean ornare odio metus. Nunc lacinia quis lacus et commodo. Sed facilisis enim cursus, suscipit lacus ac, rutrum lorem. Maecenas sit amet varius enim.
 Suspendisse nec augue at nibh sodales ultrices nec sit amet velit. Nunc in erat nibh.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingTwo">
      <button  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo"  className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Aliquam imperdiet eleifend orci, sed accumsan ante tempus at. Nunc sit amet orci erat.
       Aliquam erat volutpat. Morbi placerat felis arcu, ut venenatis arcu sollicitudin vitae. Aenean interdum congue rhoncus. Aliquam finibus nibh ut fringilla pulvinar.
       Sed in ligula molestie, feugiat urna eget, semper est. Donec at magna sed nisi ultricies molestie eget quis mi.
      </div>
    </div>
  </div>
  
  </div>
   </>
  
    )
}