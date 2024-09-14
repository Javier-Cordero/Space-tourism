export const Home = () => {
  return (
    <div className="relative">
      <div className='bg-cover bg-center bg-[url(/home/background-home-mobile.jpg)] sm:bg-[url(/home/background-home-tablet.jpg)] lg:bg-[url(/home/background-home-desktop.jpg)] w-screen lg:h-screen'></div>
      <button className=" absolute lg:bottom-[15%] lg:right-[10%] size-48 rounded-full bg-white font-semibold">EXPLORE</button>
      <span className="absolute lg:top-[30%] lg:left-[12%] font-medium text-slate-500">SO, YOU WANT TO TRAVEL TO</span>
      <h1 className="absolute lg:top-[35%] lg:left-[12%] font-normal text-8xl text-white">SPACE</h1>
      <p className="absolute lg:top-[53%] lg:left-[12%] w-[300px] text-slate-500 text-sm">{`Let's face it: if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!`}</p>
    </div>
  )
}
