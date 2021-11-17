import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="kanchankr15153795@gmail.com">
        <Button>Contact: kr1@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;