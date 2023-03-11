import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav
        className={`navigation-links-navigation-links ${props.rootClassName} `}
      >
        <div className="navigation-links-links">
          <Link href="/">
            <a className="navigation-links-link1 navLink">{props.Link}</a>
          </Link>
          <Link href="/">
            <a className="navigation-links-link3 navLink">{props.Link1}</a>
          </Link>
          <Link href="/">
            <a className="navigation-links-link5 navLink">{props.Link2}</a>
          </Link>
          <Link href="/">
            <a className="navigation-links-link7 navLink">{props.Link3}</a>
          </Link>
        </div>
        <div className="navigation-links-hamburger">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="navigation-links-image"
          />
        </div>
      </nav>
      <style jsx>
        {`
          .navigation-links-navigation-links {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-link1 {
            text-decoration: none;
          }
          .navigation-links-link3 {
            text-decoration: none;
          }
          .navigation-links-link5 {
            text-decoration: none;
          }
          .navigation-links-link7 {
            text-decoration: none;
          }
          .navigation-links-hamburger {
            gap: var(--dl-space-space-twounits);
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-image {
            width: 100px;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .navigation-links-links {
              display: none;
            }
            .navigation-links-hamburger {
              display: flex;
              padding-top: 14px;
              border-color: #222223;
              border-width: 1px;
              padding-left: 12px;
              padding-right: 12px;
              padding-bottom: 14px;
              background-color: #79d490;
            }
            .navigation-links-image {
              width: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  Link1: 'Take Action',
  rootClassName: '',
  image_alt: 'image',
  Link: 'Mission',
  image_src: '/playground_assets/hamburger.svg',
  Link2: 'News',
  Link3: 'Contact',
}

NavigationLinks.propTypes = {
  Link1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  Link: PropTypes.string,
  image_src: PropTypes.string,
  Link2: PropTypes.string,
  Link3: PropTypes.string,
}

export default NavigationLinks
