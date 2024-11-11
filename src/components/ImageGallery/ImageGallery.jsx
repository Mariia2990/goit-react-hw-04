import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard';

function ImageGallery({ images }) { 
  return (
    <ul className={css.gallery}>
      {images.map ((image) => (
        <li key={image.id} className={css.galleryItem}>
          <ImageCard urls={image.urls} name={image.alt_description} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;