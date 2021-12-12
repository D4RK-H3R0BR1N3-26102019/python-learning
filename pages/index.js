import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <Head>
        <title>Python Learning</title>
        <link rel="icon" type="image/png" href="/python-icon.png" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" />
      </Head>
    </div>
  )
}

export default Home;
