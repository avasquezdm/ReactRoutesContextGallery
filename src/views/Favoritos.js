import { useContext } from "react";
import GalleryContext from "../contexts/GalleryContext";
import Heart from "../components/Heart";

export default function Favoritos() {
    const { images, setLiked } = useContext(GalleryContext);

    return (
        <div>
            <h1>Fotos favoritas</h1>
            <div className="p-3 galeria grid-columns-5">
                {images.filter((img) => 
                img.liked).map((img) => {
                        return (
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
                                );
                })}
            </div>
        </div>
        );
}
