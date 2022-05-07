import Link from 'next/link';

import { pagesPath } from '../../lib/$path';

const Height = () => (
  <ul>
    <li>
      <Link href={pagesPath.vh.$url()}>vh</Link>
    </li>
    <li>
      <Link href={pagesPath.svh.$url()}>svh</Link>
    </li>
    <li>
      <Link href={pagesPath.lvh.$url()}>lvh</Link>
    </li>
    <li>
      <Link href={pagesPath.dvh.$url()}>dvh</Link>
    </li>
  </ul>
);

export default Height;
