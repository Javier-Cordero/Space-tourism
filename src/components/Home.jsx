export const Home = () => {
  return (
    <div className="relative">
        <img src="home/background-home-desktop.jpg" alt="imagen de fondo" className="w-screen h-screen" />
        <button className=" absolute bottom-24 right-24 size-48 rounded-full bg-white font-semibold">EXPLORE</button>
        <div className="absolute bottom-24 left-24 size-72 grid">
            <span className="font-medium text-slate-500">SO, YOU WANT TO TRAVEL TO</span>
            <h1 className="font-normal text-8xl text-white">SPACE</h1>
            <p className="text-slate-500 text-sm">{`Let's face it: if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!`}</p>
        </div>
    </div>
  )
}
