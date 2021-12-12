import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Link from 'next/link';
import '../styles/Home.module.css';

function Home() {
  return (
    <div>
      <Head>
        <title>Python Learning</title>
        <link rel="icon" type="image/png" href="/python-icon.png" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" />
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"></script>
      </Head>
      <main>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#" style={{marginLeft: '1.5%'}}>Python-Learning</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" arial-controls="navbarNavDropdown" aria-expanded="false" aria-label="Alterna Navegação">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="https://python-learning.vercel.app">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/guia">Guia</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/bibliotecas">Libs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">Blog</a>
              </li>
              <li className='nav-item'>
                <a className="nav-link" href="/contato">Contato</a>
              </li>
            </ul>
          </div>
        </nav>

        <h1 className="mt-3 mb-3" style={{display: 'flex', justifyContent: 'center'}}>Introdução</h1>
        <p className="text-justify" style={{fontFamily: 'monospace', marginLeft: '3%', marginRight: '3%'}}>São várias as características do Python que a tornam uma linguagem tão promissora e, que atrai a cada dia, mais desenvolvedores. A seguir serão elucidados algumas destas características dele. Entre suas características, temos:</p>      
        <ul style={{marginLeft: '3%', marginRight: '3%', fontFamily: 'monospace'}}>
          <li><b>Fácil de Aprender:</b> O Python é uma linguagem fácil de ser aprendida e poderosa para trabalharmos. A mesma possui uma sintaxe limpa e clara, como também, contém um conjunto de módulos e bibliotecas estáveis e bem estruturadas.</li>
          <li><b>Fácil Leitura e Compreensão:</b> A sintaxe da linguagem é minimalista, ou seja, mantém somente o necessário, o que torna o código escrito, muitas vezes, um texto em Inglês.</li>
          <li><b>Fácil Manutenção:</b> Em decorrência da simplicidade sintática e da excelente estruturação das bibliotecas, a manutenção de códigos, seja aquele que desenvolvemos ou mesmo os de terceiros, tornam-se muito mais viável.</li>
        </ul>
      </main>
    </div>
  )
}

export default Home;
