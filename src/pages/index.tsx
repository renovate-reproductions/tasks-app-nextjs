import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import styled from 'styled-components'

import { pagesPath, staticPath } from '../lib/$path'

const Title = styled.h1`
  color: yellow;
  font-size: 50px;
`

export default () => {
  useEffect(() => {
    fetch('https://tasks-api-express.herokuapp.com/api/v1/tasks')
      .then((res) => res.json())
      .then(console.log)
  }, [])

  return (
    <div>
      <Title>index</Title>
      <Image
        src={staticPath.android_chrome_384x384_png}
        alt="Picture of the author"
        width={384}
        height={384}
      />
      <Link href={pagesPath._id('hoge').$url()}>detail</Link>
    </div>
  )
}
