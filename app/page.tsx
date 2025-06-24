import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <SignedOut>
        <div className="text-center py-8">
          <h1 className="text-3xl font-bold mb-4">Welcome to Converso</h1>
          <p className="text-lg mb-6">Real-time AI Teaching Platform</p>
          <SignInButton mode="modal">
            <Button>Get Started - Sign In</Button>
          </SignInButton>
        </div>
      </SignedOut>

      <SignedIn>
        <h1 className="text-2xl underline">Popular Companions</h1>

        <section className="home-section">
          <CompanionCard
            id="123"
            name="Neura the Brainy Explorer"
            topic="Neural Network of the Brain"
            subject="science"
            duration={45}
            color="#ffda6e"
          />
          <CompanionCard
            id="456"
            name="Countsy the Number Wizard"
            topic="Derivatives & Integrals"
            subject="Maths"
            duration={30}
            color="#e5d0ff"
          />
          <CompanionCard
            id="789"
            name="Verba the Vocabulary Builder"
            topic="language"
            subject="English Literature"
            duration={30}
            color="#BDE7FF"
          />
        </section>

        <section className='home-section'>
          <CompanionList
            title="Recently completed sessions"
            companions={recentSessions}
            classNames="w-2/3 max-lg:w-full"
          />
          <CTA />
        </section>
      </SignedIn>
    </main>
  )
}

export default Page