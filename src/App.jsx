import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "./App.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-800 to-gray-900 text-white min-h-screen">
      
      <header className="fixed w-full bg-gradient-to-r from-gray-800 via-purple-700 to-gray-800 p-4 shadow-lg z-50">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-extrabold text-purple-300">StonePedia</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-yellow-400">Home</a>
            <a href="#categories" className="hover:text-yellow-400">Categories</a>
            <a href="#testimonials" className="hover:text-yellow-400">Testimonials</a>
            <a href="#blog" className="hover:text-yellow-400">Blog</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              <div className="space-y-1">
                <div className="w-6 h-1 bg-white"></div>
                <div className="w-6 h-1 bg-white"></div>
                <div className="w-6 h-1 bg-white"></div>
              </div>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.nav
            className="md:hidden bg-purple-900 mt-2 rounded-lg shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <ul className="flex flex-col p-4 space-y-4">
              <li><a href="#home" className="block hover:text-yellow-400">Home</a></li>
              <li><a href="#categories" className="block hover:text-yellow-400">Categories</a></li>
              <li><a href="#testimonials" className="block hover:text-yellow-400">Testimonials</a></li>
              <li><a href="#blog" className="block hover:text-yellow-400">Blog</a></li>
              <li><a href="#contact" className="block hover:text-yellow-400">Contact</a></li>
            </ul>
          </motion.nav>
        )}
      </header>

  
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-gray-900 via-purple-700 to-gray-900"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-bold mb-4">
            Welcome to <span className="text-yellow-500">StonePedia</span>
          </h1>
          <p className="text-2xl mb-6 text-purple-300">
            Discover exquisite stones to elevate your space.
          </p>
          <motion.a
            href="#categories"
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Explore Now
          </motion.a>
        </motion.div>
      </section>

      <section id="carousel" className="py-20 px-8 bg-purple-900">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-8">Showcase</h2>
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={3000}
          dynamicHeight={false}
          className="rounded-lg shadow-xl overflow-hidden"
        >
          {["https://img.freepik.com/free-photo/close-up-black-marble-textured-background_53876-63511.jpg", "https://plus.unsplash.com/premium_photo-1708092677389-883d2479b44d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hcmJsZSUyMHRleHR1cmV8ZW58MHx8MHx8fDA%3D", "data:image/jpeg;base64,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", "https://plus.unsplash.com/premium_photo-1707981532515-ff5c90edb08b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFyYmxlJTIwdGV4dHVyZXxlbnwwfHwwfHx8MA%3D%3D"].map((item, index) => (
            <div key={index} className="h-80 bg-gradient-to-br from-yellow-400 to-purple-500 flex items-center justify-center">
              <img src={item} alt="image" />
            </div>
          ))}
        </Carousel>
      </section>

      <section id="categories" className="py-20 px-8 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-8 text-purple-300">Our Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Marble', 'Granite', 'Quartz', 'Travertine', 'Sandstone', 'Limestone'].map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-md text-center"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">{category}</h3>
              <p>Top-quality {category.toLowerCase()} for all your design needs.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-20 px-8 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-8 text-yellow-400">Contact Us</h2>
        <form className="max-w-xl mx-auto bg-purple-800 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
            <input type="text" id="name" className="w-full p-2 rounded bg-gray-700 text-white" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" className="w-full p-2 rounded bg-gray-700 text-white" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-bold mb-2">Message</label>
            <textarea id="message" rows="4" className="w-full p-2 rounded bg-gray-700 text-white"></textarea>
          </div>
          <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            Send Message
          </button>
        </form>
      </section>

      <footer className="bg-gradient-to-r from-purple-900 to-gray-900 text-center py-6">
        <p className="text-purple-300">© 2024 StonePedia. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
