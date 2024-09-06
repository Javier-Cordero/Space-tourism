import { useState } from "react"
import { useApi } from "../hooks/useApi"
export const Technology = () => {
  const { technology } = useApi()
  const [technologyPage, setTechnologyPage] = useState(1)
  const technologyItem = technology[technologyPage - 1]
  const Page = technology.length
  const number = Array.from({ length: Page }, (_, index) => index + 1);
  const handlePage = (pageNumber) => { setTechnologyPage(pageNumber) }
  console.log(technologyItem)
  return (
    <div className="relative">
      <img src="/technology/background-technology-desktop.jpg" alt="imagen de fondo" className="w-screen h-screen" />
      <div className="absolute top-32 left-36 text-lg flex gap-5">
        <span className="font-bold text-slate-400">03</span>
        <span className="text-white">SPACE LAUNCH 101</span>
      </div>
      {
        technologyItem && (
          <div>
            <span className="text-6xl text-white uppercase absolute top-64 left-64">{technologyItem.name}</span>
            <p className="text-white w-[390px] absolute top-96 left-64">{technologyItem.description}</p>
            <div className="grid place-content-between h-[300px] absolute top-64 left-36">
              {
                number.map(num => (<button key={num} onClick={() => handlePage(num)} className={`size-14 rounded-full border-[1px] border-white ${num === technologyPage ? 'bg-white text-black' : 'bg-transparent text-white'}`}>{num}</button>))
              }
            </div>
            <img src={technologyItem.images.portrait} alt="imagen de crew" className="w-96 absolute bottom-14 right-0" />
          </div>
        )
      }
    </div>
  )
}
