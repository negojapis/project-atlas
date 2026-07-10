import Link from 'next/link'
import SectionContainer from '@/components/ui/SectionContainer'
import HeroTitle from '@/components/ui/HeroTitle'
import SectionSubtitle from '@/components/ui/SectionSubtitle'
import Command from '@/components/ui/Command'
import Atmosphere from '@/components/Atmosphere'

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-bg-base text-text-primary selection:bg-border-active selection:text-text-primary font-sans overflow-hidden flex flex-col items-center justify-center pb-[env(safe-area-inset-bottom)]">
      <Atmosphere />
      
      <SectionContainer className="relative z-content flex flex-col items-center justify-center text-center">
        <SectionSubtitle className="mb-8 tracking-[0.5em]">
          ERROR 404
        </SectionSubtitle>
        
        <HeroTitle className="mb-12">
          Nada encontrado.
        </HeroTitle>
        
        <Command href="/" className="px-8 py-4">
          <span className="opacity-40 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-normal">←</span>
          RETORNAR À ORIGEM
        </Command>
      </SectionContainer>
    </main>
  )
}
