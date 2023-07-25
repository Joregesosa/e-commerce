import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className=" flex items-center py-12">
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-50 md:rounded-none md:rounded-l-lg"
          src="https://projects.exeter.ac.uk/pwh201/CSS/pictures/gloss.jpg"
          alt=""
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">GLOSS</div>
        <p className="text-gray-700 text-base">
          Descripción de la tarjeta, puedes agregar texto aquí.
        </p>
        <p className="font-bold text-gray-800 mt-2">Precio: $99.99</p>
      </div>
      <div className="px-6 py-4">
        <button
          type="button"
          class="inline-block rounded-full bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase bg-red-500 "
        >
          + Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default Card;
