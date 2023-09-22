import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <h1>AboutPage</h1>
      <p>This is the about page </p>
    </>
  )
}

export default AboutPage
