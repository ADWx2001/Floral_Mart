import 'boxicons/css/boxicons.min.css';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <div className='mt-0 p-0'>
        <div className='flex justify-between items-center max-w-7xl mx-auto p-7 '>
            <Link to='/' >
                <h1 className='text-black font-semibold text-3xl'>Flower Shop</h1>
            </Link>
            
            <ul className='flex gap-20 mt-5 text-xl font-semibold'>
                <Link to="/"><li>Home</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/sign-in"><li>Sign in</li></Link>
                <Link to="/categories"><li>Categories</li></Link>
                <Link to="/cart"><li><button><box-icon name='basket'></box-icon></button></li></Link>
            </ul>
        </div>

        <div className='h-15' >
            <div className='mx-auto px-80'>
                <ul className='flex mx-auto justify-between items-center'>
                    <li><button className='p-3 hover:bg-rose-500 hover:text-white rounded-md font-semibold'>Flowers</button></li>
                    <li><button className='p-3 hover:bg-rose-500 hover:text-white rounded-md font-semibold'>Chocolates</button></li>
                    <li><button className='p-3 hover:bg-rose-500 hover:text-white rounded-md font-semibold'>Gift Baskets</button></li>
                    <li><button className='p-3 hover:bg-rose-500 hover:text-white rounded-md font-semibold'>Cakes</button></li>
                    <li><button className='p-3 hover:bg-rose-500 hover:text-white rounded-md font-semibold'>Perfumes</button></li>
                </ul>
            </div>
        </div>

    </div>
  )
}
