import React from 'react'
import "./Home.css"
import Navbar from '../components/Navbar'


export default function Home() {

  const [useless, setUseless] = React.useState(false)

  function setUselessFunction(){
    setUseless(true)
  }
  function setUsefulFunction(){
    setUseless(false)
  }

  const [showInfoPage, setShowInfoPage] = React.useState(false)

  function setShowInfoPageFunction(){
    setShowInfoPage(true)
  }

  const [dailyFact, setDailyFact] = React.useState("")
  const [usefulFact, setUsefulFact] = React.useState("")
  const [uselessFact, setUselessFact] = React.useState("")

  const [usefulFactClicked, setUsefulFactClicked] = React.useState(false)
  const [uselessFactClicked, setUselessFactClicked] = React.useState(false)

  const [loading, setLoading] = React.useState(false)

  console.log(dailyFact)
  console.log(usefulFact)
  console.log(uselessFact)
  

  React.useEffect(()=>{
    fetch('https://api.api-ninjas.com/v1/facts?',
      {
        method: 'get', 
        headers: {
            'X-Api-Key': "key",
        }, })
    .then((res)=>{return res.json()})
    .then((resdata)=>{console.log(resdata[0].fact);setUsefulFact(resdata[0].fact)});

    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
    .then((res)=>{return res.json()})
    .then((resdata)=>{console.log(resdata.text);setUselessFact(resdata.text)});

    fetch('https://uselessfacts.jsph.pl/api/v2/facts/today')
    .then((res)=>{return res.json()})
    .then((resdata)=>{console.log(resdata.text);setDailyFact(resdata.text)});    
  },[])

  function generateNewUselessFact(){
    setLoading(true)
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
    .then((res)=>{return res.json()})
    .then((resdata)=>{console.log(resdata.text);setUselessFact(resdata.text);setLoading(false)});
  }
  function generateNewUsefulFact(){
    setLoading(true)
    fetch('https://api.api-ninjas.com/v1/facts?',
      {
        method: 'get', 
        headers: {
            'X-Api-Key': "n8Fcrk4rWHzezuOD/7L1vw==uNXzs7BU4VASojEJ",
        }, })
    .then((res)=>{return res.json()})
    .then((resdata)=>{console.log(resdata[0].fact);setUsefulFact(resdata[0].fact);setLoading(false)});
  }

  return (
    <div className='w-full min-h-screen overflow-hidden'>

        <div className='hidden md:block'>
          {/* background */}
          <div className=' relative w-full h-full z-[10]'>
            <div 
            className={!useless ? 'wave1  transition-all duration-1000' : 'wave1 !right-[100%]  transition-all duration-1000'}></div>
            <div 
            className={!useless ? 'wave2  transition-all duration-1000' : 'wave2 !right-[100%]  transition-all duration-1000'}></div>
            <div 
            className={!useless ? 'wave3  transition-all duration-1000' : 'wave3 !right-[100%]  transition-all duration-1000'}></div>

            <div 
            className={useless ? 'wave4  transition-all duration-1000' : 'wave4 !left-[100%]  transition-all duration-1000'}></div>
            <div 
            className={useless ? 'wave5  transition-all duration-1000' : 'wave5 !left-[100%]  transition-all duration-1000'}></div>
            <div 
            className={useless ? 'wave6  transition-all duration-1000' : 'wave6 !left-[100%]  transition-all duration-1000'}></div>
          </div>
          {/* background */}

          <div className='relative w-full min-h-screen z-[12] '>
            <Navbar useless={useless} setUselessFunction = {setUselessFunction} setUsefulFunction={setUsefulFunction} setShowInfoPageFunction={setShowInfoPageFunction}/>

            {/* <button 
            onClick={()=>{setUseless(!useless)}}
            className='fixed top-[50%] right-[50%] bg-white z-[25]'>SWITCH</button> */}

            <div 
            className={
              useless ?
              'w-[150%]  overflow-hidden h-screen p-4 pt-36 flex justify-between transition-all duration-1000 translate-x-[-33.3%]' :
              'w-[150%]  overflow-hidden h-screen p-4 pt-36 flex justify-between transition-all duration-1000'}>

              {/* Green side */}
              <div className='w-[45%] p-8 h-full flex flex-col justify-around'>
                <h1 className='text-[#E7F0E0] xl:text-[64px] text-[48px] font-semibold text-center transition-all duration-1000'>Random useful fact generator</h1>
                <div>
                  <p className='text-[#E7F0E0] xl:text-[40px] text-[32px] font-medium transition-all duration-1000'>Random fact of the day:</p>
                  <p className='text-[#CAD9C0] xl:text-[32px] text-[24px] font-medium transition-all duration-1000'>{dailyFact.length > 0 ? dailyFact : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}</p>
                </div>
              </div>
              {/* Green side */}


              {/* fact container */}
              <div 
              className={ useless ?
                'w-[45%] h-full p-4 pr-16 z-[16] transition-all duration-1000' :
                'w-[45%] h-full p-4 pl-16 z-[16] transition-all duration-1000'}>
                <div className={ useless ?
                  'w-full p-4 flex gap-4 flex-col justify-between items-center h-full border-4 bg-white bg-opacity-55 backdrop-blur-2xl border-[#2C0905] rounded-[8px] transition-all duration-1000' :
                  'w-full p-4 flex gap-4 flex-col justify-between items-center h-full border-4 bg-white bg-opacity-55 backdrop-blur-2xl border-[#112304] rounded-[8px] transition-all duration-1000'}>
                    <div className='flex flex-col justify-center items-center gap-4 h-full'>
                      <h1
                      className={useless?
                        "text-[#2C0905] xl:text-[40px] text-[32px] font-notosansdisplay font-semibold underline text-center transition-all duration-1000" :
                        "text-[#112304] xl:text-[40px] text-[32px] font-notosansdisplay font-semibold underline text-center transition-all duration-1000"}
                      >{useless? "Generated random useless fact:" : "Generated random useful fact:"}</h1>

                      <div className=' overflow-y-auto h-full'>
                        <p className={useless && uselessFactClicked && !loading  ?
                          'text-[#2C0905] xl:text-[32px] text-[24px] h-full font-notosansdisplay font-semibold transition-all duration-1000' :
                          !useless && usefulFactClicked && !loading  ?
                          'text-[#112304] xl:text-[32px] text-[24px] h-full font-notosansdisplay font-semibold transition-all duration-1000' :
                          'text-[#B8B8B8] xl:text-[32px] text-[24px] h-full font-notosansdisplay font-semibold transition-all duration-1000'
                          }>
                          {
                          useless && uselessFact.length > 0 ? 
                          uselessFact : 
                          !useless && usefulFact.length > 0 ? 
                          usefulFact :
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                          }
                          
                        </p>
                      </div>

                      <div 
                        className={
                          useless ?
                          `${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} px-4 py-1 relative gap-2 w-fit border-[3px] border-[#2C0905] rounded-[8px] flex justify-center items-center transition-all duration-1000` :
                          `${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} px-4 py-1 relative gap-2 w-fit border-[3px] border-[#112304] rounded-[8px] flex justify-center items-center transition-all duration-1000`}
                        onClick={()=>{
                          if(!loading){
                            if(useless){
                              generateNewUselessFact()
                              setUselessFactClicked(true)
                            }
                            else if(!useless){
                              generateNewUsefulFact()
                              setUsefulFactClicked(true)
                            }
                          }
                        }}
                        
                        >
                        <h1 className={
                          useless ?
                          'font-notosansdisplay xl:text-[32px] text-[24px] font-medium text-[#2C0905] transition-all duration-1000' :
                          'font-notosansdisplay xl:text-[32px] text-[24px] font-medium text-[#112304] transition-all duration-1000'}
                          
                          >Generate</h1>

                        <img 
                        className='transition-all duration-1000'
                        src={useless ? './public/penred.png' : './public/pengreen.png'}></img>

                        
                      </div>
                        
                        {loading &&
                        <div className='absolute size-16 bottom-[50%] right-[50%] translate-x-[50%] translate-y-[50%] rounded-full'>
                          <img 
                          src='public\loadIndicatordd.png'
                          className='rounded-full animate-spinLoading'></img>
                        </div>}
                    </div>

                    
                </div>
              </div>
              {/* fact container */}
              

              {/* Red side */}
              <div className='w-[45%] p-8 h-full flex flex-col justify-around'>
                <h1 className='text-[#F2E4E2] xl:text-[64px] text-[48px] font-semibold text-center transition-all duration-1000'>Random useful fact generator</h1>
                <div>
                  <p className='text-[#F2E4E2] xl:text-[40px] text-[32px] font-medium transition-all duration-1000'>Random fact of the day:</p>
                  <p className='text-[#E3CDCB] xl:text-[32px] text-[24px] font-medium transition-all duration-1000'>{dailyFact.length > 0 ? dailyFact : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}</p>
                </div>
              </div>
              {/* Red side */}

    
            </div>


            {/* Footer */}
            <div
              className={ showInfoPage ?
                `z-[32] flex justify-center items-center p-10 fixed bottom-0 right-[50%] translate-x-[50%] max-h-[150px] overflow-hidden bg-[rgb(255,255,255,0.75)] backdrop-blur-[64px] w-full transition-all duration-1000 border-t-4 ${useless ? "border-[#2C0905]":"border-[#112304]"}` :
                `z-[32] flex justify-center items-center p-0 fixed bottom-0 right-[50%] translate-x-[50%] max-h-[0px] overflow-hidden bg-[rgb(255,255,255,0.0)] backdrop-blur-[0px] w-full transition-all duration-1000 ${useless ? "border-[#2C0905]":"border-[#112304]"}`}
              >
              <img 
              className={
                `absolute right-[8px] top-[8px] size-8 rounded-t-[8px] transition-all duration-1000`}
                
              src={useless ? 'public/closered.png': 'public/closegreen.png'}
              onClick={()=>{setShowInfoPage(!showInfoPage)}}>
              </img>
              
              <h1 className={`overflow-hidden h-full flex justify-center items-center ${useless ? "text-[#2C0905]":"text-[#112304]"} font-notoserif font-medium text-[20px]`}>
                <span>
                APIs used in this project are: <br></br>
                <a href='https://uselessfacts.jsph.pl' 
                className='underline' 
                target='_blank'> Uselessfacts</a> by<span> </span>
                <a href='https://jsph.pl' 
                className='underline'  
                target='_blank'>jsph.pl</a>, and<span> </span>
                <a href='https://api-ninjas.com/api/facts' 
                className='underline'
                target='_blank'>Facts API</a> by<span> </span>
                <a href='https://api-ninjas.com' 
                className='underline'
                target='_blank'> API Ninjas</a>. <br></br>
                This web app is designed and developed by<span> </span>
                <a href='https://ammarabdelwadoudv2.netlify.app' 
                className='underline'
                target='_blank'>Ammar Abdelwadoud</a>.
                </span>
              </h1>
            </div>
            {/* Footer */}

          </div>
        </div>

        <div className='md:hidden'>

          <div className=' relative w-full h-full z-[10]'>
              <div 
              className={!useless ? 'wave10  transition-all duration-1000' : 'wave7 transition-all duration-1000'}></div>
              <div 
              className={!useless ? 'wave11  transition-all duration-1000' : 'wave8  transition-all duration-1000'}></div>
              <div 
              className={!useless ? 'wave12  transition-all duration-1000' : 'wave9  transition-all duration-1000'}></div>
          </div>

          <div className='relative w-full min-h-screen z-[12] '>
            <Navbar useless={useless} setUselessFunction = {setUselessFunction} setUsefulFunction={setUsefulFunction} setShowInfoPageFunction={setShowInfoPageFunction}/>

            <div className='pt-[76px]'></div>

            <div className={'w-full p-0 flex flex-col phone:gap-16 gap-8 pb-[76px]'}>
              <div className={
                useless ?
                `flex phone:gap-16 gap-12 flex-col bg-[#2C0905] bg-opacity-55 backdrop-blur-lg phone:p-16 p-4 rounded-[8px] transition-all duration-1000` :
                `flex phone:gap-16 gap-12 flex-col bg-[#112304] bg-opacity-55 backdrop-blur-lg phone:p-16 p-4 rounded-[8px] transition-all duration-1000`}>
                <h1 className={
                  useless ?
                  `text-[#F2E4E2] text-[40px] font-semibold text-center transition-all duration-1000` :
                  `text-[#E7F0E0] text-[40px] font-semibold text-center transition-all duration-1000`}>Random useful fact generator</h1>
                <div>
                  <p className={
                    useless ?
                    `text-[#F2E4E2] text-[24px] font-semibold transition-all duration-1000` :
                    `text-[#E7F0E0] text-[24px] font-semibold transition-all duration-1000`}>Random fact of the day:</p>
                  <p className={
                    useless ?
                    `text-[#E3CDCB] text-[16px] font-semibold transition-all duration-1000` :
                    `text-[#CAD9C0] text-[16px] font-semibold transition-all duration-1000`}>{dailyFact.length > 0 ? dailyFact : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}</p>
                </div>
              </div>

              

              <div 
              className={ useless ?
                'p-4 z-[16] transition-all duration-1000' :
                'p-4 z-[16] transition-all duration-1000'}>
                <div className={ useless ?
                  'w-full p-4 flex gap-4 flex-col justify-between items-center h-full border-4 bg-white bg-opacity-55 backdrop-blur-2xl border-[#2C0905] rounded-[8px] transition-all duration-1000' :
                  'w-full p-4 flex gap-4 flex-col justify-between items-center h-full border-4 bg-white bg-opacity-55 backdrop-blur-2xl border-[#112304] rounded-[8px] transition-all duration-1000'}>
                    <div className='flex flex-col justify-center items-center gap-4 h-full'>
                      <h1
                      className={useless?
                        "text-[#2C0905] xl:text-[40px] text-[32px] font-notosansdisplay font-semibold underline text-center transition-all duration-1000" :
                        "text-[#112304] xl:text-[40px] text-[32px] font-notosansdisplay font-semibold underline text-center transition-all duration-1000"}
                      >{useless? "Generated random useless fact:" : "Generated random useful fact:"}</h1>

                      <div className=' overflow-y-auto h-full'>
                        <p className={useless && uselessFactClicked && !loading  ?
                          'text-[#2C0905] xl:text-[32px] text-[24px] h-full font-notosansdisplay font-semibold transition-all duration-1000' :
                          !useless && usefulFactClicked && !loading  ?
                          'text-[#112304] xl:text-[32px] text-[24px] h-full font-notosansdisplay font-semibold transition-all duration-1000' :
                          'text-[#535353] xl:text-[32px] text-[24px] h-full font-notosansdisplay font-semibold transition-all duration-1000'
                          }>
                          {
                          useless && uselessFact.length > 0 ? 
                          uselessFact : 
                          !useless && usefulFact.length > 0 ? 
                          usefulFact :
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                          }
                          
                        </p>
                      </div>

                      <div 
                        className={
                          useless ?
                          `${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} px-4 py-1 relative gap-2 w-fit border-[3px] border-[#2C0905] rounded-[8px] flex justify-center items-center transition-all duration-1000` :
                          `${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} px-4 py-1 relative gap-2 w-fit border-[3px] border-[#112304] rounded-[8px] flex justify-center items-center transition-all duration-1000`}
                        onClick={()=>{
                          if(!loading){
                            if(useless){
                              generateNewUselessFact()
                              setUselessFactClicked(true)
                            }
                            else if(!useless){
                              generateNewUsefulFact()
                              setUsefulFactClicked(true)
                            }
                          }
                        }}
                        
                        >
                        <h1 className={
                          useless ?
                          'font-notosansdisplay xl:text-[32px] text-[24px] font-medium text-[#2C0905] transition-all duration-1000' :
                          'font-notosansdisplay xl:text-[32px] text-[24px] font-medium text-[#112304] transition-all duration-1000'}
                          
                          >Generate</h1>

                        <img 
                        className='transition-all duration-1000'
                        src={useless ? './public/penred.png' : './public/pengreen.png'}></img>

                        
                      </div>
                        
                        {loading &&
                        <div className='absolute size-16 bottom-[50%] right-[50%] translate-x-[50%] translate-y-[50%] rounded-full'>
                          <img 
                          src='public\loadIndicatordd.png'
                          className='rounded-full animate-spinLoading'></img>
                        </div>}
                    </div>

                    
                </div>
              </div>


            </div>



            {/* Footer */}
            <div
              className={ showInfoPage ?
                `z-[32] flex justify-center items-center p-10 fixed bottom-0 right-[50%] translate-x-[50%] h-[100%] overflow-hidden bg-[rgb(255,255,255,0.75)] backdrop-blur-[64px] w-full transition-all duration-1000 ${useless ? "border-[#2C0905]":"border-[#112304]"}` :
                `z-[32] flex justify-center items-center p-0 fixed bottom-0 right-[50%] translate-x-[50%] h-[0%] overflow-hidden bg-[rgb(255,255,255,0.0)] backdrop-blur-[0px] w-full transition-all duration-1000 ${useless ? "border-[#2C0905]":"border-[#112304]"}`}
              >
              <img 
              className={
                `absolute right-[8px] top-[8px] size-8 rounded-t-[8px] transition-all duration-1000`}
                
              src={useless ? 'public/closered.png': 'public/closegreen.png'}
              onClick={()=>{setShowInfoPage(!showInfoPage)}}>
              </img>
              
              <h1 className={`overflow-hidden h-full flex justify-center items-center ${useless ? "text-[#2C0905]":"text-[#112304]"} font-notoserif font-medium text-[20px]`}>
              <span>
                APIs used in this project are: <br></br>
                <a href='https://uselessfacts.jsph.pl' 
                className='underline' 
                target='_blank'> Uselessfacts</a> by<span> </span>
                <a href='https://jsph.pl' 
                className='underline'  
                target='_blank'>jsph.pl</a>, and<span> </span>
                <a href='https://api-ninjas.com/api/facts' 
                className='underline'
                target='_blank'>Facts API</a> by<span> </span>
                <a href='https://api-ninjas.com' 
                className='underline'
                target='_blank'> API Ninjas</a>. <br></br>
                This web app is designed and developed by<span> </span>
                <a href='https://ammarabdelwadoudv2.netlify.app' 
                className='underline'
                target='_blank'>Ammar Abdelwadoud</a>.
                </span>
              </h1>
            </div>
            {/* Footer */}
          </div>

        </div>

    </div>
  )
}
