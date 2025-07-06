import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <a target="_blank" href="/">
            Visit my blog
          </a>
        </div>
        <div className="socials">
          {socialImgs.map((image) => (
            <a className="icon" target="_blank" href={image.url} key={image.name}>
              <img src={image.imgPath} alt={image.name} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Timur Jalilov. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
