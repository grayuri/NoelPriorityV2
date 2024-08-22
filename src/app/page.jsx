import Image from "next/image";
import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle";
import AnimatedImage from "@/components/AnimatedImage/AnimatedImage";
import AnimatedParagraph from '@/components/AnimatedParagraph/AnimatedParagraph';
import './Home.scss';

export default function Home() {
  return (
    <main className='home'>
      <section className="block">
        <AnimatedTitle type="h3">
          Como Utilizar o Noel?
        </AnimatedTitle>
        <AnimatedParagraph>
          <span className="highlight">1o.</span> - Copie os Scannable IDs na área de <span className="highlight">Picking Picked</span>. Ou, dependendo do seu contexto, na área de <span className="highlight">Sorted</span>.
        </AnimatedParagraph>
        <AnimatedParagraph>
          <span className="highlight">2o.</span> - Cole no bloco de texto e envie.
        </AnimatedParagraph>
        <AnimatedParagraph>
          <span className="highlight">3o.</span> - Escaneie no Verificador de Prioridades.
        </AnimatedParagraph>
      </section>
      <section className="block">
        <AnimatedTitle type="h3">Uma Forma Mais Ágil e Prática de Copiar os IDs</AnimatedTitle>
        <AnimatedParagraph>
          <span className="highlight">1o.</span> - Baixe o <a href="https://www.tampermonkey.net/" target="_blank">Tamper Monkey</a>.
        </AnimatedParagraph>

        <AnimatedParagraph>
          <span className="highlight">2o.</span> - Acesse o código do <a href="https://gist.github.com/grayuri/ee7108524736c96ef1ebbc64445afac6" target="_blank">Noel Priority Copying IDs</a>.
        </AnimatedParagraph>

        <AnimatedParagraph>
          <span className="highlight">3o.</span> - Instale-o.
        </AnimatedParagraph>
        
        <div className="image-container">
          <AnimatedImage>
            <Image
              src="/images/npci1.png"
              alt="Installation of Noel Priority Copying IDs"
              fill
            />
          </AnimatedImage>
        </div>

        <AnimatedParagraph>
          Pronto! Após serem feitos esses passos, você terá um botão no Rodeo que copiará todos os Scannable IDs pra você.
        </AnimatedParagraph>
      </section>
    </main>
  );
}
