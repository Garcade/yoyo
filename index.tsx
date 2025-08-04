import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
      <Head>
        <title>GArcade | Home</title>
      </Head>
      <img src="/logo.png" alt="GArcade Logo" className="w-32 h-32 mb-6" />
      <h1 className="text-4xl font-bold mb-4">Welcome to GArcade</h1>
      <p className="mb-8 text-lg text-center px-4">
        Join the next generation of learners and developers with Google Arcade.
      </p>
      <Link href="/why-join">
        <a className="bg-green-500 px-6 py-3 rounded-xl text-white font-semibold hover:bg-green-600 transition">
          Why Join Arcade?
        </a>
      </Link>
    </div>
  );
}
