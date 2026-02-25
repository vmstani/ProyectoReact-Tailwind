import { features } from "../common/constants"
import type { Feature } from "../types/type"


export const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mt-[140px] max-w-[920px] mx-auto">
        {
        features.map(({title, description, iconUrl}: Feature) => (
            <div key={title} className="flex flex-col items-center text-center">
                <img src={iconUrl} alt={title} className="w-16 h-16 object-contain" />
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm opacity-80">{description}</p>
            </div>
        ))} 
    </div>
  )
}