import { ContactItem } from "./contact-item"
import { FooterListItem } from "./footer-list-item"
import { contactInformation, pages, conditions, media } from "../../common/constants"
import type { Media } from "../../types/type"


export const Footer = () => {
  return (
   <footer className="pt-[260px] pb-[160px] px-6">
    <img className="mb-10" src="/images/logo.svg" alt="" /> 

    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
      {/* Columna 1: Información de contacto + Menú */}
      <div className="flex-1 flex flex-col gap-8">
        {/* Información de contacto */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Ubicación */}
          <div className="flex-1">
            <ContactItem 
              text={contactInformation[0].text} 
              iconUrl={contactInformation[0].iconUrl} 
              alt={contactInformation[0].alt} 
            />
          </div>
          {/* Teléfono, Email, Menú y Redes */}
          <div className="flex-1 flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Tel y Email */}
            <div className="flex flex-col gap-4">
              <ContactItem 
                text={contactInformation[1].text} 
                iconUrl={contactInformation[1].iconUrl} 
                alt={contactInformation[1].alt} 
              />
              <ContactItem 
                text={contactInformation[2].text} 
                iconUrl={contactInformation[2].iconUrl} 
                alt={contactInformation[2].alt} 
              />
            </div>

            {/* Menú y Redes */}
            <div className="flex flex-col gap-8 md:flex-row md:gap-8 md:items-start">
              {/* Menú */}
              <div className="flex flex-col gap-8 md:flex-row md:gap-8">
                <ul>
                    {  pages.map((page:string) => (
                        <FooterListItem key={page} text={page} />
                    ))
                    }
                </ul>
                
                <ul>
                    {  conditions.map((condition:string) => (
                        <FooterListItem key={condition} text={condition} />
                    ))
                    }
                </ul>
              </div>

              {/* Redes sociales */}
              <div className="flex gap-4">
                {
                media.map((mediaItem:Media) => (
                    <div key={mediaItem.text} className="text-white hover:text-Teal-200 cursor-pointer border rounded-full size-[30px] p-0.5">
                        {mediaItem.icon}
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </footer>
)}
