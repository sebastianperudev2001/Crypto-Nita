import Link from 'next/link';

export default function BotonMenuPrincipal() {
  return (
    <Link href="/">
      <button className="regresar">Menú Principal</button>
    </Link>
  );
}
