import React from 'react'
import { ReactComponent as Corner } from '../data/corner.svg';

const GithubCorner = () => {
  return (
    <div className="github-corner">
      <a href="https://github.com/tomik23/react-leaflet-examples" target="_blank" rel="noreferrer" aria-label="View source on GitHub">
        <Corner />
      </a>
    </div>
  )
}

export default GithubCorner;