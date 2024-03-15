import Link from 'next/link';
import  {  LogoutBtn, } from './components/clientComp'
export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center flex-col  bg-black">
      <h1 className="text-white text-2xl mb-3  ">welcome to learn next authentication</h1>

      <LogoutBtn/>
      
      <Link href={'/profile'}>
        <button className='px-16 py-4 bg-white mt-4  hover:bg-orange-400'  style={{ borderRadius: "50px", boxShadow:"2px 2p 10px 10px #fff" }}>
          profile
        </button>
      </Link>
      

    </main>
  );
}
