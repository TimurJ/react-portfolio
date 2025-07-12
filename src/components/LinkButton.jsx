const LinkButton = ({ text, className, url }) => {
  return (
    <a href={url} target="_blank" className={`${className ?? ''} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text md:pr-0 pr-5">{text}</p>
        <div className="arrow-wrapper">
          <img className="md:w-6 md:h-6" src="/images/arrow-right.svg" alt="arrow" />
        </div>
      </div>
    </a>
  )
}

export default LinkButton
