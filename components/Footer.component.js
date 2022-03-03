import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className="card" id="footer">
        <div className="card-body d-flex">
          <div id="nombre" className="texto me-4">
            CryptoHackers
          </div>

          <div id="year" className="texto me-4">
            2022
          </div>

          <div id="nosotros" className="textoAccionable">
            <Link href="/nosotros">
              <a id="presionable" className="me-4">
                Nosotros
              </a>
            </Link>
          </div>

          <div id="terminosCondiciones" className="textoAccionable">
            <Link href="/terminosCondiciones">
              <a className="me-4">Términos y Condiciones</a>
            </Link>
          </div>

          <div id="contacto" className="textoAccionable">
            <Link href="/contactanos">
              <a>Contactanos</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
