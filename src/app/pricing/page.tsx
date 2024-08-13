import React from 'react'
import { Space_Grotesk } from 'next/font/google'
import { Heading, PricingWrapper, Price, Paragraph } from '@/components/globals/sections/pricing'
const grotesk = Space_Grotesk({ subsets: ['latin'] })

interface Props {
    
}

const Pricing: React.FC<Props> = () => {
    return (
        <div className={grotesk.className + ' h-[600px] w-full flex gap-12 items-center justify-center'}>
        <PricingWrapper contactHref={'/'}>
          <Heading>Basic</Heading>
          <Price>
            $2000
            <br />
            /mo
          </Price>
          <Paragraph>
            Special UI component for your website made with React.js, TailwindCSS and FramerMotion.
          </Paragraph>
        </PricingWrapper>
        <PricingWrapper contactHref={'/'} type={'waves'}>
          <Heading>Pro</Heading>
          <Price>
            $2000
            <br />
            /mo
          </Price>
          <Paragraph>
            Special UI component for your website made with React.js, TailwindCSS and FramerMotion.
          </Paragraph>
        </PricingWrapper>
        <PricingWrapper contactHref={'/'}>
          <Heading>Custom</Heading>
          <Price>
            $2000
            <br />
            /mo
          </Price>
          <Paragraph>
            Special UI component for your website made with React.js, TailwindCSS and FramerMotion.
          </Paragraph>
        </PricingWrapper>
      </div>
    )
}

export default Pricing

