import Link from 'next/link';
import  {  LogoutBtn, } from './components/clientComp'
export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center flex-col  bg-black">
      <h1 className="text-white text-2xl mb-3  "> your most welcome  here! 🤷‍♂️ </h1>
      <h1 className="text-white text-xl mb-3  "> This is just for testing purpose  </h1>

      <LogoutBtn/>
      
      <Link href={'/profile'}>
        <button className='px-16 py-4 bg-white mt-4  hover:bg-orange-400'  style={{ borderRadius: "50px", boxShadow:"2px 2p 10px 10px #fff" }}>
          Profile 🧑‍💻
        </button>
      </Link>
      

    </main>
  );
}
