import Image from "next/image";
import Link from "next/link";
import './globals.scss';

export default function NotFoundPage() {
  return (
    <main className="not-found-page">
      <Image 
        src="/images/page-not-found-image.svg"
        width={913 / 3}
        height={898 / 3}
        alt="Page Not Found Image"
      />
      <h2>Erro 404</h2>
      <h3>Essa Página Não Foi Encontrada!</h3>
      <p>Volte para a <Link href="/">página inicial</Link> do Noel para você poder utilizá-lo.</p>
    </main>
  )
}
