import { useState } from "react"
import { useApi } from "../hooks/useApi"
export const Crew = () => {
    const { crew } = useApi()
    const [crewPage, setCrewPage] = useState(1)
    const crewItem = crew[crewPage - 1]
    const Page = crew.length
    const number = Array.from({ length: Page }, (_, index) => index + 1);
    const handlePage = (pageNumber) => { setCrewPage(pageNumber) }
    return (
        <div className="relative">
            <img src="/crew/background-crew-desktop.jpg" alt="imagen de fondo" className="w-screen h-screen" />
            <div className="absolute top-32 left-36 text-lg flex gap-5">
                <span className="font-bold text-slate-400">02</span>
                <span className="text-white">MEET YOUR CREW</span>
            </div>
            {
                crewItem && (
                    <div>
                        <span className="text-4xl text-slate-500 uppercase font-extralight absolute top-52 left-32">{crewItem.role}</span>
                        <span className="text-6xl text-white uppercase absolute top-64 left-32">{crewItem.name}</span>
                        <p className="text-white w-[390px] absolute top-96 left-32">{crewItem.bio}</p>
                        <div className="flex justify-around w-[200px] pt-20 absolute bottom-10 left-32">
                            {
                                number.map(num => (<button key={num} onClick={() => handlePage(num)} className={`size-3 rounded-full ${num === crewPage ? 'bg-white' : 'bg-slate-600'}`}></button>))
                            }
                        </div>
                        <img src={crewItem.images.png} alt="imagen de crew" className="w-80 absolute bottom-0 right-36" />
                    </div>
                )
            }
        </div>
    )
}