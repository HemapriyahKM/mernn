import { FaBook, FaHeadphones, FaRegBookmark, FaShoppingBag, FaUser, FaEllipsisV, FaRegHeart, FaMobileAlt, FaAngleRight, FaSearch } from 'react-icons/fa';
import book1 from './assets/images/book1.jpg';
import book2 from './assets/images/book2.jpg';
import book3 from './assets/images/book3.jpg';
import genre1 from './assets/images/genre1.jpg';
import thriller from './assets/images/thriller.jpg';
import comedy from './assets/images/comedy.jpg';
import horror from './assets/images/horror.jpg';
import mystery from './assets/images/mystery.jpg';
import cartoon from './assets/images/cartoon.jpg';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Frontpage() {
  const [profilePic, setProfilePic] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" }); // Initial empty fields

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("profilePic");
    window.location.reload();
  };

  return (
    <>
      <div className="trending">
        <div className="First">
          <h1 className="booktxt" style={{ fontSize: "30px", fontFamily: "cursive" }}>
            <b>BOOKS</b>
          </h1>
          <div className='subdiv'>
            <p className='Book'><FaRegBookmark /></p>
            <p className='Heart'><FaRegHeart /></p>
            <p className='shopbag'><FaShoppingBag /></p>
            <p className='User'>
              <Link to="/login">
                {profilePic ? (
                  <img src={profilePic} alt="Profile" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                ) : (
                  <FaUser />
                )}
              </Link>
            </p>
            <p className='settings'><FaEllipsisV /></p>
          </div>
        </div>
        <div className='second' style={{ display: "flex", alignItems: "center", justifyContent: "center", columnGap: "20px", marginBottom: "20px" }}>
          <p className="buttonfirdiv" style={{ marginTop: "20px" }}><FaBook style={{ marginRight: '8px' }} />Books </p>
          <p className="audio"><FaHeadphones style={{ marginRight: '8px' }} />AudioBooks</p>
          <p className='ebook'><FaMobileAlt style={{ backgroundColor: 'transparent', color: 'black' }} />Ebook</p>
        </div>
        <div className='secondiv'>
          <div className='secondsub'>
            <h1>New &</h1>
            <h1>Trending</h1>
            <h5 style={{ color: 'grey' }}>Explorer new worlds from authors</h5>
            <div className='Search' style={{ display: 'flex', border: '1px solid lightgrey', height: '30px', alignItems: 'center', padding: 'auto', backgroundColor: 'white', borderRadius: '5px' }}>
              <p><FaSearch style={{ color: 'grey', marginRight: '10px' }} /></p>
              <input type="text" placeholder='Titles, authors or topics' style={{ border: 'none', outline: 'none', backgroundColor: 'none' }} />
            </div>
          </div>
          <img id="book1" src={book1} alt={'Book 1 which is Last thing he told me'} />
          <div className='thirdsub'>
            <p className='author'>Author of the week</p>
            <img id="book2" src={book2} alt={'William Shakespeare collections'} />
          </div>
          <div className='thirdsub'>
            <p className='author'>Author of the week</p>
            <img id="book3" src={book3} alt={'play'} />
          </div>
          <p className="arrow"><FaAngleRight /></p>
        </div>
        <div className="shelf-container">
          <div className="shelf"></div>
        </div>
      </div>
      <div className='genres'>
        <h1 className='genre' style={{ fontSize: "30px", fontFamily: "cursive" }}>Genres</h1>
        <div className='firstgendiv'>
          <div className='genre-item-r'>
            <img className="Romance" src={genre1} alt={'Romance books'} />
            <p>Romance books explore love and relationships, often with emotional and heartwarming stories.</p>
          </div>
          <div className='genre-item-m'>
            <img className="Mystery" src={mystery} alt={'Mystery books'} />
            <p>Mystery books feature suspense, crime-solving, and thrilling plot twists that keep readers guessing.</p>
          </div>
          <div className='genre-item-c'>
            <img className="Comedy" src={comedy} alt={'Comedy books'} />
            <p>Comedy books focus on humor and light-hearted moments that bring laughter to the reader.</p>
          </div>
        </div>

        <div className='secondgendiv'>
          <div className='genre-item-h'>
            <img className="Horror" src={horror} alt={'Horror books'} />
            <p>Horror books create a chilling atmosphere with stories of fear, supernatural events, and terror.</p>
          </div>
          <div className='genre-item-t'>
            <img className="Thriller" src={thriller} alt={'Thriller books'} />
            <p>Thriller books are full of excitement, action, and suspense, often with a high-stakes plot.</p>
          </div>
          <div className='genre-item-ch'>
            <img className="Children" src={cartoon} alt={'Children books'} style={{ width: '30%' }} />
            <p>Children's books are fun, educational, and filled with engaging stories for younger readers.</p>
          </div>
        </div>

        <div className="shelf-container">
          <div className="shelf"></div>
        </div>
      </div>
      <div className='top-sellers'>
        <h1 style={{ fontSize: "30px", fontFamily: "cursive", textAlign: "center" }}>Top Sellers</h1>
        <div className="shelf-container">
          <div className="shelf"></div>
        </div>
      </div>
    </>
  );
}

export default Frontpage;
