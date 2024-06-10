

export default function Navbar(props: any) {

    console.log(props.useless)
  return (
    <div>
        <div 
        className={props.useless ?
            'hidden md:flex z-[28] w-[200%] absolute  justify-between items-center p-4 transition-all duration-1000 translate-x-[-50%] border-b-2 border-[#E7F0E0]' :
            'hidden md:flex z-[28] w-[200%] absolute  justify-between items-center p-4 transition-all duration-1000 translate-x-[0%] border-b-2 border-[#E7F0E0]'}>

            
            
            <div className='flex justify-center items-center gap-4'>
                <h1 className='xl:text-[64px] text-[48px] text-[#E7F0E0] font-notoserifdisplay transition-all duration-1000'>FactFL</h1>
                {/* <img className='size-8' src='public\closered.png'></img> */}
                <div 
                onClick={()=>{props.setShowInfoPageFunction()}}
                className='text-[32px] font-notoserifdisplay text-[#112304] aspect-square bg-[#E7F0E0] size-8 flex justify-center items-center rounded-full animate-customBounce'>i</div>
            </div>
            
            {/* a tags */}
            <div className='flex gap-6'>
                {/* placeholder */}
                <div className={props.useless ? 
                    'max-w-[100%] opacity-0 transition-all duration-1000' : 
                    'max-w-[0%] overflow-hidden opacity-0 transition-all duration-1000'}>
                    <a className={
                    props.useless ?
                    'xl:text-[24px] text-[20px] text-[#B8B8B8] transition-all duration-1000' :
                    'xl:text-[24px] text-[20px] text-[#112304] transition-all duration-1000'}>Useful</a>
                    <div
                    className={
                    props.useless ?
                    'w-[0%] h-0.5 bg-[#B8B8B8] transition-all duration-1000' :
                    'w-[100%] h-0.5 bg-[#112304] transition-all duration-1000'}></div>
                </div>

                <div className={props.useless ? 
                    'max-w-[100%]  opacity-0 transition-all duration-1000' : 
                    'max-w-[0%] overflow-hidden opacity-0  transition-all duration-1000'}>
                    <a className={
                    props.useless ?
                    'xl:text-[24px] text-[20px] text-[#2C0905] transition-all duration-1000' :
                    'xl:text-[24px] text-[20px] text-[#B8B8B8] transition-all duration-1000'}>Useless</a>
                    <div
                    className={
                    props.useless ?
                    'w-[100%] h-0.5 bg-[#2C0905] transition-all duration-1000' :
                    'w-[0%] h-0.5 bg-[#B8B8B8] transition-all duration-1000'}></div>
                </div>
                {/* placeholder */}


                <div >
                    <a 
                    onClick={()=>{
                        props.setUsefulFunction()
                    }}
                    className={
                    props.useless ?
                    'cursor-pointer xl:text-[24px] text-[20px] text-[#B8B8B8] transition-all duration-1000' :
                    'cursor-pointer xl:text-[24px] text-[20px] font-semibold text-[#112304] transition-all duration-1000'}>Useful</a>
                    <div
                    className={
                    props.useless ?
                    'cursor-pointer w-[0%] h-0.5 bg-[#B8B8B8] transition-all duration-1000' :
                    'cursor-pointer w-[100%] h-0.5 bg-[#112304] transition-all duration-1000'}></div>
                </div>

                <div className={props.useless? 'mr-0 transition-all duration-1000' : "mr-24 transition-all duration-1000"}>
                    <a 
                    onClick={()=>{
                        props.setUselessFunction()
                    }}
                    className={
                    props.useless ?
                    'cursor-pointer xl:text-[24px] text-[20px] font-semibold text-[#2C0905] transition-all duration-1000' :
                    'cursor-pointer xl:text-[24px] text-[20px] text-[#B8B8B8] transition-all duration-1000'}>Useless</a>
                    <div
                    className={
                    props.useless ?
                    'cursor-pointer w-[100%] h-0.5 bg-[#2C0905] transition-all duration-1000' :
                    'cursor-pointer w-[0%] h-0.5 bg-[#B8B8B8] transition-all duration-1000'}></div>
                </div>

                


            
            </div>
            {/* a tags */}

            <div className='flex justify-center items-center gap-4'>
                {/* <img className='size-8' src='public\closegreen.png'></img> */}
                <div 
                onClick={()=>{props.setShowInfoPageFunction()}}
                className='text-[32px] font-notoserifdisplay text-[#2C0905] aspect-square bg-[#E7F0E0] size-8 flex justify-center items-center rounded-full animate-customBounce'>i</div>
                <h1 className='xl:text-[64px] text-[48px] text-[#F2E4E2] font-notoserifdisplay transition-all duration-1000'>FactFL</h1>
            </div>

            
        </div>

        <div 
        className={props.useless ?
            'flex md:hidden z-[28] w-[200%] fixed backdrop-blur-md bg-[#2C0905] bg-opacity-75 justify-between items-center p-4 transition-all duration-1000 translate-x-[-50%] border-b-2 border-[#E7F0E0]' :
            'flex md:hidden z-[28] w-[200%] fixed backdrop-blur-md bg-[#112304] bg-opacity-50 justify-between items-center p-4 transition-all duration-1000 translate-x-[0%] border-b-2 border-[#E7F0E0]'}>

            
            
            <div className='flex justify-center items-center gap-4'>
                <h1 className='xl:text-[64px] sphone:text-[28px] text-[24px] text-[#E7F0E0] font-notoserifdisplay transition-all duration-1000'>FactFL</h1>
                {/* <img className='size-8' src='public\closered.png'></img> */}
                <div 
                onClick={()=>{props.setShowInfoPageFunction()}}
                className='text-[24px] font-notoserifdisplay text-[#112304] aspect-square bg-[#E7F0E0] size-6 flex justify-center items-center rounded-full animate-customBounce'>i</div>
            </div>
            

            {/* a tags */}
            <div className='flex gap-6'>
                {/* placeholder */}
                <div className={props.useless ? 
                    'max-w-[100%] opacity-0 transition-all duration-1000' : 
                    'max-w-[0%] overflow-hidden opacity-0 transition-all duration-1000'}>
                    <a className={
                    props.useless ?
                    'xl:text-[24px] sphone:text-[20px] text-[16px] text-[#b8b8b8bb] transition-all duration-1000' :
                    'xl:text-[24px] sphone:text-[20px] text-[16px] text-[#112304] transition-all duration-1000'}>Useful</a>
                    <div
                    className={
                    props.useless ?
                    'w-[0%] h-0.5 bg-[#b8b8b8bb] transition-all duration-1000' :
                    'w-[100%] h-0.5 bg-[#112304] transition-all duration-1000'}></div>
                </div>

                <div className={props.useless ? 
                    'max-w-[100%]  opacity-0 transition-all duration-1000' : 
                    'max-w-[0%] overflow-hidden opacity-0  transition-all duration-1000'}>
                    <a className={
                    props.useless ?
                    'xl:text-[24px] sphone:text-[20px] text-[16px] text-[#2C0905] transition-all duration-1000' :
                    'xl:text-[24px] sphone:text-[20px] text-[16px] text-[#b8b8b8bb] transition-all duration-1000'}>Useless</a>
                    <div
                    className={
                    props.useless ?
                    'w-[100%] h-0.5 bg-[#2C0905] transition-all duration-1000' :
                    'w-[0%] h-0.5 bg-[#b8b8b8bb] transition-all duration-1000'}></div>
                </div>
                {/* placeholder */}


                <div >
                    <a 
                    onClick={()=>{
                        props.setUsefulFunction()
                    }}
                    className={
                    props.useless ?
                    'cursor-pointer xl:text-[24px] sphone:text-[20px] text-[16px] text-[#b8b8b8bb] transition-all duration-1000' :
                    'cursor-pointer xl:text-[24px] sphone:text-[20px] text-[16px] font-semibold text-[#E7F0E0] transition-all duration-1000'}>Useful</a>
                    <div
                    className={
                    props.useless ?
                    'cursor-pointer w-[0%] h-0.5 bg-[#b8b8b8bb] transition-all duration-1000' :
                    'cursor-pointer w-[100%] h-0.5 bg-[#E7F0E0] transition-all duration-1000'}></div>
                </div>

                <div className={props.useless? 'mr-0 transition-all duration-1000' : "mr-24 transition-all duration-1000"}>
                    <a 
                    onClick={()=>{
                        props.setUselessFunction()
                    }}
                    className={
                    props.useless ?
                    'cursor-pointer xl:text-[24px] sphone:text-[20px] text-[16px] font-semibold text-[#E7F0E0] transition-all duration-1000' :
                    'cursor-pointer xl:text-[24px] sphone:text-[20px] text-[16px] text-[#b8b8b8bb] transition-all duration-1000'}>Useless</a>
                    <div
                    className={
                    props.useless ?
                    'cursor-pointer w-[100%] h-0.5 bg-[#E7F0E0] transition-all duration-1000' :
                    'cursor-pointer w-[0%] h-0.5 bg-[#b8b8b8bb] transition-all duration-1000'}></div>
                </div>
     
            </div>
            {/* a tags */}


            <div className='flex justify-center items-center gap-4'>
                {/* <img className='size-8' src='public\closegreen.png'></img> */}
                <div 
                onClick={()=>{props.setShowInfoPageFunction()}}
                className='text-[24px] font-notoserifdisplay text-[#2C0905] aspect-square bg-[#E7F0E0] size-6 flex justify-center items-center rounded-full animate-customBounce'>i</div>
                <h1 className='xl:text-[64px] sphone:text-[28px] text-[24px] text-[#F2E4E2] font-notoserifdisplay transition-all duration-1000'>FactFL</h1>
            </div>

            
        </div>
    </div>
  )
}
