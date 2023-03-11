import React from 'react'

import PropTypes from 'prop-types'

const Branding = (props) => {
  return (
    <>
      <div className={`branding-branding ${props.rootClassName} `}>
        <img
          alt={props.Logo_alt}
          src={props.Logo_src}
          className="branding-logo"
        />
        <h2 className="branding-company-name">{props.CompanyName}</h2>
      </div>
      <style jsx>
        {`
          .branding-branding {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .branding-logo {
            width: 26px;
            height: 26px;
            object-fit: cover;
          }
          .branding-company-name {
            color: #222223;
            font-size: 36px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            line-height: 54px;
          }

          @media (max-width: 767px) {
            .branding-logo {
              width: 15px;
              height: 15px;
            }
            .branding-company-name {
              font-size: 21px;
              line-height: 32px;
            }
          }
        `}
      </style>
    </>
  )
}

Branding.defaultProps = {
  Logo_alt: 'image',
  rootClassName: '',
  CompanyName: 'Helpa',
  Logo_src: '/playground_assets/logo.svg',
}

Branding.propTypes = {
  Logo_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  CompanyName: PropTypes.string,
  Logo_src: PropTypes.string,
}

export default Branding
