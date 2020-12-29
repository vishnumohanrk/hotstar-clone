/* eslint-disable jsx-a11y/anchor-is-valid */
import NextLink from 'next/link';

import useCarousel from '../../hooks/useCarousel';
import { CarouselProps } from '../../utils/types';
import VerticalCard from '../cards/VerticalCard';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

interface VerticalCardCarouselProps extends CarouselProps {
  link: { name: string; src: string };
}

const VerticalCardCarousel = ({ dataList, link: { name, src } }: VerticalCardCarouselProps) => {
  const { next, prev, sliderRef, pos, leftDisable, rightDisable } = useCarousel(false);

  return (
    <div ref={sliderRef} className="keen-slider relative mt-3 rounded-md">
      <NextLink href={src}>
        <a className="absolute z-30 cursor-pointer text-xl font-semibold hover:text-accent">{name}</a>
      </NextLink>
      <LeftArrow onPress={prev} shouldDisable={leftDisable} />
      {dataList.map((i, j) => (
        <div
          key={i.id}
          className="keen-slider__slide h-80 flex flex-col justify-center rounded-md hover:z-40 mt-2"
          style={{ overflow: 'visible' }}
        >
          <VerticalCard {...i} pos={pos(j)} />
        </div>
      ))}

      <RightArrow onPress={next} shouldDisable={rightDisable} />
    </div>
  );
};

export default VerticalCardCarousel;
