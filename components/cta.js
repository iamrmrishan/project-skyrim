import React from "react";
import Container from "./container";

const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white lg:flex-nowrap rounded-xl">
       
        <iframe
            title="Google Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.921324117589!2d79.92177707490994!3d6.7794297932175285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24fd8abe4bce5%3A0xaa5aa9f205f36e5c!2sSkyrim%20Travels%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1687053811299!5m2!1sen!2slk"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
     
    </Container>
  );
}

export default Cta;