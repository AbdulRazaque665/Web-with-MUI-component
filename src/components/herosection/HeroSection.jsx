import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./herosection.css";
import HeroImage from "../../assets/Illustration (1).png"
import { Button } from "@mui/material";

const HeroSection = () => {
  return (
   <> 
   <div className="bg-colors ">
   <div className="container">
     <div className="row align-items-center py-5">
     <div className="col-12  col-lg-7">
     <h1 className="text-black heading" >
       Lessons and insights <span className="text-success">from 8 years</span>
     </h1>
     <p>Where to grow your business as a photographer: site or social media?</p>
     <Button variant="contained" className="bg-success py-3 text-small px-4">Register</Button>
     </div>
     <div className="col-12 col-lg-5 text-end text-sm-center">
         <img src={HeroImage} className="img-fluid" alt="" />
     </div>
     </div>
   </div>
 </div>
 </>
  );
};

export default HeroSection;
