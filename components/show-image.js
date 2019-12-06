import React from 'react'

function ShowImage ({src, fullWidth, preview}) {
  const className = fullWidth ? 'fullwidth' : false

  return (
    <span>
      <img src={src} className={className} />
      <style jsx>{`
        .fullwidth {
          width: 100%;
        }
      `}</style>
    </span>
  )
}

export default ShowImage
