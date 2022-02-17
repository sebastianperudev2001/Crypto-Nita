import Link from 'next/link';
import BotonMenuPrincipal from '../components/botonMenuPrincipal.component';
import Footer from '../components/Footer.component';
import Nosotros from '../components/Nosotros.component';

/*
NFTs recuperados de: https://thedogepoundnft.com/doge#
*/
export default function nosotros() {
  return (
    <>
      <div id="paginaNosotros">
        <Nosotros />
        <BotonMenuPrincipal />
        <Footer />
      </div>
    </>
  );
}
