import React from "react";
import Hero from "./Hero";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <Hero
        imageSrc=""
        title="Contact Us here:"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida eget odio a sodales."
      />
      <ContactForm />
    </div>
  );
};

export default Contact;
