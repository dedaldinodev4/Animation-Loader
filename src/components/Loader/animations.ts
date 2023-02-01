import animeOne from '../../lotties/135039-loader.json'
import animeTwo from '../../lotties/135200-loader.json'
import animeThree from '../../lotties/134723-loading-43.json'


const createAnimation = (animation: any, name: string) => {
  return {
    name: `${name}`,
    lopp: true,
    autoplay: true,
    animationData: animation,
    renderSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
}


export const options = {
  '1': createAnimation(animeOne, 'animeOne'),
  '2': createAnimation(animeTwo, 'animeTwo'),
  '3': createAnimation(animeThree, 'animeThree'),
} 