import React from 'react';
import '../App.css';
import './HomeForm.css';

function HomeForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // form submission //
  };

  return (
    <div className='home-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted className='video-background' /> */}
      <img src='/images/bus4.avif' alt='image' className='image-background'/>
      <div className='content-container'>
        <form className='form-container' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='origin'>Origin</label>
            <input type='text' id='origin' name='origin' placeholder='Enter origin' />
          </div>
          <div className='form-group'>
            <label htmlFor='destination'>Destination</label>
            <input type='text' id='destination' name='destination' placeholder='Enter destination' />
          </div>
          <div className='form-group'>
            <label htmlFor='preferredDate'>Preferred Date</label>
            <input type='date' id='preferredDate' name='preferredDate' />
          </div>
          <div className='form-group'>
            <label htmlFor='returnDate'>Return Date (Optional)</label>
            <input type='date' id='returnDate' name='returnDate' />
          </div>
          <button type='submit'>Check for Buses</button>
        </form>
      </div>
    </div>
  );
}

export default HomeForm;