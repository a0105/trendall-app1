import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/ui/Header";
import Footer from "../components/ui/footer";
import HeroSection2 from "../components/ui/HeroSection2";

function VaseCard({ vase }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="vase-card flex flex-col justify-center items-center border p-4 m-4 shadow-md hover:border-blue-500 hover:shadow-lg transition duration-200">
            <img
                src={vase.image || "N/A"}
                alt={vase.image || "N/A"}
                height="300"
                width="200"
            />
            <p className="text-center">
                <strong>Vase Number:</strong> {vase.number || "N/A"}
            </p>
            <p className="text-center">
                <strong>Vase ID:</strong> {vase.vaseID || "N/A"}
            </p>
            <p className="text-center">
                <strong>Fabric:</strong> {vase.fabric || "N/A"}
            </p>
            <p className="text-center">
                <strong>Technique:</strong> {vase.technique || "N/A"}
            </p>
            <p className="text-center">
                <strong>Painter:</strong> {vase.painter || "N/A"}
            </p>
            <p className="text-center">
                <strong>Type:</strong> {vase.type || "N/A"}
            </p>
            <p className="text-center">
                <strong>Collection:</strong> {vase.collection || "N/A"}
            </p>
            <p className="text-center">
                <strong>Provenance:</strong> {vase.provenance || "N/A"}
            </p>
            {isExpanded && (
                <div>
                    <p className="text-center">
                        <strong>Height:</strong> {vase.height || "N/A"}
                    </p>
                    <p className="text-center">
                        <strong>Diameter:</strong> {vase.diameter || "N/A"}
                    </p>
                    <p className="text-center">
                        <strong>Publication:</strong> {vase.publications || "N/A"}
                    </p>
                    <p className="text-center">
                        <strong>Description:</strong> {vase.description || "N/A"}
                    </p>
                </div>
            )}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                {isExpanded ? "Show Less" : "Show More"}
            </button>
        </div>
    );
}

const Gallery = () => {
    const [vases, setVases] = useState([]);

    const [selectedFabric, setSelectedFabric] = useState("");
    const [selectedTechnique, setSelectedTechnique] = useState("");
    const [selectedPainter, setSelectedPainter] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [selectedCollection, setSelectedCollection] = useState("");
    const [selectedProvenance, setSelectedProvenance] = useState("");
    const [selectedHeight, setSelectedHeight] = useState("");
    const [selectedDiameter, setSelectedDiameter] = useState("");

    const getVases = async () => {
        const response = await axios.get("http://localhost:8000/api/");
        setVases(response.data);
    };

    useEffect(() => {
        getVases();
    }, []);

    const uniqueFabrics = [...new Set(vases.map((vase) => vase.fabric))];
    const uniqueTechniques = [...new Set(vases.map((vase) => vase.technique))];
    const uniquePainters = [...new Set(vases.map((vase) => vase.painter))];
    const uniqueTypes = [...new Set(vases.map((vase) => vase.type))];
    const uniqueCollections = [...new Set(vases.map((vase) => vase.collection))];
    const uniqueProvenances = [...new Set(vases.map((vase) => vase.provenance))];
    const uniqueHeights = [...new Set(vases.map((vase) => vase.height))];
    const uniqueDiameters = [...new Set(vases.map((vase) => vase.diameter))];

    function clearFilters() {
        setSelectedFabric('');
        setSelectedTechnique('');
        setSelectedPainter('');
        setSelectedType('');
        setSelectedCollection('');
        setSelectedProvenance('');
        setSelectedHeight('');
        setSelectedDiameter('');
    }

    return (
        <>
            <Header />

            <HeroSection2 />

            <div className="flex justify-center items-center flex-wrap w-full">

                <div className="m-2 p-2 border-2 border-grey-500 rounded w-1/5">
                    <label htmlFor="fabric">Fabric:</label>
                    <select value={selectedFabric} onChange={(e) => setSelectedFabric(e.target.value)}>
                        <option value="">All</option>
                        {uniqueFabrics.map((fabric, index) => (
                            <option key={index} value={fabric}>{fabric}</option>
                        ))}
                    </select>
                </div>

                <div className="m-2 p-2 border-2 border-grey-500 rounded w-1/5">
                    <label htmlFor="technique">Technique:</label>
                    <select value={selectedTechnique} onChange={(e) => setSelectedTechnique(e.target.value)}>
                        <option value="">All</option>
                        {uniqueTechniques.map((technique, index) => (
                            <option key={index} value={technique}>{technique}</option>
                        ))}
                    </select>
                </div>

                <div className="m-2 p-2 border-2 border-grey-500 rounded w-1/5">
                    <label htmlFor="painter">Painter:</label>
                    <select value={selectedPainter} onChange={(e) => setSelectedPainter(e.target.value)}>
                        <option value="">All</option>
                        {uniquePainters.map((painter, index) => (
                            <option key={index} value={painter}>{painter}</option>
                        ))}
                    </select>
                </div>

                <div className="m-2 p-2 border-2 border-grey-500 rounded w-1/5">
                    <label htmlFor="type">Type:</label>
                    <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                        <option value="">All</option>
                        {uniqueTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                <div className="m-2 p-2 border-2 border-grey-500 rounded w-1/5">
                    <label htmlFor="collection">Collection:</label>
                    <select value={selectedCollection} onChange={(e) => setSelectedCollection(e.target.value)}>
                        <option value="">All</option>
                        {uniqueCollections.map((collection, index) => (
                            <option key={index} value={collection}>{collection}</option>
                        ))}
                    </select>
                </div>

                <div className="m-2 p-2 border-2 border-grey-500 rounded w-1/5">
                    <label htmlFor="provenance">Provenance:</label>
                    <select value={selectedProvenance} onChange={(e) => setSelectedProvenance(e.target.value)}>
                        <option value="">All</option>
                        {uniqueProvenances.map((provenance, index) => (
                            <option key={index} value={provenance}>{provenance}</option>
                        ))}
                    </select>
                </div>

                <div className="m-2 p-2 border-2 border-grey-500 rounded w-1/5">
                    <label htmlFor="height">Height:</label>
                    <select value={selectedHeight} onChange={(e) => setSelectedHeight(e.target.value)}>
                        <option value="">All</option>
                        {uniqueHeights.map((height, index) => (
                            <option key={index} value={height}>{height}</option>
                        ))}
                    </select>
                </div>

                <div className="m-2 p-2 border-2 border-grey-500 rounded w-1/5">
                    <label htmlFor="diameter">Diameter:</label>
                    <select value={selectedDiameter} onChange={(e) => setSelectedDiameter(e.target.value)}>
                        <option value="">All</option>
                        {uniqueDiameters.map((diameter, index) => (
                            <option key={index} value={diameter}>{diameter}</option>
                        ))}
                    </select>
                </div>

                <div className="m-2">
                    <button onClick={clearFilters} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Clear Filters
                    </button>
                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {vases.filter(vase =>
                    (selectedFabric === '' || vase.fabric === selectedFabric) &&
                    (selectedTechnique === '' || vase.technique === selectedTechnique) &&
                    (selectedPainter === '' || vase.painter === selectedPainter) &&
                    (selectedType === '' || vase.type === selectedType) &&
                    (selectedCollection === '' || vase.collection === selectedCollection) &&
                    (selectedProvenance === '' || vase.provenance === selectedProvenance) &&
                    (selectedHeight === '' || vase.height === selectedHeight) &&
                    (selectedDiameter === '' || vase.diameter === selectedDiameter)
                ).map((vase) => (
                    <VaseCard vase={vase} />
                ))}
            </div>

            <Footer />
        </>
    );
};

export default Gallery;
