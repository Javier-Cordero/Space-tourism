import { useState } from "react"
import { useApi } from "../hooks/useApi"
export const Destination = () => {
  const { destination } = useApi()
  const [page, setPage] = useState(1)
  const item = destination[page - 1]
  const handlePage = (pageNumber) => { setPage(pageNumber) }
  return (
    <div className="relative">
      <div className='bg-cover bg-center bg-[url(/destination/background-destination-mobile.jpg)] sm:bg-[url(/destination/background-destination-tablet.jpg)] lg:bg-[url(/destination/background-destination-desktop.jpg)] w-screen lg:h-screen'></div>
      <div className="absolute lg:top-[18%] lg:left-[11%] text-[20px] font-bold flex gap-5">
        <span className="text-slate-400">01</span>
        <span className="text-white">PICK YOUR DESTINATION</span>
      </div>
      {
        item && (
          <div>
            <span className="absolute lg:top-[30%] lg:left-[62%] font-normal text-9xl text-white">{item.name}</span>
            <p className="absolute lg:top-[52%] lg:left-[63%] w-96 text-slate-400">{item.description}</p>
            <div className="absolute lg:top-[75%] lg:left-[63%] h-1 w-96 bg-[#ffffff1a]"></div>
            <span className="absolute lg:top-[77%] lg:left-[63%] font-medium text-slate-400">AVG DISTANCE</span>
            <span className="absolute lg:top-[81%] lg:left-[63%] uppercase text-2xl font-medium text-white">{item.distance}</span>
            <span className="absolute lg:top-[77%] lg:left-[80%] font-medium text-slate-400">EST. TRAVEL TIME</span>
            <span className="absolute lg:top-[81%] lg:left-[80%] uppercase text-2xl text-white">{item.travel}</span>
            <img src={item.images.png} alt="imagen de destino" className="absolute lg:top-[28%] lg:left-[10%]" />
            <div className="absolute lg:top-[20%] lg:left-[63%] flex justify-between w-64">
              {
                destination.map((num, item) => (<button key={item} onClick={() => handlePage(item + 1)} className={`${item + 1 === page ? 'border-b-2' : ''} py-2 uppercase text-white`}>{num.name}</button>))
              }
            </div>
          </div>
        )
      }
    </div>
  )
}
