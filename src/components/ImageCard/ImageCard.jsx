import css from './ImageCard.module.css'

    function ImageCard({ urls, name }) {
  return (
    <div className={css.imageCard}>
      <img src={urls.small} alt={name} className={css.image} />
    </div>
  );
}

export default ImageCard;

