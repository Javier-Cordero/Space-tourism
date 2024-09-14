import { useState } from "react"
import { useApi } from "../hooks/useApi"
import useSize from "../hooks/useSize"
export const Technology = () => {
  const { technology } = useApi()
  const { width } = useSize();
  const [page, setPage] = useState(1)
  const item = technology[page - 1]
  const number = Array.from({ length: technology.length }, (_, index) => index + 1);
  const handlePage = (pageNumber) => { setPage(pageNumber) }
  return (
    <div className="relative">
      <div className='bg-cover bg-center bg-[url(/technology/background-technology-mobile.jpg)] sm:bg-[url(/technology/background-technology-tablet.jpg)] lg:bg-[url(/technology/background-technology-desktop.jpg)] w-screen lg:h-screen'></div>
      <div className="absolute lg:top-[20%] lg:left-[11%] text-[20px] font-bold flex gap-5">
        <span className="text-slate-400">03</span>
        <span className="text-white">SPACE LAUNCH 101</span>
      </div>
      {
        item && (
          <div>
            <span className="absolute lg:top-[40%] lg:left-[19%] text-6xl text-white uppercase">{item.name}</span>
            <p className="absolute lg:top-[60%] lg:left-[19%] text-white w-[390px]">{item.description}</p>
            {
              width > 1024 ? <img src={item.images.portrait} alt="imagen de referencia" className="absolute lg:bottom-[7%] lg:right-0 w-96" /> :
                width < 1024 && width > 768 ? <img src={item.images.landscape} alt="imagen de referencia" className="absolute lg:bottom-[7%] lg:right-0" /> :
                  <img src={item.images.landscape} alt="imagen de referencia" className="absolute lg:bottom-[7%] lg:right-0" />
            }
            <div className="absolute lg:top-[38%] lg:left-[11%] grid place-content-between h-[300px]">
              {
                number.map(num => (<button key={num} onClick={() => handlePage(num)} className={`size-14 rounded-full border-[1px] border-white ${num === page ? 'bg-white text-black' : 'bg-transparent text-white'}`}>{num}</button>))
              }
            </div>
          </div>
        )
      }
    </div>
  )
}
