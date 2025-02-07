import Link from 'next/link';

const Header = () => {
    return (
        <nav className="bg-gray-900 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center w-[500px]">
                <Link href="/" className="text-white hover:text-blue-400 transition">Home</Link>
                <Link href="/chaine" className="text-white hover:text-blue-400 transition">Chaine</Link>
                <Link href="/objects" className="text-white hover:text-blue-400 transition">Objects</Link>
                <Link href="/calculator" className="text-white hover:text-blue-400 transition">Calculator</Link>
            </div>
        </nav>
    );
};

export default Header;
