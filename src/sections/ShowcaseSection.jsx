import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
  const sectionRef = useRef(null)
  const project1Ref = useRef(null)
  const project2Ref = useRef(null)
  const project3Ref = useRef(null)

  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current]
    projects.forEach((project, index) => {
      gsap.fromTo(
        project,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: { trigger: project, start: 'top bottom-=100' },
        }
      )
    })
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
  }, [])

  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/** LEFT */}

          <div ref={project1Ref} className="first-project-wrapper">
            <div className="image-wrapper">
              <a
                href="https://www.cmegroup.com/markets/brokertec/brokertec-quote.html"
                target="_blank"
              >
                <img src="/images/project-images/BrokerTecQuote.webp" alt="BrokerTec Quote" />
              </a>
            </div>
            <div className="text-content">
              <h2>
                <a
                  href="https://www.cmegroup.com/markets/brokertec/brokertec-quote.html"
                  target="_blank"
                  className="underline"
                >
                  BrokerTec Quote
                </a>{' '}
                Real Time Low Latency RFQ Trading Application
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with <strong>React</strong> at the core, <strong>Redux</strong> for
                efficient and robust state management, <strong>React Router</strong> for navigation,{' '}
                <strong>AG Grid</strong> for fast user friendly grids, <strong>Websockets</strong>{' '}
                for real time updates and messaging between the UI and Server,{' '}
                <strong>Styled Components</strong>, for consistent and reusable component styling.
              </p>
            </div>
          </div>
          {/** RIGHT */}
          <div className="project-list-wrapper overflow-hidden ">
            <div ref={project2Ref} className="project">
              <div className="image-wrapper bg-[#e2e2e2]">
                <a href="https://www.reactiveanalytics.co.uk/" target="_blank">
                  <img
                    src="/images/project-images/ReactiveAnalytics.webp"
                    alt="Reactive Analytics"
                  />
                </a>
              </div>
              <h2>
                <a
                  href="https://www.reactiveanalytics.co.uk/"
                  target="_blank"
                  className="underline"
                >
                  Reactive Analytics
                </a>{' '}
                Stock Tracking Application Built With <strong>React</strong>. Check on{' '}
                <a
                  href="https://github.com/TimurJ/stock-tracker-react"
                  target="_blank"
                  className="underline"
                >
                  GitHub
                </a>
              </h2>
            </div>
            <div ref={project3Ref} className="project">
              <div className="image-wrapper bg-[#e2e2e2]">
                <a href="https://tj-mode.vercel.app/" target="_blank">
                  <img
                    src="/images/project-images/mode.webp"
                    alt="Landing page for Mode issue tracking app"
                  />
                </a>
              </div>
              <h2>
                <a href="https://tj-mode.vercel.app/" target="_blank" className="underline">
                  Mode
                </a>{' '}
                Issue Tracking Application Built With <strong>Next.js</strong>. Check on{' '}
                <a
                  href="https://github.com/TimurJ/next.js-mode-application"
                  target="_blank"
                  className="underline"
                >
                  GitHub
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
