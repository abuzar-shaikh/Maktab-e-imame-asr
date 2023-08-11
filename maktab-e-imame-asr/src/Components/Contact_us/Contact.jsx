import React from "react";
import style from "../Contact_us/Contact.css";

const Contact = () => {
  return (
    <div className="new_contact_main">
      <div className="Contact_Main">
      {/* google location */}
      <div className="Contact_Location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3752.6532947429946!2d75.30859341491333!3d19.854617586646008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDUxJzE2LjYiTiA3NcKwMTgnMzguOCJF!5e0!3m2!1sen!2sin!4v1689938269012!5m2!1sen!2sin"
          width="100%"
          height="100%"
        //   style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* google location end*/}
      {/* form div */}
      <div className="Contact_form">
        <div className="Contact_heading">
          <h1>Contact us</h1>
          <p>We're open for any suggestion or just to have a chat</p>
        </div>
        {/* contact address and email and phone */}
        <div className="Contact_address_phone">
          <div>
            <h4>ADDRESS:</h4>
            <p>198 West 21th Street, Suite 721 New York NY 10016</p>
          </div>
          <div>
            <h4>EMAIL:</h4> <p>info@yoursite.com</p>
          </div>
          <div>
            <h4>PHONE:</h4> <p>+ 1235 2355 98</p>
          </div>
        </div>
        <div className="Contact_input">
          <div>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <input type="text" placeholder="Subject" />
          </div>
          <div>
            <textarea
              placeholder="Create a message here..."
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div className="Contact_button">
          <button>SEND MESSAGE</button>
        </div>
      </div>
      {/* form div end*/}
    </div>
    </div>
  );
};

export default Contact;
