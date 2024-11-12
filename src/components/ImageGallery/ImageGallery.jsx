import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard';

function ImageGallery({ images, onImageClick }) { 
  return (
    <ul className={css.gallery}>
      {images.map ((image) => (
        <li key={image.id} className={css.galleryItem}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;