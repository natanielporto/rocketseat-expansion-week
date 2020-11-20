import React from 'react';
import { ComplaintHeader, InsightAnswer } from './styles';
import { GiBrokenHeart } from 'react-icons/gi';

const Footer = () => {
  return (
    <div>
      <ComplaintHeader>
        <div>Pô, Capitão...</div>
        <div>
          Assim tu me afunda o <GiBrokenHeart size={70} />.
        </div>
      </ComplaintHeader>
      <InsightAnswer>
        Agora, sem brincadeira: obrigado por me dar a ideia sobre o que fazer
        nesta página. O soft-skill mais importante para mim é a Adaptabilidade.
        Porém, o feedback vem antes na luta ovo-galinha: As pessoas que
        desenvolvem, estudam e se esforçam não têm idade definida. Nem
        possibilidades e condições iguais. Se não conseguir todos os
        achievements, me desestimulo e desisto das coisas. Eu achei que estava
        errado, até assistir a este{' '}
        <a href='https://www.youtube.com/watch?v=1ypOUn6rThM' target='_blank'>
          video
        </a>
        . Espero que vocês possam pensar nas pessoas que têm que prover para
        suas famílias e não gostariam de ficar de fora das coisas bacanas do
        curso. Afinal, todos queremos nos sentir parte da tripulação, correto?
        <br />
        Do que adianta ter resiliência, empatia, bom-senso, estratégia,
        adaptabilidade, se você não consegue absorver um feedback e tirar o
        melhor dele? Sem feedback - seu próprio ou dos outros, não existe
        adaptabilidade. Sem adaptabilidade, dificilmente se vai longe. Como
        diria o Sr. Bruce Lee:{' '}
        <em>
          “You must be shapeless, formless, like water. When you pour water in a
          cup, it becomes the cup. When you pour water in a bottle, it becomes
          the bottle. ... Water can drip and it can crash. Become like water my
          friend.”
        </em>
      </InsightAnswer>
    </div>
  );
};

export default Footer;
