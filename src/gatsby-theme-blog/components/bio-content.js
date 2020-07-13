import React from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      Developer at <Styled.a href="https://tydy.co" target='_blank'>Tydy co.</Styled.a> Catch my thoughts at <Styled.a href="https://amrithnath.dev/">my site :D</Styled.a>.
      {` `}
      <br />
      Or drop in and say hi 👋.
    </>
  )
}
