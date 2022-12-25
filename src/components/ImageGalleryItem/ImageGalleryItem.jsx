import css from './ImageGalleryItem.module.css';


export const ImageGalleryItem = ({ webformatURL, largeImageURL, onImageClick}) => {
    return (
        <li className={css.item}>
            <img src={webformatURL} alt="img from query"  onClick={() => onImageClick(largeImageURL)}  />
        </li>
    )
}