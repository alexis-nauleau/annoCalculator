import Link from 'next/link';

const Header = () => {
    return (
        <nav className="bg-gray-900 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center w-[500px]">

                <Link href="/" className="text-gray-800 hover:text-white transition">Home</Link>
                <Link href="/chaine" className="text-gray-800 hover:text-white transition">Chaine</Link>
                <Link href="/objects" className="text-gray-800 hover:text-white transition">Objects</Link>

            </div>
        </nav>
    );
};

export default Header;