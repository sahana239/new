import React, { useState } from 'react';
import './PetLeavingForm.css'; 

const PetLeavingForm = () => {
  
  const [formData, setFormData] = useState({
    petName: '',
    petType: '',
    petAge: '',
    ownerName: '',
    ownerEmail: '',
    ownerPhone: '',
    reasonForLeaving: '',
    dateOfLeaving: '',
  });

  const [submittedData, setSubmittedData] = useState([]);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.ownerEmail)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Validate phone number (example pattern for 10-digit numbers)
    const phonePattern = /^\d{10}$/;
    if (formData.ownerPhone && !phonePattern.test(formData.ownerPhone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    // Add new data to submitted data array
    setSubmittedData([...submittedData, formData]);

    // Reset form
    setFormData({
      petName: '',
      petType: '',
      petAge: '',
      ownerName: '',
      ownerEmail: '',
      ownerPhone: '',
      reasonForLeaving: '',
      dateOfLeaving: '', // Reset date of leaving
    });
  };

  return (
    <div className="Leaving">
    <div className="form-container">
      <h2>Pet Leaving Form</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Pet Details</legend>
          <label htmlFor="petName">Pet Name:</label>
          <input
            type="text"
            id="petName"
            name="petName"
            value={formData.petName}
            onChange={handleChange}
            required
          />

          <label htmlFor="petType">Pet Type:</label>
          <input
            type="text"
            id="petType"
            name="petType"
            value={formData.petType}
            onChange={handleChange}
            required
          />

          <label htmlFor="petAge">Pet Age:</label>
          <input
            type="number"
            id="petAge"
            name="petAge"
            value={formData.petAge}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset>
          <legend>Owner Details</legend>
          <label htmlFor="ownerName">Your Name:</label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            required
          />

          <label htmlFor="ownerEmail">Email:</label>
          <input
            type="email"
            id="ownerEmail"
            name="ownerEmail"
            value={formData.ownerEmail}
            onChange={handleChange}
            required
          />

          <label htmlFor="ownerPhone">Phone (optional):</label>
          <input
            type="tel"
            id="ownerPhone"
            name="ownerPhone"
            value={formData.ownerPhone}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <legend>Additional Information</legend>
          <label htmlFor="reasonForLeaving">Reason for Leaving:</label>
          <textarea
            id="reasonForLeaving"
            name="reasonForLeaving"
            value={formData.reasonForLeaving}
            onChange={handleChange}
            required
          />

          <label htmlFor="dateOfLeaving">Date of Leaving:</label>
          <input
            type="date"
            id="dateOfLeaving"
            name="dateOfLeaving"
            value={formData.dateOfLeaving}
            onChange={handleChange}
            required
          />
        </fieldset>

        <button type="submit">Submit</button>
      </form>

      {submittedData.length > 0 && (
        <div className="submitted-data">
          <h2>Submitted Data</h2>
          {submittedData.map((data, index) => (
            <div key={index} className="submission">
              <h3>Submission {index + 1}</h3>
              <p><strong>Pet Name:</strong> {data.petName}</p>
              <p><strong>Pet Type:</strong> {data.petType}</p>
              <p><strong>Pet Age:</strong> {data.petAge}</p>
              <p><strong>Owner Name:</strong> {data.ownerName}</p>
              <p><strong>Owner Email:</strong> {data.ownerEmail}</p>
              <p><strong>Owner Phone:</strong> {data.ownerPhone || 'N/A'}</p>
              <p><strong>Reason for Leaving:</strong> {data.reasonForLeaving}</p>
              <p><strong>Date of Leaving:</strong> {data.dateOfLeaving}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default PetLeavingForm;


