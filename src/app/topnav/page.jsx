import Link from "next/link"
export default function(){
    return(
      <nav>
        <div className='flex-row bg-slate-600 justify-start box-border h-20 hover:box-content flex-wrap'>
          
            <h1 className='text-white hover:text-slate-500 ' > <Link href="/">Todo</Link></h1></div>
        
      </nav>
    )
}