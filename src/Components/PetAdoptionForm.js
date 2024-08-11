import React, { useState } from 'react';
import './PetAdoptionForm.css';

const PetAdoptionForm = () => {
 
  const [formData, setFormData] = useState({
    petName: '',
    petType: '',
    petAge: '',
    adopterName: '',
    adopterEmail: '',
    adopterPhone: '',
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState({
    email: '',
    phone: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;
    let valid = true;
    let newErrors = { email: '', phone: '' };

    if (!emailPattern.test(formData.adopterEmail)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }

    if (formData.adopterPhone && !phonePattern.test(formData.adopterPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    setErrors({ email: '', phone: '' });

  
    const newSubmittedData = [...submittedData, formData];

 
    const formattedData = newSubmittedData.map((data, index) => `
      Submission ${index + 1}:
      Pet Name: ${data.petName}
      Pet Type: ${data.petType}
      Pet Age: ${data.petAge}
      Adopter Name: ${data.adopterName}
      Adopter Email: ${data.adopterEmail}
      Adopter Phone: ${data.adopterPhone || 'N/A'}
    `).join('\n\n');

    
    alert(`All Submissions:\n\n${formattedData}`);

 
    setFormData({
      petName: '',
      petType: '',
      petAge: '',
      adopterName: '',
      adopterEmail: '',
      adopterPhone: '',
    });

   
    setSubmittedData(newSubmittedData);
  };

  return (
    <div className="form-background">
      <div className="pet-adoption-form">
        <h2>Pet Adoption Form</h2>
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
            <legend>Adopter Details</legend>
            <label htmlFor="adopterName">Your Name:</label>
            <input
              type="text"
              id="adopterName"
              name="adopterName"
              value={formData.adopterName}
              onChange={handleChange}
              required
            />

            <label htmlFor="adopterEmail">Email:</label>
            <input
              type="email"
              id="adopterEmail"
              name="adopterEmail"
              value={formData.adopterEmail}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error-message">{errors.email}</p>}

            <label htmlFor="adopterPhone">Phone (optional):</label>
            <input
              type="tel"
              id="adopterPhone"
              name="adopterPhone"
              value={formData.adopterPhone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error-message">{errors.phone}</p>}
          </fieldset>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PetAdoptionForm;


