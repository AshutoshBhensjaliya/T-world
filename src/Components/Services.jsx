import { useState,useEffect } from "react";
import data from "./data";
import Treks from "./Treks";

function Services() {

   const [tours, setTours] = useState(data);

    return (
      <div>
      <Treks tours={tours}></Treks>
    </div>
    );
}

export default Services;