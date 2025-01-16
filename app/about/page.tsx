import { AboutHero } from '@/components/AboutHero'
// import { AboutContent } from '@/components/AboutContent'
import { CompanyValues } from '@/components/CompanyValues'
import JourneyTimeline from '@/components/JourneyTimeline'

export default function About() {
  return (
    <div>
      <AboutHero />
      <CompanyValues />
      <JourneyTimeline/>
      {/* <AboutContent /> */}
    </div>
  )
}

