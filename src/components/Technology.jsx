import { useApi } from "../hooks/useApi"
export const Technology = () => {
  const { technology } = useApi()
  return (
    <div>
      <img src="/technology/background-technology-desktop.jpg" alt="imagen de fondo" className="w-screen h-screen" />
    </div>
  )
}
