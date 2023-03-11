import React from 'react'
import Head from 'next/head'

const Feedback = (props) => {
  return (
    <>
      <div className="feedback-container">
        <Head>
          <title>Feedback - Helpa template</title>
          <meta property="og:title" content="Feedback - Helpa template" />
        </Head>
        <div className="feedback-container1">
          <input type="text" placeholder="placeholder" className="input" />
          <button className="button">Button</button>
        </div>
        <div className="feedback-container2">
          <form className="feedback-form"></form>
        </div>
      </div>
      <style jsx>
        {`
          .feedback-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .feedback-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .feedback-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .feedback-form {
            width: 200px;
            height: 100px;
            display: flex;
          }
        `}
      </style>
    </>
  )
}

export default Feedback
