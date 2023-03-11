import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import Banner from '../components/banner'
import Branding from '../components/branding'
import Steps from '../components/steps'
import IconContainer from '../components/icon-container'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Helpa template</title>
          <meta property="og:title" content="Helpa template" />
        </Head>
        <Banner></Banner>
        <section className="home-hero">
          <div className="home-main">
            <div className="home-content">
              <header data-thq="thq-navbar" className="home-navbar-interactive">
                <Branding rootClassName="branding-root-class-name1"></Branding>
                <div
                  data-thq="thq-navbar-nav"
                  data-role="Nav"
                  className="home-desktop-menu"
                >
                  <div className="home-links">
                    <Link href="/">
                      <a className="home-link01 navLink">Mission</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link03 navLink">Take Action</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link05 navLink">News</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link07 navLink">Contact</a>
                    </Link>
                    <Link href="/feedback">
                      <a className="navLink">Formular</a>
                    </Link>
                  </div>
                </div>
                <div data-thq="thq-burger-menu" className="home-burger-menu">
                  <button className="button">
                    <svg viewBox="0 0 1024 1024" className="home-icon">
                      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </button>
                </div>
                <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                  <div
                    data-thq="thq-mobile-menu-nav"
                    data-role="Nav"
                    className="home-nav"
                  >
                    <div className="home-container1">
                      <Branding rootClassName="branding-root-class-name"></Branding>
                      <div
                        data-thq="thq-close-menu"
                        className="home-menu-close"
                      >
                        <svg viewBox="0 0 1024 1024" className="home-icon02">
                          <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="home-links1">
                      <Link href="/">
                        <a className="home-link11 navLink">Mission</a>
                      </Link>
                      <Link href="/">
                        <a className="home-link13 navLink">Take Action</a>
                      </Link>
                      <Link href="/">
                        <a className="home-link15 navLink">News</a>
                      </Link>
                      <Link href="/">
                        <a className="home-link17 navLink">Contact</a>
                      </Link>
                    </div>
                    <div className="home-icon-group">
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="home-icon04"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="home-icon06"
                      >
                        <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 602.2582857142856 1024"
                        className="home-icon08"
                      >
                        <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </header>
              <div className="home-hero-section">
                <div className="home-header">
                  <h1 className="home-heading">Whatever</h1>
                  <p className="home-caption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
                <div className="home-buttons">
                  <button className="button">
                    <span>Donate Now</span>
                  </button>
                  <button className="home-button02 button">
                    <span>Join our newsletter</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="home-image">
              <button className="button home-button03">Donate</button>
            </div>
          </div>
          <div className="home-details-container">
            <div className="home-details">
              <div className="home-category">
                <img
                  alt="image"
                  src="/playground_assets/details-1.svg"
                  className="home-image01"
                />
                <p className="home-text02">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="home-category1">
                <img
                  alt="image"
                  src="/playground_assets/details-2.svg"
                  className="home-image02"
                />
                <p className="home-text03">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="home-category2">
                <img
                  alt="image"
                  src="/playground_assets/details-3.svg"
                  className="home-image03"
                />
                <p className="home-text04">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-mission">
          <div className="home-content01">
            <div className="home-main1">
              <span className="home-title">Our Mission</span>
              <div className="home-header01">
                <h2 className="home-heading01">
                  Hepa has been working to free animals from cruelty and
                  institutionalized exploitation around the world.
                </h2>
                <p className="home-caption01">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="home-highlights">
              <div className="home-highlight">
                <h3 className="home-title1">Action</h3>
                <p className="home-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div className="home-highlight1">
                <h3 className="home-title2">Help</h3>
                <p className="home-description1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
          <div className="home-images">
            <img
              alt="image"
              src="/playground_assets/mission-1-400w.png"
              className="home-image04"
            />
            <div className="home-row">
              <img
                alt="image"
                src="/playground_assets/mission-2-400w.png"
                className="home-image05"
              />
            </div>
          </div>
        </section>
        <section className="home-petitions">
          <div className="home-images1">
            <img
              alt="image"
              src="/playground_assets/petition-1400w.png"
              className="home-image06"
            />
          </div>
          <div className="home-content02">
            <div className="home-main2">
              <div className="home-header02">
                <h2 className="home-heading02">
                  Sign our petitions and make your voice heard for the animals
                  that need your help.
                </h2>
                <p className="home-caption02">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="home-button04">
              <button className="button">
                <span>Sign petition</span>
              </button>
            </div>
          </div>
        </section>
        <section className="home-steps">
          <div className="home-content03">
            <div className="home-information">
              <div className="home-main3">
                <div className="home-header03">
                  <h2 className="home-heading03">
                    Making a difference lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod.
                  </h2>
                  <p className="home-caption03">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
              <div className="home-button06">
                <button className="button">
                  <span>Take action</span>
                </button>
              </div>
            </div>
            <Steps></Steps>
          </div>
        </section>
        <section className="home-help">
          <div className="home-help-content">
            <div className="home-header04">
              <h2 className="home-heading04">How can you help</h2>
              <p className="home-caption04">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-switch">
              <div id="individual" className="switch-active switch">
                <span>Individuals</span>
              </div>
              <div id="company" className="switch">
                <span>Companies</span>
              </div>
            </div>
          </div>
          <div className="home-content04">
            <div id="individuals-content" className="home-save">
              <div className="home-content05">
                <div className="home-main4">
                  <div className="home-header05">
                    <h2 className="home-heading05">
                      This is the Individuals Tab
                    </h2>
                    <p className="home-caption05">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <div className="home-highlights1">
                    <div className="home-highlight2">
                      <h3 className="home-title3">60%</h3>
                      <p className="home-description2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </p>
                    </div>
                    <div className="home-highlight3">
                      <h3 className="home-title4">40%</h3>
                      <p className="home-description3">
                        Excepteur sint occaecat cupidatat non proident
                      </p>
                    </div>
                  </div>
                </div>
                <div className="home-button08">
                  <button className="button">
                    <span>Take action</span>
                  </button>
                  <button className="button">
                    <span>Learn more</span>
                  </button>
                </div>
              </div>
              <div className="home-images2">
                <img
                  alt="image"
                  src="/playground_assets/help-1400w.png"
                  className="home-image07"
                />
              </div>
            </div>
            <div id="companies-content" className="home-companies">
              <div className="home-content06">
                <div className="home-main5">
                  <div className="home-header06">
                    <h2 className="home-heading06">
                      This is the Companies Tab
                    </h2>
                    <p className="home-caption06">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <div className="home-highlights2">
                    <div className="home-highlight4">
                      <h3 className="home-title5">55%</h3>
                      <p className="home-description4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </p>
                    </div>
                    <div className="home-highlight5">
                      <h3 className="home-title6">45%</h3>
                      <p className="home-description5">
                        Excepteur sint occaecat cupidatat non proident
                      </p>
                    </div>
                  </div>
                </div>
                <div className="home-button11">
                  <button className="button">
                    <span>Take action</span>
                  </button>
                  <button className="button">
                    <span>Learn more</span>
                  </button>
                </div>
              </div>
              <div className="home-images3">
                <img
                  alt="image"
                  src="/playground_assets/help-1400w.png"
                  className="home-image08"
                />
              </div>
            </div>
          </div>
          <div>
            <DangerousHTML
              html={`<script>
document.getElementById("individual").addEventListener("click", function() {
  document.getElementById("individuals-content").style.display = "flex";
  document.getElementById("companies-content").style.display = "none";
  this.classList.add("switch-active");
  document.getElementById("company").classList.remove("switch-active");
});
document.getElementById("company").addEventListener("click", function() {
  document.getElementById("companies-content").style.display = "flex";
  document.getElementById("individuals-content").style.display = "none";
  this.classList.add("switch-active");
  document.getElementById("individual").classList.remove("switch-active");
});
</script>`}
            ></DangerousHTML>
          </div>
        </section>
        <section className="home-quote-one">
          <div className="home-quote-content">
            <h2 className="home-quote">
              “Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.”
            </h2>
            <div className="home-quoted">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxwb3RyYWl0fGVufDB8fHx8MTY3MDkyNjgxNQ&amp;ixlib=rb-4.0.3&amp;w=200"
                className="home-image09"
              />
              <p className="home-caption07">Michael Belfort, @helpa</p>
            </div>
          </div>
        </section>
        <section className="home-quote-two">
          <div className="home-content07">
            <div className="home-video">
              <video
                src
                poster="/playground_assets/video-1400w.png"
                className="home-video1"
              ></video>
              <div className="home-play">
                <div className="home-button14">
                  <svg
                    viewBox="0 0 808.5942857142857 1024"
                    className="home-icon10"
                  >
                    <path d="M790.857 529.714l-758.857 421.714c-17.714 9.714-32 1.143-32-18.857v-841.143c0-20 14.286-28.571 32-18.857l758.857 421.714c17.714 9.714 17.714 25.714 0 35.429z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="home-quote-content1">
              <h2 className="home-quote1">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </h2>
              <div className="home-quoted1">
                <p className="home-caption08">Andrew Gonzalez</p>
                <p className="home-caption09">@ihelpyou</p>
              </div>
            </div>
          </div>
        </section>
        <div className="home-donate">
          <div className="home-content08">
            <div className="home-header07">
              <span className="home-heading07">
                Donate now and help us help animals
              </span>
              <span className="home-caption10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </span>
            </div>
            <div className="home-amount">
              <div className="home-row1">
                <button className="home-button15 button">$5</button>
                <button className="home-button16 button">$10</button>
              </div>
              <div className="home-row2">
                <button className="home-button17 button">$20</button>
                <button className="home-button18 button">$40</button>
              </div>
            </div>
          </div>
          <form className="home-form"></form>
        </div>
        <section className="home-donation-use">
          <div className="home-header08">
            <h2 className="home-heading08">
              Your donations will be used to help animals.
            </h2>
            <p className="home-caption11">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
          <div className="home-accordion">
            <div
              data-role="accordion-container"
              className="accordion-element home-element"
            >
              <div className="home-header09">
                <h3 className="home-text13">
                  Lorem ipsum dolor sit ametna aliqua.
                </h3>
                <IconContainer rootClassName="icon-container-root-class-name4"></IconContainer>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <p className="home-text14">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="accordion-element home-element1"
            >
              <div className="home-header10">
                <h3 className="home-text15">
                  Lorem ipsum dolor sit ametna aliqua.
                </h3>
                <IconContainer rootClassName="icon-container-root-class-name5"></IconContainer>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <p className="home-text16">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="accordion-element home-element2"
            >
              <div className="home-header11">
                <h3 className="home-text17">
                  Lorem ipsum dolor sit ametna aliqua.
                </h3>
                <IconContainer rootClassName="icon-container-root-class-name6"></IconContainer>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <p className="home-text18">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="accordion-element home-element3"
            >
              <div className="home-header12">
                <h3 className="home-text19">
                  Lorem ipsum dolor sit ametna aliqua.
                </h3>
                <IconContainer rootClassName="icon-container-root-class-name7"></IconContainer>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <p className="home-text20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="accordion-element home-element4"
            >
              <div className="home-header13">
                <h3 className="home-text21">
                  Lorem ipsum dolor sit ametna aliqua.
                </h3>
                <IconContainer rootClassName="icon-container-root-class-name8"></IconContainer>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <p className="home-text22">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div>
              <DangerousHTML
                html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
              ></DangerousHTML>
            </div>
          </div>
        </section>
        <section className="home-updates">
          <div className="home-content14">
            <div className="home-details1">
              <div className="home-header14">
                <h2 className="home-heading09">
                  Get updates and action alerts from Helpa by joining our
                  newsletter
                </h2>
                <p className="home-caption12">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.”
                </p>
              </div>
              <div className="home-action">
                <div className="home-input">
                  <input
                    type="text"
                    placeholder="Email address"
                    className="home-textinput input"
                  />
                  <button className="button home-button19">Subscribe</button>
                </div>
                <div className="home-agreement">
                  <div className="home-states">
                    <div id="tos" className="home-checkbox"></div>
                    <div id="tos-active" className="home-checkbox1">
                      <svg viewBox="0 0 1024 1024" className="home-icon12">
                        <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="home-caption13">
                    <label htmlFor="tos" className="home-normal">
                      I agree to the
                    </label>
                    <label htmlFor="tos" className="home-bold">
                      Terms and Conditions
                    </label>
                  </div>
                  <div>
                    <DangerousHTML
                      html={`<script>
// Create a boolean to represent the state of the toggle
let tosToggle = false;

// Add event listeners to the divs and labels
document.getElementById("tos").addEventListener("click", toggleTos);
document.getElementById("tos-active").addEventListener("click", toggleTos);
document.querySelectorAll("label[for=tos]").forEach(label => label.addEventListener("click", toggleTos));

// Define the toggleTos function to hide/show the elements based on the state of the toggle
function toggleTos() {
  if (tosToggle) {
    document.getElementById("tos").style.display = "flex";
    document.getElementById("tos-active").style.display = "none";
  } else {
    document.getElementById("tos").style.display = "none";
    document.getElementById("tos-active").style.display = "flex";
  }
  tosToggle = !tosToggle;
}
</script>`}
                    ></DangerousHTML>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-slider">
              <div className="home-slides">
                <div className="slide-active slide">
                  <img
                    alt="image"
                    src="/playground_assets/slide-1-1400w.png"
                    className="home-image10"
                  />
                  <span className="home-text23">
                    WFH One year on. Here’s what we’ve learned.
                  </span>
                </div>
                <div className="slide">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1670991761566-534b07539db5?ixid=Mnw5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTY3MTAxNTg5Ng&amp;ixlib=rb-4.0.3&amp;w=1400"
                    className="home-image11"
                  />
                  <span className="home-text24">
                    <span>This is a test slide</span>
                    <br></br>
                  </span>
                </div>
                <div className="slide">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1670087670280-7a3e71a7efa6?ixid=Mnw5MTMyMXwwfDF8YWxsfDE1fHx8fHx8Mnx8MTY3MTAxNTg5Ng&amp;ixlib=rb-4.0.3&amp;w=1400"
                    className="home-image12"
                  />
                  <span className="home-text27">
                    <span>This one also!</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home-buttons-container">
                <div className="home-buttons1">
                  <button id="previous-slide" className="home-previous button">
                    <svg viewBox="0 0 1024 1024" className="home-icon14">
                      <path d="M32 512l480 480v-288h512v-384h-512v-288z"></path>
                    </svg>
                  </button>
                  <button id="next-slide" className="home-next button">
                    <svg viewBox="0 0 1024 1024" className="home-icon16">
                      <path d="M992 512l-480-480v288h-512v384h512v288z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="home-footer">
          <div className="home-top">
            <Branding></Branding>
            <nav className="home-navigation-links">
              <Link href="/">
                <a className="home-link19 navLink">Mission</a>
              </Link>
              <Link href="/">
                <a className="home-link21 navLink">Take Action</a>
              </Link>
              <Link href="/">
                <a className="home-link23 navLink">News</a>
              </Link>
              <Link href="/">
                <a className="home-link25 navLink">Contact</a>
              </Link>
            </nav>
          </div>
          <div className="home-middle">
            <span className="home-text30">
              +0 222.345.987 office@helpa.template
            </span>
            <span className="home-text31">
              Forge Co.13G Eagle Blvd.Nashville, TN 37011-5678
            </span>
          </div>
          <div className="home-bottom">
            <span className="home-copyright">© Copyright Company – 2022</span>
          </div>
        </footer>
        <div>
          <DangerousHTML
            html={`<script>
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('slide-active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('slide-active');
}

const previousSlideButton = document.querySelector('#previous-slide');
previousSlideButton.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

const nextSlideButton = document.querySelector('#next-slide');
nextSlideButton.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});
</script>`}
          ></DangerousHTML>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
function setCookie(name, value, days) {
  // Set the cookie with the given name, value, and expiration time (in days)
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  // Get the value of the cookie with the given name
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function removeCookie(name) {
  // Remove the cookie with the given name
  setCookie(name, "", -1); // Set the cookie with an expiration time of -1 days
}

document.getElementById("close").addEventListener("click", function(){
  // Get the persistence value
  let persistence = document.getElementById("banner").getAttribute("data-persistence");
  if (persistence === "true") {
    // If persistence is enabled, set a cookie to remember that the banner is closed
    setCookie("bannerClosed", "true", 1); // Set the cookie with an expiration time of 1 day
  } else {
    removeCookie("bannerClosed")
  }
  document.getElementById("banner").style.display = "none"; // Hide the banner
});

window.addEventListener("load", function() {
  // Check if the banner should be displayed or not
  let bannerClosed = getCookie("bannerClosed");
  if (bannerClosed === "true") {
    // If the bannerClosed cookie is set, hide the banner
    document.getElementById("banner").style.display = "none";
  }
});
</script>`}
          ></DangerousHTML>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #f6f5ed;
          }
          .home-main {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 646px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
          }
          .home-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-navbar-interactive {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .home-desktop-menu {
            display: flex;
          }
          .home-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link01 {
            text-decoration: none;
          }
          .home-link03 {
            text-decoration: none;
          }
          .home-link05 {
            text-decoration: none;
          }
          .home-link07 {
            text-decoration: none;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-links1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            flex-direction: column;
          }
          .home-link11 {
            text-decoration: none;
          }
          .home-link13 {
            text-decoration: none;
          }
          .home-link15 {
            text-decoration: none;
          }
          .home-link17 {
            text-decoration: none;
          }
          .home-icon-group {
            display: flex;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero-section {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading {
            color: rgb(34, 34, 35);
            font-size: 70px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            line-height: 91px;
          }
          .home-caption {
            color: #222223;
            font-size: 20px;
            line-height: 30px;
          }
          .home-buttons {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-button02 {
            color: #f6f5ed;
            background-color: #000000;
          }
          .home-image {
            flex: 1;
            height: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-end;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-size: cover;
            background-image: url('/playground_assets/heroimage-1400w.png');
          }
          .home-details-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            background-color: #79d490;
          }
          .home-details {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-category {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image01 {
            width: 32px;
            object-fit: cover;
          }
          .home-text02 {
            max-width: 282px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-category1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image02 {
            width: 32px;
            object-fit: cover;
          }
          .home-text03 {
            max-width: 282px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-category2 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image03 {
            width: 32px;
            object-fit: cover;
          }
          .home-text04 {
            max-width: 282px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-mission {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: 200px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-content01 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 560px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-main1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title {
            color: #222223;
            font-style: normal;
            font-weight: 500;
          }
          .home-header01 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading01 {
            color: rgb(34, 34, 35);
            font-size: 40px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            line-height: 52px;
          }
          .home-caption01 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-highlights {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-highlight {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 248px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title1 {
            color: rgb(34, 34, 35);
            font-size: 40px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            line-height: 52px;
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-left-width: 1px;
          }
          .home-description {
            color: rgb(34, 34, 35);
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-highlight1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 248px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title2 {
            color: rgb(34, 34, 35);
            font-size: 40px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            line-height: 52px;
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-left-width: 1px;
          }
          .home-description1 {
            color: rgb(34, 34, 35);
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-images {
            flex: 1;
            display: flex;
            position: relative;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image04 {
            width: 367px;
            object-fit: cover;
          }
          .home-row {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image05 {
            right: 0px;
            width: 333px;
            bottom: 0px;
            z-index: 100;
            position: absolute;
            object-fit: cover;
          }
          .home-petitions {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-images1 {
            flex: 1;
            display: flex;
            position: relative;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image06 {
            width: 641px;
            object-fit: cover;
          }
          .home-content02 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 560px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-main2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header02 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading02 {
            color: rgb(34, 34, 35);
            font-size: 40px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            line-height: 52px;
          }
          .home-caption02 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-button04 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-steps {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #f6f5ed;
          }
          .home-content03 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: 120px;
            justify-content: space-between;
          }
          .home-information {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 560px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-main3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header03 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading03 {
            color: rgb(34, 34, 35);
            font-size: 40px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            line-height: 52px;
          }
          .home-caption03 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-button06 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-help {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: 140px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-help-content {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header04 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading04 {
            font-size: 40px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            line-height: 52px;
          }
          .home-caption04 {
            font-size: 18px;
            text-align: center;
            line-height: 27px;
          }
          .home-switch {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-content04 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-save {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-content05 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 560px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-main4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header05 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading05 {
            color: rgb(34, 34, 35);
            font-size: 40px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            line-height: 52px;
          }
          .home-caption05 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-highlights1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-highlight2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-title3 {
            color: rgb(34, 34, 35);
            font-size: 40px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            line-height: 52px;
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-left-width: 1px;
          }
          .home-description2 {
            color: rgb(34, 34, 35);
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-highlight3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-title4 {
            color: rgb(34, 34, 35);
            font-size: 40px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            line-height: 52px;
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-left-width: 1px;
          }
          .home-description3 {
            color: rgb(34, 34, 35);
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-button08 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-images2 {
            display: flex;
            position: relative;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image07 {
            width: 640px;
            object-fit: cover;
          }
          .home-companies {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-content06 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 560px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-main5 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header06 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading06 {
            color: rgb(34, 34, 35);
            font-size: 40px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            line-height: 52px;
          }
          .home-caption06 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-highlights2 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-highlight4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-title5 {
            color: rgb(34, 34, 35);
            font-size: 40px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            line-height: 52px;
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-left-width: 1px;
          }
          .home-description4 {
            color: rgb(34, 34, 35);
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-highlight5 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-title6 {
            color: rgb(34, 34, 35);
            font-size: 40px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            line-height: 52px;
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-left-width: 1px;
          }
          .home-description5 {
            color: rgb(34, 34, 35);
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-button11 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-images3 {
            display: flex;
            position: relative;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image08 {
            width: 640px;
            object-fit: cover;
          }
          .home-quote-one {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            background-color: #f6f5ed;
          }
          .home-quote-content {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-quote {
            color: rgb(34, 34, 35);
            width: 100%;
            font-size: 32px;
            max-width: 900px;
            font-style: italic;
            font-family: Lora;
            font-weight: 500;
            line-height: 48px;
          }
          .home-quoted {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: row;
          }
          .home-image09 {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-color: #222223;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-caption07 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            font-style: italic;
            font-family: Lora;
            font-weight: 500;
          }
          .home-quote-two {
            width: 100%;
            height: 600px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #e8e6da;
          }
          .home-content07 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-video {
            flex: 1;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-video1 {
            width: 100%;
            height: 100%;
          }
          .home-play {
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            margin: auto;
            display: flex;
            z-index: 100;
            position: absolute;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-button14 {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-twounits);
            transition: 0.3s;
            align-items: center;
            border-color: #ffffff;
            border-width: 3px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #ffffff;
          }
          .home-button14:hover {
            fill: rgb(121, 212, 144) !important;
            box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
            border-color: rgb(121, 212, 144);
            border-width: 3px;
          }
          .home-icon10 {
            width: 12px;
            height: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-quote-content1 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-quote1 {
            color: rgb(34, 34, 35);
            width: 100%;
            font-size: 24px;
            max-width: 500px;
            font-style: italic;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 36px;
          }
          .home-quoted1 {
            gap: 4px;
            width: 100%;
            display: flex;
            max-width: 500px;
            align-items: center;
            flex-direction: column;
          }
          .home-caption08 {
            color: rgb(34, 34, 35);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-family: Lora;
            font-weight: 500;
          }
          .home-caption09 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            text-align: center;
          }
          .home-donate {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #79d490;
          }
          .home-content08 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 414px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-header07 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading07 {
            width: 100%;
            font-size: 56px;
            max-width: 640px;
            font-style: normal;
            text-align: center;
            font-family: Lora;
            font-weight: 500;
            line-height: 72px;
          }
          .home-caption10 {
            width: 100%;
            font-size: 20px;
            max-width: 640px;
            text-align: center;
            line-height: 30px;
          }
          .home-amount {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-row1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-button15 {
            color: rgb(255, 255, 255);
            background-color: rgb(0, 0, 0);
          }
          .home-button16 {
            color: rgb(255, 255, 255);
            background-color: rgb(0, 0, 0);
          }
          .home-row2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-button17 {
            color: rgb(255, 255, 255);
            padding-right: 29px;
            background-color: rgb(0, 0, 0);
          }
          .home-button18 {
            color: rgb(255, 255, 255);
            background-color: rgb(0, 0, 0);
          }
          .home-form {
            width: 200px;
            height: 100px;
            display: flex;
          }
          .home-donation-use {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: 120px;
            justify-content: flex-start;
          }
          .home-header08 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: 100%;
            display: flex;
            max-width: 560px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading08 {
            color: rgb(34, 34, 35);
            font-size: 40px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            line-height: 52px;
          }
          .home-caption11 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-accordion {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header09 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text13 {
            color: rgb(34, 34, 35);
            font-size: 24px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            padding-right: var(--dl-space-space-unit);
          }
          .home-text14 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-header10 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text15 {
            color: rgb(34, 34, 35);
            font-size: 24px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            padding-right: var(--dl-space-space-unit);
          }
          .home-text16 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-header11 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text17 {
            color: rgb(34, 34, 35);
            font-size: 24px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            padding-right: var(--dl-space-space-unit);
          }
          .home-text18 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-header12 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text19 {
            color: rgb(34, 34, 35);
            font-size: 24px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            padding-right: var(--dl-space-space-unit);
          }
          .home-text20 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-header13 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text21 {
            color: rgb(34, 34, 35);
            font-size: 24px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            padding-right: var(--dl-space-space-unit);
          }
          .home-text22 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-updates {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #e8e6da;
          }
          .home-content14 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: 100px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: 100px;
            justify-content: center;
          }
          .home-details1 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header14 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 560px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading09 {
            color: rgb(34, 34, 35);
            width: 100%;
            font-size: 40px;
            font-style: normal;
            font-family: Lora;
            font-weight: 400;
            line-height: 52px;
          }
          .home-caption12 {
            color: rgb(34, 34, 35);
            width: 100%;
            font-size: 18px;
            line-height: 27px;
          }
          .home-action {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-input {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-textinput {
            color: #222223;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 0px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-agreement {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-states {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-checkbox {
            width: 24px;
            cursor: pointer;
            height: 24px;
            display: flex;
            align-items: flex-start;
            border-color: #222223;
            border-style: solid;
            border-width: 1px;
            flex-direction: row;
            background-color: #ffffff;
          }
          .home-checkbox1 {
            width: 24px;
            cursor: pointer;
            height: 24px;
            display: none;
            align-items: center;
            border-color: #222223;
            border-style: solid;
            border-width: 1px;
            flex-direction: row;
            justify-content: center;
            background-color: rgb(121, 212, 144);
          }
          .home-icon12 {
            width: 10px;
            height: 10x;
          }
          .home-caption13 {
            gap: 4px;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-normal {
            color: rgb(34, 34, 35);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-bold {
            color: rgb(34, 34, 35);
            font-style: normal;
            text-align: center;
            font-weight: 700;
          }
          .home-slider {
            gap: 115px;
            flex: 1;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-slides {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: center;
          }
          .home-image10 {
            width: 100%;
            height: 350px;
            object-fit: cover;
          }
          .home-text23 {
            font-size: 24px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            line-height: 31px;
          }
          .home-image11 {
            width: 100%;
            height: 350px;
            object-fit: cover;
          }
          .home-text24 {
            font-size: 24px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            line-height: 31px;
          }
          .home-image12 {
            width: 100%;
            height: 350px;
            object-fit: cover;
          }
          .home-text27 {
            font-size: 24px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            line-height: 31px;
          }
          .home-buttons-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-buttons1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-previous {
            display: flex;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            background-color: transparent;
          }
          .home-icon14 {
            width: 18px;
            height: 18px;
          }
          .home-next {
            display: flex;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            background-color: transparent;
          }
          .home-icon16 {
            width: 18px;
            height: 18px;
          }
          .home-footer {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
            background-color: #79d590;
          }
          .home-top {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: center;
            border-color: #222223;
            border-style: dashed;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-navigation-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .home-link19 {
            text-decoration: none;
          }
          .home-link21 {
            text-decoration: none;
          }
          .home-link23 {
            text-decoration: none;
          }
          .home-link25 {
            text-decoration: none;
          }
          .home-middle {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 250px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-text30 {
            width: 100%;
            font-size: 24px;
            font-style: normal;
            text-align: center;
            font-family: Lora;
            font-weight: 500;
            line-height: 36px;
          }
          .home-text31 {
            width: 100%;
            font-size: 24px;
            font-style: normal;
            text-align: center;
            font-family: Lora;
            font-weight: 500;
            line-height: 36px;
          }
          .home-bottom {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #222223;
            border-style: dashed;
            flex-direction: column;
            justify-content: center;
            border-top-width: 1px;
          }
          .home-copyright {
            color: rgba(0, 0, 0, 0.3);
            width: 100%;
            font-size: 12px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 18px;
          }
          @media (max-width: 991px) {
            .home-main {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-threeunits);
            }
            .home-navbar-interactive {
              gap: 0;
              justify-content: space-between;
            }
            .home-links {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-heading {
              font-size: 36px;
              line-height: 46px;
            }
            .home-caption {
              font-size: 16px;
              line-height: 24px;
            }
            .home-buttons {
              flex-direction: column;
            }
            .home-button03 {
              display: none;
            }
            .home-details {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-category {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-category1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-category2 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-mission {
              gap: var(--dl-space-space-twounits);
            }
            .home-petitions {
              padding-top: 0px;
              flex-direction: column-reverse;
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-images1 {
              width: 100%;
            }
            .home-image06 {
              flex: 1;
              width: 100%;
            }
            .home-content02 {
              max-width: 100%;
            }
            .home-button04 {
              width: 100%;
            }
            .home-content03 {
              gap: var(--dl-space-space-fourunits);
              align-items: flex-start;
              padding-top: var(--dl-space-space-sixunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-sixunits);
              justify-content: flex-start;
            }
            .home-button06 {
              width: 100%;
            }
            .home-help {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-save {
              flex-direction: column;
            }
            .home-content05 {
              max-width: 100%;
            }
            .home-button08 {
              width: 100%;
            }
            .home-images2 {
              width: 100%;
            }
            .home-image07 {
              width: 100%;
            }
            .home-companies {
              flex-direction: column;
            }
            .home-content06 {
              max-width: 100%;
            }
            .home-button11 {
              width: 100%;
            }
            .home-images3 {
              width: 100%;
            }
            .home-image08 {
              width: 100%;
            }
            .home-quote-one {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-quote-two {
              height: 100%;
            }
            .home-content07 {
              gap: var(--dl-space-space-threeunits);
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-video {
              width: 100%;
            }
            .home-content08 {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-donation-use {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-content14 {
              align-items: flex-start;
              padding-top: var(--dl-space-space-sixunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-details1 {
              width: 100%;
            }
            .home-input {
              width: 100%;
            }
            .home-textinput {
              flex: 1;
            }
            .home-button19 {
              width: 30%;
            }
            .home-slider {
              gap: var(--dl-space-space-fourunits);
              width: 100%;
              flex-direction: column;
            }
            .home-buttons1 {
              flex-direction: row;
            }
            .home-footer {
              width: 100%;
              padding-top: var(--dl-space-space-sixunits);
            }
          }
          @media (max-width: 767px) {
            .home-main {
              gap: var(--dl-space-space-threeunits);
              height: 800px;
              position: relative;
              padding-left: 0px;
              flex-direction: column;
            }
            .home-content {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-navbar-interactive {
              gap: 0;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-button02 {
              display: none;
            }
            .home-image {
              width: 100%;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              background-position: center;
            }
            .home-details {
              gap: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-category {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-text02 {
              max-width: 100%;
            }
            .home-category1 {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-text03 {
              max-width: 100%;
            }
            .home-category2 {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-text04 {
              max-width: 100%;
            }
            .home-mission {
              gap: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-sixunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-content01 {
              max-width: 100%;
            }
            .home-images {
              width: 100%;
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-row {
              width: 100%;
              padding-top: var(--dl-space-space-oneandhalfunits);
              justify-content: flex-end;
            }
            .home-image05 {
              bottom: var(--dl-space-space-halfunit);
              position: static;
            }
            .home-petitions {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content03 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-help {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-help-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading05 {
              text-align: center;
            }
            .home-caption05 {
              text-align: center;
            }
            .home-heading06 {
              text-align: center;
            }
            .home-caption06 {
              text-align: center;
            }
            .home-quote-content {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-quote-content1 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content08 {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-amount {
              max-width: 1000%;
            }
            .home-donation-use {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-header08 {
              max-width: 100%;
            }
            .home-accordion {
              width: 100%;
            }
            .home-content14 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-slider {
              gap: var(--dl-space-space-threeunits);
            }
            .home-footer {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .home-content {
              gap: var(--dl-space-space-threeunits);
            }
            .home-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-mission {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-title {
              font-size: 12px;
            }
            .home-header01 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading01 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-caption01 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-highlights {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-highlight {
              gap: var(--dl-space-space-unit);
            }
            .home-title1 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-highlight1 {
              gap: var(--dl-space-space-unit);
            }
            .home-title2 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-image04 {
              width: 200px;
            }
            .home-image05 {
              width: 200px;
            }
            .home-petitions {
              gap: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-heading02 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-caption02 {
              color: rgb(34, 34, 35);
              line-height: 24px;
            }
            .home-content03 {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-heading03 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-caption03 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-help {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-heading04 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-caption04 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-heading05 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-caption05 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-highlights1 {
              width: 100%;
            }
            .home-highlight2 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              flex-direction: column;
            }
            .home-title3 {
              width: 100%;
              text-align: center;
              padding-left: 0px;
              border-left-width: 0px;
            }
            .home-description2 {
              width: 100%;
              text-align: center;
            }
            .home-highlight3 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              flex-direction: column;
            }
            .home-title4 {
              width: 100%;
              text-align: center;
              padding-left: 0px;
              border-left-width: 0px;
            }
            .home-description3 {
              width: 100%;
              text-align: center;
            }
            .home-button08 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-heading06 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-caption06 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-highlight4 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              flex-direction: column;
            }
            .home-title5 {
              padding-left: 0px;
              border-left-width: 0px;
            }
            .home-description4 {
              text-align: center;
            }
            .home-highlight5 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              flex-direction: column;
            }
            .home-title6 {
              padding-left: 0px;
              border-left-width: 0px;
            }
            .home-description5 {
              text-align: center;
            }
            .home-button11 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-quote-one {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-quote-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-quote {
              font-size: 18px;
              text-align: center;
              line-height: 27px;
            }
            .home-quoted {
              flex-direction: column;
              justify-content: center;
            }
            .home-image09 {
              width: 40px;
              height: 40px;
            }
            .home-caption07 {
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
            }
            .home-button14 {
              padding: var(--dl-space-space-unit);
            }
            .home-icon10 {
              width: 8px;
              height: 8px;
            }
            .home-quote-content1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-quote1 {
              font-size: 18px;
              line-height: 27px;
            }
            .home-caption08 {
              font-size: 16px;
            }
            .home-caption09 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-content08 {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-heading07 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-caption10 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-amount {
              flex-direction: column;
            }
            .home-row1 {
              width: 100%;
            }
            .home-row2 {
              width: 100%;
            }
            .home-donation-use {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-heading08 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-caption11 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-element {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text13 {
              font-size: 16px;
            }
            .home-text14 {
              line-height: 24px;
            }
            .home-element1 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text15 {
              font-size: 16px;
            }
            .home-text16 {
              line-height: 24px;
            }
            .home-element2 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text17 {
              font-size: 16px;
            }
            .home-text18 {
              line-height: 24px;
            }
            .home-element3 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text19 {
              font-size: 16px;
            }
            .home-text20 {
              line-height: 24px;
            }
            .home-element4 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text21 {
              font-size: 16px;
            }
            .home-text22 {
              line-height: 24px;
            }
            .home-content14 {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-heading09 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-caption12 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-action {
              gap: var(--dl-space-space-threeunits);
            }
            .home-input {
              flex-direction: column;
            }
            .home-textinput {
              width: 100%;
              text-align: center;
            }
            .home-button19 {
              width: 100%;
            }
            .home-footer {
              padding-top: var(--dl-space-space-threeunits);
            }
            .home-navigation-links {
              flex-direction: column;
            }
            .home-text30 {
              font-size: 18px;
              line-height: 40px;
            }
            .home-text31 {
              font-size: 18px;
              line-height: 40px;
            }
            .home-bottom {
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .home-copyright {
              font-size: 10px;
              line-height: 15px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
