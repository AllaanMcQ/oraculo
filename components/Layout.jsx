import Link from "next/link";
import { HIProfile, HINotification,HIHome } from "./Icons";

export function Navbar() {
  return (
    <nav className="  bg-gradient-to-r from-blue-200 to-blue-500 dark:bg-gray-800">

      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
      <Link className="grid" href="#"><HIHome style="justify-self-center h-12 fill-gray-500 dark:fill-white" /></Link>
                   
      <Link href="/" className="flex items-center "> {/* Agregar ml-4 para mover a la derecha */}
  <img className="h-14 w-14" src="/logotipo.png" alt="Logo" />
</Link>

        <div className="font-medium flex flex-row space-x-8 mt-0 p-0">
          <div className="flex items-center">
            <Link
              href="#"
              className="relative left-28 border-0 hover:text-blue-700 p-0 dark:text-white ml-4"
            >
              <HINotification style="h-8   fill-yellow-300 dark:fill-white" />
              <span className="absolute bottom-0 left-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                1
              </span>
            </Link>
            <span className="text-gray-500 dark:text-gray-400 ml-2 mt-3 mb-16">Alan Medina</span>
          </div>
          <Link
            href="#"
            className="relative border-0 hover:text-blue-700 p-0 dark:text-white"
          >
            <HIProfile style="h-12 fill-gray-500 dark:fill-white" />
           
          </Link>
        </div>
      </div>
    </nav>
  );
}
