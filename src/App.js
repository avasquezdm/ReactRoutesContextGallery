import "./styles.css";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

import GalleryContext from "./contexts/GalleryContext";

export default function App() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("/fotos.json")
          .then((response) => response.json())
          .then((data) => setImages(data.photos));
       }, [])

    const setLiked = (id) => {
        const imgIndex = images.findIndex((img) => img.id === id);
        images[imgIndex].liked = !images[imgIndex].liked;
        setImages([...images]);
    };


    return (
        <div className="App">
            <GalleryContext.Provider value={{ images, setImages, setLiked }}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/favoritos" element={<Favoritos />} />
                    </Routes>
                </BrowserRouter>
            </GalleryContext.Provider>
        </div>
    );
}
