  import React from 'react';
   import '../CSS-styling/contact.css';

     const Contact = () => {
       return (
         <div className= "container">
           <form className= "form">
             <input type="text" placeholder="Name" className="input" />
 <input type="email" placeholder="Email" className="input" />
             <textarea placeholder="Message" className="input"></textarea>
             <button type="submit" >Send</button>
           </form>
         </div>
       );
     };

     export default Contact;