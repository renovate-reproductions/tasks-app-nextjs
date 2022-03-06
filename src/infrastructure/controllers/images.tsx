import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { pagesPath, staticPath } from '../../../lib/$path';

const images = Object.values(staticPath.images).filter((path) =>
  path.endsWith('.jpg'),
);

const getNextIndex = (crr: number) =>
  crr + 1 > images.length - 1 ? 0 : crr + 1;

export const Images: React.VFC = () => {
  const [index, setIndex] = useState(() => Date.now() % (images.length - 1));
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const indexIntervalId = setInterval(() => {
      setIndex(getNextIndex);
    }, 5_000);

    const nowIntervalId = setInterval(() => {
      setNow(Date.now());
    }, 1_000);

    return () => {
      clearInterval(indexIntervalId);
      clearInterval(nowIntervalId);
    };
  }, []);

  const date = new Date(now);

  return (
    <>
      <Head>
        <title>Images</title>
      </Head>
      <Image
        src={images[index]}
        alt=""
        layout="fill"
        objectFit="cover"
        loading="eager"
      />
      <Link href={pagesPath.tasks.$url()} passHref>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <StyledTime dateTime={date.toISOString()}>
            {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
            }).format(date)}
          </StyledTime>
        </a>
      </Link>
    </>
  );
};

const StyledTime = styled.time`
  font-family: 'Fjalla One', sans-serif;
  font-size: 8vw;
  color: white;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  cursor: pointer;
`;
