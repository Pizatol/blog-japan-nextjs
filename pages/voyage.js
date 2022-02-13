

import React from 'react';
import { useRouter } from 'next/router'


export default function voyage() {

  const router = useRouter()

console.log(router.asPath);
  return <div>

	  <h1>Ceci est la page VOYAGE</h1>
  </div>;
}
