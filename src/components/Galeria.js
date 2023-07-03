import { useContext } from "react";
import "../assets/css/galeria.css";
import Heart from "./Heart";
import GalleryContext from "../contexts/GalleryContext";

export default function Galeria() {
    const { images, setLiked } = useContext(GalleryContext);

    return (

        <div className="galeria grid-columns-5 p-3">
            {images.map((img) => (
                <div
                    key={img.id}
                    className="foto"
                    style={{ backgroundImage: `url(${img.src.tiny})` }}
                    >
                    <Heart 
                        filled={img.liked} 
                        onClick={() => setLiked(img.id)}
                    />
                    <p>{img.alt}</p>
                </div>
            ))}
        </div>
    );
}
