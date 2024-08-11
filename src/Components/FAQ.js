import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How do I adopt a pet from Paws & Hearts?",
      answer: "To adopt a pet, browse our available pets on the Pet Gallery page. Once you find a pet you're interested in, click on the 'Adopt me' button to fill out the adoption form. Our team will review your application and get in touch with you to discuss the next steps."
    },
    {
      id: 2,
      question: "What is the adoption process?",
      answer: "Our adoption process includes submitting an adoption application, an interview with one of our team members, and a home visit if necessary. We aim to ensure that the pet and the adopter are a perfect match for a successful adoption."
    },
    {
      id: 3,
      question: "Are there any adoption fees?",
      answer: "Yes, there is an adoption fee that helps cover the cost of veterinary care, vaccinations, and other expenses incurred while caring for the pet. The fee varies depending on the type and age of the pet."
    },
    {
      id: 4,
      question: "Can I adopt if I already have pets?",
      answer: "Yes, you can adopt if you already have pets. We may ask questions about your current pets to ensure that they will get along with the new pet. A successful introduction is key to a harmonious multi-pet household."
    },
    {
      id: 5,
      question: "What happens if I need to return the pet?",
      answer: "We understand that circumstances can change. If you need to return the pet, please contact us as soon as possible. We will work with you to find a suitable solution, whether it be rehoming the pet or providing support."
    },
    {
      id: 6,
      question: "How can I support Paws & Hearts?",
      answer: "You can support us by donating, volunteering, or fostering pets. Visit our Support Us page for more information on how you can make a difference in the lives of animals in need."
    }
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='faq'>
    <div className="faq-container">
      <header className="faq-header">
        <h1>Frequently Asked Questions (FAQ)</h1>
      </header>
      <div className="faq-content">
        {faqs.map((faq, index) => (
          <div key={faq.id} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h2>{faq.question}</h2>
              <span className={`fa ${openIndex === index ? 'fa-chevron-down' : 'fa-chevron-right'}`}></span>
            </div>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQ;
