import Image from 'next/image';
import Link from 'next/link';

import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle"
import AnimatedParagraph from '@/components/AnimatedParagraph/AnimatedParagraph';
import './Home.scss';
import AnimatedImage from '@/components/AnimatedImage/AnimatedImage';

export default function Home() {
  return (
    <main className='home'>
      <section className="block">
        <AnimatedTitle type="h3">Introdução</AnimatedTitle>
        <AnimatedParagraph>
          Olá! Um prazer vê-lo(a) por aqui. É também um deleite apresentar para todos vocês o Noel, um
          projeto prático e versátil, o qual é extremamente útil para <span className="highlight">facilitar o seu fluxo de trabalho na verificação de dwells e prioridades (CPTs)</span>.
        </AnimatedParagraph>
        <AnimatedParagraph>
          Até o momento (15/04/2024), <span className="highlight">o Noel ainda não está completamente automatizado para agilizar ainda mais a verificação de dados</span>, tudo isso graças a, é claro, sensibilidade presente na distribuição
          dos dados presentes na ferramenta mais essencial e fundamental do nosso FC (REC1): o Rodeo.
        </AnimatedParagraph>
        <AnimatedParagraph>
          Contudo, isso <span className="highlight">pode mudar no futuro</span>, e se vocês (Shadows, PAs, Shifts ou entusiastas) tiverem a
          oportunidade de vislumbrar essa evolução, será um prazer demonstrá-los o máximo da capacidade
          do nosso querido Noel.
        </AnimatedParagraph>
        <AnimatedParagraph>
          Caso queiram visualizar como o Noel poderá se tornar no futuro, deixarei disponibilizado o <span className="highlight">
            link do
            protótipo
          </span> - assim vocês poderão avaliar e apoiar o crescimento dele.
        </AnimatedParagraph>
        <div className="link-out">
          <AnimatedImage className="icon">
            <Image
              src="/icons/figma-icon.svg"
              width={25}
              height={32}
              alt='Figma Icon'
            />
          </AnimatedImage>
          <Link href="https://www.figma.com/file/x0Cv4XRb3KHZeHKk0tpiXg/Noel-Priority?type=design&node-id=1%3A4&mode=design&t=jWptysZDFI1yvZ8K-1" target="_blank">
            <AnimatedParagraph>
              Assim será o Noel
            </AnimatedParagraph>
          </Link>
        </div>
      </section>
      <section className="block">
        <AnimatedTitle type="h3">
          Como Utilizar o Noel?
        </AnimatedTitle>
        <AnimatedParagraph>
          <span className="highlight">No momento, Noel só tem duas funcionalidades presentes:</span> Removedor de Duplicatas e Verificador
          de Prioridades. <span className="highlight">Ambas as funcionalidades possuem a mesma lógica de inserção de dados</span>:
          Copiaremos do Rodeo os Scannable IDs (IDs Escaneáveis) dos Totes, Cages ou Carts, e jogá-los nas
          caixinhas para depois enviar. Pronto! Com isso, você já poderá trabalhar com estes dados.
        </AnimatedParagraph>
        <AnimatedParagraph>
          Antes de explicar separadamente as duas funcionalidades, não posso me esquecer de recomendar
          para vocês especificamente o local onde devemos retirar os dados.
        </AnimatedParagraph>
        <article className="child-block">
          <AnimatedTitle type="h4">Onde Pegar Os Dados?</AnimatedTitle>
          <AnimatedParagraph>
            Ao dar de cara com o Rodeo, <span className="highlight">iremos focar nos dados presentes na seção WIP (Work In Progress)</span>,
            nessa seção, pegaremos os códigos dos Totes, Cages ou Carts que estão presentes nos dados <span className="highlight">
              com
              status Picking Picked
            </span>. Contudo, você deve estar se perguntando: por que pegar somente estes
            dados? Porque são estes Totes, Cages ou Carts que ainda estão em coleta ou já foram coletados
            para assim serem encaminhados para nós. Ou seja, <span className="highlight">
              pegaremos somente os dados essenciais que já
              estão ao nosso dispor
            </span>, basta procurarmos e achá-los quando for possível.
          </AnimatedParagraph>
        </article>
        <article className="child-block">
          <AnimatedTitle type="h4">Como Usar o Removedor de Duplicatas?</AnimatedTitle>
          <AnimatedParagraph>
            Primeiramente, o que ele faz? <span className="highlight">Remove duplicatas</span>. Próximo bloco!
          </AnimatedParagraph>
          <AnimatedParagraph>
            Brincadeiras à parte... sim, ele remove duplicatas, mas por quê? <span className="highlight">
              Para imprimirmos os dados que
              inserimos no Printmoon
            </span> (nosso software de impressão de códigos de barra). Digamos que nós
            iremos imprimir uns Totes bem específicos e, em cada um desses Totes, há diversos produtos.
            Concordam comigo que haverá redundâncias se eu simplesmente copiar todos os produtos que são
            prioridades? Ou seja, se um Tote tiver 10 produtos, irá imprimir 10 vezes o código desse Tote. Mas
            eu não preciso de 10 códigos desse Tote, correto? Precisamos somente de um. É isso que o
            removedor de duplicatas faz, ele <span className="highlight">
              irá remover todas as duplicatas de todos os códigos dos Totes e irá
              me retornar os valores concisos de cada ID
            </span>. Basta agora só copiar estes códigos e enviar para o
            Printmoon e imprimir. Simples, mas prático, não é?
          </AnimatedParagraph>
        </article>
        <article className="child-block">
          <AnimatedTitle type="h4">Como Usar o Verificador de Prioridades?</AnimatedTitle>
          <AnimatedParagraph>
            Como fizemos no Removedor de Duplicatas, iremos enviar os dados na caixinha inicial que é
            fornecida para nós. Após enviarmos estes dados, iremos escanear no verificador de prioridades os
            códigos de barras presentes nos Totes, Cages ou Carts. Com base nos dados que enviamos
            previamente, <span className="highlight">
              o verificador irá, logicamente, analisar se o código que escaneamos é uma prioridade
              ou não
            </span>. Isso irá facilitar bastante o trabalho dos nossos queridos Shadows e PAs, pois, ao
            simplesmente escanear diversos Totes, eles <span className="highlight">
              conseguirão verificar com praticidade as prioridades
              que eles devem destacar ou levar diretamente para as estações de empacotamento
            </span>.
          </AnimatedParagraph>
        </article>
      </section>
      <section className="block">
        <AnimatedTitle type="h3">Considerações Finais</AnimatedTitle>
        <AnimatedParagraph>
          Caso tenham percebido, na introdução e no protótipo que forneci, citei o Checador de Dwells e a
          automatização do Checador de Prioridades, operações e funcionalidades que poderiam existir
          devido a sua robusta utilidade. Contudo, como eu possuo a (previsível) interdição dos dados
          presentes no banco de dados do Rodeo, <span className="highlight">
            não tive a possibilidade de aumentar a robustez do nosso
            querido Noel
          </span>, e tudo bem, pois essa interdição é algo completamente compreensível (e sensível).
        </AnimatedParagraph>
        <AnimatedParagraph>
          Entretanto, se todos nós apoiarmos e alertarmos para ser feita esta expansão, <span className="highlight">
            tudo isso poderá
            existir no futuro
          </span>, e será fantástico vislumbrar a valorização e visibilidade de algo que começou
          pequeno, mas que, devido a sua importância, pôde se tornar algo grande (e escalável).
        </AnimatedParagraph>
        <AnimatedParagraph>
          Meus queridos, isso é tudo que tenho a dizer para todos vocês. Agradeço de coração a visibilidade e
          atenção de cada um de vocês para estas instruções e informações. Nada disso teria existido sem a
          genialidade de <span className="highlight">Emanuel Macário (nosso mestre)</span>, o gatilho lógico de <span className="highlight">Matheus Vinícius (nosso shift)</span>,
          e o apoio incondicional das <span className="highlight">nossas pérolas preciosas: Milene Silva, Elivelton Gomes, Maysa Nascimento e André Brito</span>.
        </AnimatedParagraph>
      </section>
    </main>
  );
}
