import startImage from '@images/0m4DrTxBBkIIYVd1707690500_1707690507.png';
import gameOverImage from '@images/JOtKu6umE2LVUJQ1707544468_1707544476.png';
import stageClearImage from '@images/twX6RKGzQ0QBcBS1707543586_1707543594.png';
import gameClearImage from '@images/K2UNhLpEtGEx6091707911946_1707912033.png';

const gameImages = [
  startImage,
  gameOverImage,
  stageClearImage,
  gameClearImage
];

export const preloadGameImages = (): Promise<void[]> => {
  const loadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
      img.src = src;
    });
  };

  return Promise.all(gameImages.map(loadImage));
};