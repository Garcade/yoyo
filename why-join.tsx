import Head from 'next/head';

export default function WhyJoin() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Head>
        <title>Why Join GArcade</title>
      </Head>
      <h1 className="text-4xl font-bold mb-4">Why You Should Join Arcade</h1>
      <ul className="list-disc ml-6 space-y-3">
        <li>🚀 Be part of Google's official facilitator program</li>
        <li>🎓 Get guided learning paths and badges</li>
        <li>🌍 Network with students, professionals, and Googlers</li>
        <li>🎁 Win swag, certificates, and career opportunities</li>
        <li>🔗 <a href="https://goo.gle/arcade" className="text-green-400 underline">Join the Arcade Program</a></li>
      </ul>
    </div>
  );
}
