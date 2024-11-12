import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
// import ImageModal from './components/ImageModal/ImageModal'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import Loader from './components/Loader/Loader'
import { fetchImages } from './components/api';
import './App.css'
import toast, {Toaster} from 'react-hot-toast';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      try {
        setLoading(true);
        const { images: newImages, totalPages } = await fetchImages(query, page);
        
        if (page === 0) {
          setImages(newImages);
        } else {
          setImages((prevImages) => [...prevImages, ...newImages]);
        }
        
        setTotalPages(totalPages);
      } catch (error) {
        setError("Something went wrong. Please try again later.");
        toast.error("Something went wrong. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const handleSearchSubmit = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setTotalPages(0);
    setError(null);
  };

   const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };


 return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <SearchBar onSubmit={handleSearchSubmit} />
      
      {loading && <Loader/>}
      
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <ImageGallery images={images} />
      )}
       {images.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
    </>
  );
};

export default App
