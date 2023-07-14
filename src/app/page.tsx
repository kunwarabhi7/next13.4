
export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center'>
 <h1 className='mt-40'>Enter Your Name</h1>     
 <form className='flex flex-col'>
  <input type="text" placeholder='Enter your name' className='my-4' />
<button className="bg-cyan-600 w-20 mx-16 rounded-full" type='submit'>Enter</button>
 </form>
    </div>
  )
}
