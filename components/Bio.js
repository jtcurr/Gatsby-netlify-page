import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render () {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`author ${config.authorName}`}
          style={{
            float: 'left',
            marginRight: rhythm(1/4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        Written by <strong>{config.authorName}</strong> lives in San Francisco and he can tie his shoes wearing boxing gloves. You should check out his <a href="https://www.linkedin.com/in/john-currie-7215a5b9/">Linkedin</a> page.
      </p>
    )
  }
}

export default Bio
