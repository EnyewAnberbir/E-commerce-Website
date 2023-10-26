import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className='bg-gradient-to-r from-blue-400 to-purple-600 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
        <Link to='/'>
          <h1 className='text-2xl text-white font-bold'>
            <span className='text-yellow-400'>Ethio</span>
            <span className='text-blue-200'>Online</span>
            <span className='text-green-400'>Shopping</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className='bg-white p-2 rounded-full flex items-center w-64'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-48 text-gray-800'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='text-gray-600'>
            <FaSearch />
          </button>
        </form>
        <ul className='flex gap-6 text-white'>
          <Link to='/'>
            <li className='hover:underline'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='hover:underline'>About</li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-8 w-8 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className='hover:underline'>Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}