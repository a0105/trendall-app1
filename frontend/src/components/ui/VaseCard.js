import React from "react";

const VaseCard = ({ vase }) => {
  return (
    <div className="flex max-w-sm flex-col overflow-hidden rounded-lg bg-white shadow">
      {/* card cover */}
      <img
        className="h-56 w-full object-cover"
        src={vase.image}
        alt={`Vase ${vase.number}`}
      />
      {/* end card cover */}

      {/* card content */}
      <div className="flex-1 px-6 py-4">
        <h2 className="mb-2 text-xl font-bold">Vase #{vase.number}</h2>
        <p className="text-base text-gray-700">Fabric: {vase.fabric}</p>
        <p className="text-base text-gray-700">Technique: {vase.technique}</p>
        <p className="text-base text-gray-700">Painter: {vase.painter}</p>
        <p className="text-base text-gray-700">Type: {vase.type}</p>
        <p className="text-base text-gray-700">Collection: {vase.collection}</p>
        <p className="text-base text-gray-700">Provenance: {vase.provenance}</p>
        <p className="text-base text-gray-700">Height: {vase.height}</p>
        <p className="text-base text-gray-700">Diameter: {vase.diameter}</p>
      </div>
      {/* end card content */}

      {/* card footer */}
      <div className="bg-gray-100 px-6 py-4">
        <button
          type="button"
          className="rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none"
        >
          Action
        </button>
      </div>
      {/* end card footer */}
    </div>
  );
};

export default VaseCard;
