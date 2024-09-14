import { useState } from "react"
import { useApi } from "../hooks/useApi"
import useSize from "../hooks/useSize"
export const Crew = () => {
    const { crew } = useApi()
    const { width } = useSize()
    const [page, setPage] = useState(1)
    const item = crew[page - 1]
    const number = Array.from({ length: crew.length }, (_, index) => index + 1);
    const handlePage = (pageNumber) => { setPage(pageNumber) }
    return (
        <div className="relative">
            <div className='bg-cover bg-center bg-[url(/crew/background-crew-mobile.jpg)] sm:bg-[url(/crew/background-crew-tablet.jpg)] lg:bg-[url(/crew/background-crew-desktop.jpg)] w-screen lg:h-screen'></div>
            <div className="absolute lg:top-[20%] lg:left-[11%] text-[20px] font-bold flex gap-5">
                <span className="text-slate-400">02</span>
                <span className="text-white">MEET YOUR CREW</span>
            </div>
            {
                item && (
                    <div>
                        <span className="absolute lg:top-[30%] lg:left-[11%] text-4xl text-slate-500 uppercase font-extralight">{item.role}</span>
                        <span className="absolute lg:top-[37%] lg:left-[11%] text-6xl text-white uppercase">{item.name}</span>
                        <p className="absolute lg:top-[55%] lg:left-[11%] text-white w-[390px]">{item.bio}</p>
                        {/* <img src={item.images.png} alt="imagen de crew" className="absolute lg:bottom-0 lg:left-[65%] lg:w-[25%]" /> */}
                        {
                            width > 1024 ? <img src={item.images.portrait} alt="imagen de referencia" className="absolute lg:bottom-[7%] lg:right-0" /> :
                                width < 1024 && width > 768 ? <img src={item.images.landscape} alt="imagen de referencia" className="absolute lg:bottom-[7%] lg:right-0" /> :
                                    <img src={item.images.landscape} alt="imagen de referencia" className="absolute lg:bottom-[7%] lg:right-0" />
                        }
                        <div className="absolute lg:top-[80%] lg:left-[11%] flex justify-around w-[200px] pt-20">
                            {
                                number.map(num => (<button key={num} onClick={() => handlePage(num)} className={`size-3 rounded-full ${num === page ? 'bg-white' : 'bg-slate-600'}`}></button>))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}