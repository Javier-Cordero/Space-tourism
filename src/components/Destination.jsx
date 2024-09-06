import { useEffect, useState } from "react"
import { useApi } from "../hooks/useApi"
export const Destination = () => {
  const [select, setSelect] = useState(null)
  const handleD = (destination) => { setSelect(destination) }
  const { destinations } = useApi()
  useEffect(()=>{
    if(destinations.length>0){
      const mars = destinations.find(d => d.name === 'Mars') || destinations[0]
      if(mars) setSelect(mars)
    }
  },[destinations])
  return (
    <div className="relative">
      <img src="/destination/background-destination-desktop.jpg" alt="imagen de fondo" className="w-screen h-screen" />
      <div className="absolute top-32 left-36 text-lg flex gap-5">
        <span className="font-bold text-slate-400">01</span>
        <span className="text-white">PICK YOUR DESTINATION</span>
      </div>
      <div className="flex absolute top-[200px] right-44 text-white">
        {
          destinations.map((destination, item) => (
            <div key={item} onClick={() => handleD(destination)} className="flex items-center justify-around px-5">
              <h2 className="text-lg font-normal cursor-pointer">{destination.name}</h2>
            </div>
          ))
        }
      </div>
      {select && (
        <div className="absolute bottom-20 right-44 grid gap-5 text-white w-80">
          <span className="text-7xl">{select.name}</span>
          <p>{select.description}</p>
          <div className="flex border-t-2 pt-2 justify-between">
            <div className="grid">
              <span className="text-sm">AVG DISTANCE</span>
              <span className="uppercase text-2xl">{select.distance}</span>
            </div>
            <div className="grid">
              <span className="text-sm">EST TRAVEL TIME</span>
              <span className="uppercase text-2xl">{select.travel}</span>
            </div>
          </div>
          <div className="absolute left-[-660px] top-[-80px]">
            <img src={select.images.png} alt="imagen del planeta" className="w-80" />
          </div>
        </div>
      )}
    </div>
  )
}
