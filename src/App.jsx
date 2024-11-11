import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
// import Loader from './components/Loader/Loader'
// import ErrorMessage from './components/ErrorMessage/ErrorMessage'
// import ImageModal from './components/ImageModal/ImageModal'
import axios from "axios";
import Loader from './components/Loader/Loader'
import toast, { Toaster } from 'react-hot-toast';
import './App.css'

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');

  const fetchImages = async (searchQuery) => {
    try {
      setLoading(true);
      setError(false);
      const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: { query: searchQuery, per_page: 12 },
        headers: {
          Authorization: `Client-ID N8NiyfrWfcDMb9Uv_jaw3yF1BcGJvl6XVHTrK6LTBuo`,
        },
      });
      setImages(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      setError(true);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchImages(query);
    }
  }, [query]);

  const handleSearchSubmit = (newQuery) => {
    setQuery(newQuery);
  };

    return (
      <>
        <SearchBar onSubmit={handleSearchSubmit} />
        <Toaster
          position="top-right"
          reverseOrder={false}
/>
        {loading && <Loader/>}
        {error && <p className="error">Something went wrong. Please try again later.</p>}

        <ImageGallery images={images}/>
        {/* <Loader />
      <ErrorMessage />
      <ImageModal/> */}
      </>
    )
  }

export default App
