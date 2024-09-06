import { useState } from "react"
import { useApi } from "../hooks/useApi"
export const Destination = () => {
  const { destinations } = useApi()
  const [destinationPage, setDestinationPage] = useState(1)
  const destinationItem = destinations[destinationPage - 1]
  const handlePage = (pageNumber) => { setDestinationPage(pageNumber) }
  return (
    <div className="relative">
      <img src="/destination/background-destination-desktop.jpg" alt="imagen de fondo" className="w-screen h-screen" />
      <div className="absolute top-32 left-36 text-lg flex gap-5">
        <span className="font-bold text-slate-400">01</span>
        <span className="text-white">PICK YOUR DESTINATION</span>
      </div>
      {
        destinationItem && (
          <div>
            <div className="flex justify-between w-64 absolute top-32 left-[63%]">
              {
                destinations.map((num,item) => (<button key={item} onClick={() => handlePage(item+1)} className={`${item+1 === destinationPage ? 'border-b-2' : ''} py-2 uppercase text-white`}>{num.name}</button>))
              }
            </div>
            <span className="absolute top-56 left-[63%] font-normal text-9xl text-white">{destinationItem.name}</span>
            <p className="absolute top-[55%] left-[63%] w-96 text-slate-400">{destinationItem.description}</p>
            <div className="h-1 w-96 bg-slate-400 absolute bottom-40 left-[63%]"></div>
            <span className="absolute bottom-32 left-[63%] font-medium text-slate-400">AVG DISTANCE</span>
            <span className="uppercase text-2xl absolute bottom-20 left-[63%] font-medium text-white">{destinationItem.distance}</span>
            <span className="absolute bottom-32 left-[80%] font-medium text-slate-400">EST. TRAVEL TIME</span>
            <span className="uppercase text-2xl absolute bottom-20 left-[80%] text-white">{destinationItem.travel}</span>
            <img src={destinationItem.images.png} alt="imagen de destino" className="w-80 absolute top-56 left-36" />
          </div>
        )
      }
    </div>
  )
}
