import Link from 'next/link';

export default function Header() {
    return (
        <header className="w-full text-white py-6 text-center font-bold lg:text-4xl text-2xl bg-pink-400">
            <nav>
                <Link href="/" className="mr-6">Home</Link>
                <Link href="/about" className="mr-6">About</Link>
                <Link href="/services" className="mr-6">Services</Link>
                <Link href="/contact" >Contact</Link>
            </nav>
        </header>
    );
}
