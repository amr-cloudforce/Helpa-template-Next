import React from 'react'

import PropTypes from 'prop-types'

const Banner = (props) => {
  return (
    <>
      <div id="banner" data-persistence="true" className="banner-banner">
        <div className="banner-captions">
          <div className="banner-caption">
            <span className="banner-text">{props.Caption}</span>
            <a
              href={props.Redirect}
              target="_blank"
              rel="noreferrer noopener"
              className="banner-link"
            >
              {props.Bold}
            </a>
          </div>
          <a href={props.RedirectMobile} className="banner-link1">
            <div className="banner-caption1">
              <span className="banner-text1">{props.CaptionMobile}</span>
              <span className="banner-text2">{props.Bold1}</span>
            </div>
          </a>
        </div>
        <div id="close" className="banner-close">
          <svg viewBox="0 0 1024 1024" className="banner-icon">
            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
          </svg>
        </div>
      </div>
      <style jsx>
        {`
          .banner-banner {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            background-color: #0f1015;
          }
          .banner-captions {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .banner-caption {
            gap: 4px;
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: center;
          }
          .banner-text {
            color: rgb(246, 245, 237);
            font-size: 14px;
            text-align: center;
          }
          .banner-link {
            color: rgb(246, 245, 237);
            cursor: pointer;
            font-size: 14px;
            font-style: normal;
            text-align: center;
            transition: 0.3s;
            font-weight: 700;
            text-decoration: none;
          }
          .banner-link:hover {
            color: grey;
          }
          .banner-link1 {
            display: contents;
          }
          .banner-caption1 {
            gap: 4px;
            width: 100%;
            display: none;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: center;
          }
          .banner-text1 {
            color: rgb(246, 245, 237);
            font-size: 14px;
            text-align: center;
          }
          .banner-text2 {
            color: rgb(246, 245, 237);
            cursor: pointer;
            font-size: 14px;
            font-style: normal;
            text-align: center;
            transition: 0.3s;
            font-weight: 700;
          }
          .banner-text2:hover {
            color: grey;
          }
          .banner-close {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .banner-icon {
            fill: #ffffff;
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
            transition: 0.3s;
          }
          .banner-icon:hover {
            fill: grey;
          }
          @media (max-width: 479px) {
            .banner-caption {
              display: none;
            }
            .banner-caption1 {
              display: flex;
              padding-left: 0px;
            }
            .banner-icon {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Banner.defaultProps = {
  Bold1: 'newsletter',
  Redirect: 'https://medium.com',
  Caption: 'Get updates and action alerts from Helpa by joining our',
  CaptionMobile: 'Join our',
  Bold: 'newsletter',
  RedirectMobile: 'https://medium.com',
}

Banner.propTypes = {
  Bold1: PropTypes.string,
  Redirect: PropTypes.string,
  Caption: PropTypes.string,
  CaptionMobile: PropTypes.string,
  Bold: PropTypes.string,
  RedirectMobile: PropTypes.string,
}

export default Banner
