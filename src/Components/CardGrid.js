import React, { useState } from 'react';
import PetAdoptionForm from './PetAdoptionForm';
import './CardGrid.css';
import { Link } from 'react-router-dom';


const CardGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const cardData = [
    {
      id: 1,
      title: 'Max',
      text: 'Breed: Golden Retriever\nAge:3\nDescription: A friendly and intelligent breed known for its loving nature.',
      imgSrc: 'https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/10-intelligent-dog-breeds/golden-retriever-tongue-out.jpg'
    },
    {
      id: 2,
      title: 'Bella',
      text: 'Breed: German Shepherd\nAge:3\nDescription: Known for its courage and confidence, a popular choice for a working dog.',
      imgSrc: 'https://image.petmd.com/files/inline-images/german-shepherd-3.jpg?VersionId=QrldSoaj4srcfCInIahiKcoLSh5D0gh8'
    },
    {
      id: 3,
      title: 'Charlie',
      text: 'Breed: Beagle\nAge:3\nDescription: A small, energetic breed known for its friendly and curious personality.',
      imgSrc: 'https://www.akc.org/wp-content/uploads/2017/11/Beagle-Puppy.jpg'
    },
    {
      id: 4,
      title: 'Daisy',
      text: 'Breed: Bulldog\nAge:3\nDescription: A sturdy and muscular breed with a calm demeanor and affectionate nature.',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bulldog_inglese.jpg/640px-Bulldog_inglese.jpg'
    },
    {
      id: 5,
      title: 'Max',
      text: 'Breed: Persian Cats\nAge:1\nDescription: Persian cat personalities are sweet, gentle, and patient.',
      imgSrc: 'https://assets.petpal.asia/wp-content/uploads/2023/01/11150212/sergey-semin-ZjzXfBYxM_M-unsplash-1280x853.jpg'
    },
    {
      id: 6,
      title: 'Jimmy',
      text: 'Breed: Himalayan\nAge:1\nDescription: They are smart, affectionate, and devoted. Himmies consider their pet parents lap to be a little piece of heaven.',
      imgSrc:'https://www.hepper.com/wp-content/uploads/2021/08/himalayan-cat-beside-a-cabinet_Nattapong-Pongpiyapan_Shutterstock.jpg'
    },
    {
      id: 7,
      title: 'Molly',
      text: 'Breed: Brirish Shorthair\nAge:2\nDescription: A small, energetic breed known for its friendly and curious personality.',
      imgSrc: 'https://www.akc.org/wp-content/uploads/2017/11/Beagle-Puppy.jpg'
    },
    {
      id: 8,
      title: 'Losy',
      text: 'Breed: Labrador Retriver\nAge:2\nDescription: Labs are friendly, outgoing, and high-spirited companions who have more than enough affection to go around for a family looking for a medium-to-large dog.',
      imgSrc: 'https://www.marthastewart.com/thmb/gCXKR-31DYnpsLi7uUj0S4zyfqc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/happy-labrador-retriever-getty-0322-2000-eb585d9e672e47da8b1b7e9d3215a5cb.jpg'
    },
    {
      id: 9,
      title: 'Lucky',
      text: 'Breed: French Bulldog\nAge:3\nDescription: Frenchies are known for being pretty laid back and adaptable, so they tend to get along well with children of all ages which makes them popular family pets.',
      imgSrc: 'https://www.thesprucepets.com/thmb/ryT9l4hrL00eC9i7D56o9kXl_D0=/1500x0/filters:no_upscale():strip_icc()/french-bulldog-breed-profile-1117966-hero-4f2e84633a854d4c8edf6e1f588aaa64.jpeg'
    }
    
  ];

  const filteredCards = cardData.filter(card => 
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="card-grid-wrapper">
      <header className="card-grid-header">
        <h1>Our Pets</h1>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>
      </header>
      <div className="card-grid-container">
        {filteredCards.map((card) => (
          <div key={card.id} className="card">
            <img className="card-img-top" src={card.imgSrc} alt={`Card image ${card.id}`} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <pre className="card-text">{card.text}</pre>
              <Link to="/petadap">
  <button className="adopt-me-btn">Adopt Me</button>
</Link>


            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 

export default CardGrid;

