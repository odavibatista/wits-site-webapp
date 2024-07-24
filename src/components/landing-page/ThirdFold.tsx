import { Platforms } from "@/lib/mocks/Platform";
import { BtnPlatform } from "../button";

export function ThirdFold() {
  return (
    <div className="lp-section">
      <h2 className="lp-title">
        Pratique{' '}
        <span className="text-custom-gradient">Lógica e Raciocínio</span> a
        qualquer hora, em qualquer lugar
      </h2>
      <section className="flex items-center justify-center gap-2">
        {Platforms.map((platform) =>(
          <BtnPlatform 
            key={platform.id}
            imageUrl={platform.pathImage}
            platformName={platform.name}
          />
        ))}
      </section>
    </div>
  )
}
