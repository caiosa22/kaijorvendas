import WorkshopHero from '../components/workshop/WorkshopHero'
import WorkshopBenefits from '../components/workshop/WorkshopBenefits'
import WorkshopPricing from '../components/workshop/WorkshopPricing'
import AboutInstructor from '../components/workshop/AboutInstructor'
import WorkshopCTA from '../components/workshop/WorkshopCTA'
import WorkshopFooter from '../components/workshop/WorkshopFooter'

function BlackVarejo() {
  return (
    <div className="min-h-screen bg-black text-white">
      <WorkshopHero />
      <WorkshopBenefits />
      <WorkshopPricing />
      <AboutInstructor />
      <WorkshopCTA />
      <WorkshopFooter />
    </div>
  )
}

export default BlackVarejo

