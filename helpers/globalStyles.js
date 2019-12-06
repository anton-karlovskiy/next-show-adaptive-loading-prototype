import React from 'react'

export default function GlobalStyles () {
  return (
    <div>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          background-color: #333;
          margin: 0;
          color: #fff;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
          margin-bottom: 100px;
        }
      `}</style>
    </div>
  )
}
