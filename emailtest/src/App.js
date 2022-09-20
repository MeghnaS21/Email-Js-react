import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zy5pejq', 'template_66e4yis', form.current, '63MCp6I3S1db38w6N')
    console.log(form.current)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  const showToast = () => {
    toast.success(" Thanks for subscribing!! ")
  };


  return (
    <div className="App">
      <form ref={form}
        onSubmit={sendEmail}
        
      >
        {/* <input type="text"
          placeholder='Full Name'
          name='user_name' required
        />
        <br /> */}
        <input type="email"
          placeholder='Email'
          name='itsmeghna21@gmail.com' required
        />
        <br />
        {/* <input type="text"
          placeholder='Subject'
          name='subject' required
        />
        <br />
        <textarea name="message"
          cols="30" rows="10"
        ></textarea> */}

        <button type='submit'onClick={showToast} >send message</button>

      </form>
      <ToastContainer />
    </div>
  );
}

export default App;
