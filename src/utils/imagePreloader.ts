// ゲーム内で使用する画像のパス
const gameImages = [
  '/src/components/images/0m4DrTxBBkIIYVd1707690500_1707690507.PNG',  // スタート画面
  '/src/components/images/JOtKu6umE2LVUJQ1707544468_1707544476.png',  // ゲームオーバー
  '/src/components/images/twX6RKGzQ0QBcBS1707543586_1707543594.png',  // ステージクリア
  '/src/components/images/K2UNhLpEtGEx6091707911946_1707912033.png',  // ゲームクリア
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