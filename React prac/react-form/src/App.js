import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState(
    {
      firstName:"",
      lastName:"",
      email:"",
      country:"",
      street:"",
      city:"",
      state:"",
      code:"",
      comments:false,
      candidates:false,
      offers:false,
      notif:"",
    }
  )

  function changeHandler(event){
    const {name, value, type, checked} = event.target;
    setFormData(
      (prev) => (
        {
        ...prev, [name]:type === "checkbox" ? checked :value
        }
      )
    )
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }

  return(
    <div className='flex flex-col mt-6 px-10 py-6 w-[800px] outline mx-auto'>
      <form onSubmit={submitHandler}>
        <label htmlFor='firstName'>firstName</label><br></br>
        <input type="text" name='firstName' id='firstName' placeholder='Bob' value={formData.firstName} onChange={changeHandler} 
        className='outline rounded-md w-[90%] '/>
        <br></br><br></br>

        <label htmlFor='lastName'>lastName</label><br></br>
        <input type="text" name='lastName' id='lastName' placeholder='Jones' value={formData.lastName} onChange={changeHandler} 
        className='outline rounded-md w-[90%] '/>
        <br></br><br></br>

        <label htmlFor='email'>email</label><br></br>
        <input type="email" name='email' id='email' placeholder='bobjones55@gmail.com' value={formData.email} onChange={changeHandler} 
        className='outline rounded-md w-[90%] '/>
        <br></br><br></br>

        <label htmlFor='country'>country</label><br></br>
        <select name='country' id='country' value={formData.country} className='outline rounded-md w-[90%] '>
          <option>India</option>
          <option>Korea</option>
          <option>England</option>
          <option>Canada</option>
        </select>
        <br></br><br></br>

        <label htmlFor='street'>street</label><br></br>
        <input type="text" name='street' id='street' placeholder='1234 main St' value={formData.street} onChange={changeHandler} 
        className='outline rounded-md w-[90%] '/>
        <br></br><br></br>

        <label htmlFor='city'>city</label><br></br>
        <input type="text" name='city' id='city' placeholder='Asansol' value={formData.city} onChange={changeHandler} 
        className='outline rounded-md w-[90%] '/>
        <br></br><br></br>

        <label htmlFor='state'>state</label><br></br>
        <input type="text" name='state' id='state' placeholder='West Bengal' value={formData.state} onChange={changeHandler} 
        className='outline rounded-md w-[90%] '/>
        <br></br><br></br>

        <label htmlFor='code'>code</label><br></br>
        <input type="text" name='code' id='code' placeholder='713001' value={formData.code} onChange={changeHandler} 
        className='outline rounded-md w-[90%] '/>
        <br></br><br></br>

        <fieldset>
          <legend className='font-bold text-lg'>By Email</legend>
          <div className='flex'>
            <input className='text-sm' id="comments" name="comments" value={formData.comments} type="checkbox" onChange={changeHandler}/>
            <div>
              <label className='font-bold text-md' htmlFor='comments'>comments</label>
              <p>get notified when someone posts a comment on posting</p>
            </div>
          </div>

          <div className='flex'>
            <input className='text-sm' id="candidates" name="candidates" value={formData.candidates} type="checkbox" onChange={changeHandler}/>
            <div>
              <label className='font-bold text-md'  htmlFor='candidates'>candidates</label>
              <p>get notified when candidate applies for a job</p>
            </div>
          </div>

          <div className='flex'>
            <input className='text-sm' id="offers" name="offers" value={formData.offers} type="checkbox" onChange={changeHandler}/>
            <div>
              <label className='font-bold text-md'  htmlFor='offers'>offers</label>
              <p>get notified when a candidate accepts or rejects an offer</p>
            </div>
          </div>
        </fieldset>
        <br></br><br></br>

        <fieldset>
          <legend className='font-bold text-lg'>Push notifications</legend>
          <p>These are delivered via SMS to your mobile phone</p>

          <input type='radio' id='pushEverything' name='notif' value='everything' onChange={changeHandler}/>
          <label htmlFor='pushEverything'>everything</label>
          <br></br>

          <input type='radio' id='pushEmail' name='notif' value='same as email' onChange={changeHandler}/>
          <label htmlFor='pushEmail'>same as email</label>
          <br></br>

          <input type='radio' id='pushNothing' name='notif' value='nothing' onChange={changeHandler}/>
          <label htmlFor='pushNothing'>no push notifications</label>
        </fieldset>
        <br></br>
        <br></br>

        <button className='bg-blue-500 text-white font-bold rounded py-2 px-4'>SAVE</button>
      </form>
    </div>
  )
}

export default App;