import Header from "./components/Header/Header"
import ReasonsSection from "./components/ReasonsSection"
import MaximumSection from './components/MaximumSection'
import IntroSection from "./components/IntroSection"
import TabsSection from "./components/TabsSection"
import FeedbackSection from "./components/FeedbackSection"
import { useState } from "react"
import EffectSection from "./components/EffectSection"

export default function App() {
const [tab, setTab] = useState('effect')
  return (
    <>
      <Header />
        <main>
          <TabsSection active={tab} onChange={current => setTab(current)} />

          {
            tab === 'main' && 
            <>
            <ReasonsSection />
            <MaximumSection />
            <IntroSection />
            </> 
          }

          {
            tab === 'feedback' && <FeedbackSection />
          }

          {
            tab === 'effect' && <EffectSection />
          }

          

        </main>
    </>
  )
}

