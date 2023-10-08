import React from "react";

export default function MyGrid() {
  return (
    <div>
      
      <div className="bg-gray-400 bg-opacity-20 mt-5">
        <div className="grid grid-cols-3  gap-4 ml-2 mr-2 mt-3 mb-2 ">
          <div>
            <div className="w-8 h-8 rounded-full bg-red-500 text-white  top-2 right-2">Fila 2</div>
            <img className="h-14 w-14" src="/logotipo.png" alt="Logo" />
          
          </div>

          <div>
            <div className="">Fila 2</div>
            <img className="h-14 w-14" src="/logotipo.png" alt="Logo" />
          </div>
          <div>
            <div className="">Fila 2</div>
            <img className="h-14 w-14" src="/logotipo.png" alt="Logo" />
          </div>
        </div>
      </div>

      <div className="bg-gray-400 bg-opacity-20 mt-5">
        <div className="grid grid-cols-3  gap-4 ml-2 mr-2 mt-3 mb-2 ">
          <div>
            <img className="h-14 w-14" src="/logotipo.png" alt="Logo" />
          </div>

          <div>
            <div className="">Fila 2</div>
          </div>
          <div>
            <img className="h-14 w-14" src="/logotipo.png" alt="Logo" />
          </div>
        </div>
      </div>
      
      <div className="bg-gray-400 bg-opacity-20 mt-5">
        <div className="grid grid-cols-3  gap-4 ml-2 mr-2 mt-3 mb-2 ">
          <div>
            <img className="h-14 w-14" src="/logotipo.png" alt="Logo" />
          </div>

          <div>
            <div className="">Fila 2</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
