import React from "react";
import { faHome, faPhone, faMailBulk } from "react-icons";
export default function Footer() {
  return (
    <div>
      <div className="footerContainer">
        <div className="left">
          <div className="location">
            <faHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>132 Gabes 6011.</p>
              <p>Tunisia.</p>
            </div>
          </div>
          <div className="phone">
            <faPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div> +216 94 386 820</div>
          </div>
          <div className="mail">
            <faMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div> ousamagr@gmail.com</div>
          </div>
        </div>
        <div className="right">
          {" "}
          <h4>About the company</h4>
        </div>
      </div>
    </div>
  );
}
