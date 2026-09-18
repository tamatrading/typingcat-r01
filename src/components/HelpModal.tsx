import React from 'react';
import { X } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Step: React.FC<{ icon: string; children: React.ReactNode }> = ({ icon, children }) => (
  <div className="flex items-start gap-3 bg-purple-50 rounded-xl p-3 mb-2">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-lg shadow-sm">
      {icon}
    </div>
    <div className="flex-1 text-gray-700 leading-relaxed pt-1">{children}</div>
  </div>
);

const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-center font-black text-gray-500 my-4 tracking-wide">
    ── {children} ──
  </div>
);

// ほかのゲームへの ごあんない（2026-09-15 追加）。リンクは新しいタブで開く
const NextGame: React.FC<{
  href: string;
  emoji: string;
  step: string;
  title: string;
  children: React.ReactNode;
}> = ({ href, emoji, step, title, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener"
    className="flex items-start gap-3 bg-white border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 rounded-xl p-3 mb-2 transition-colors no-underline"
  >
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-lg">
      {emoji}
    </div>
    <div className="flex-1">
      <div className="text-xs font-black text-purple-500 tracking-wide">{step}</div>
      <div className="font-black text-gray-800">
        {title} <span className="text-purple-400 text-sm">↗</span>
      </div>
      <div className="text-gray-600 text-sm leading-relaxed mt-1">{children}</div>
    </div>
  </a>
);

// 「いま あそんでいるのは これ」を しめすカード（リンクではない）
const ThisGame: React.FC<{ step: string; title: string; children: React.ReactNode }> = ({
  step,
  title,
  children,
}) => (
  <div className="flex items-start gap-3 bg-purple-100 border-2 border-purple-300 rounded-xl p-3 mb-2">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-lg">
      🐱
    </div>
    <div className="flex-1">
      <div className="text-xs font-black text-purple-500 tracking-wide">{step}</div>
      <div className="font-black text-gray-800">
        {title} <span className="text-purple-500 text-xs">← いま ここ</span>
      </div>
      <div className="text-gray-600 text-sm leading-relaxed mt-1">{children}</div>
    </div>
  </div>
);

const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-black text-gray-800 mb-2">
            🐱 タイピングきゃっとの あそびかた
          </h2>
          <p className="text-gray-600 leading-relaxed mb-2">
            「あ」から「ぴゃ」まで、ひらがな 1文字ずつを ローマ字で うちこむ
            れんしゅうゲームだよ。ステージ1は F と J の ホームポジション
            練習から スタート！
          </p>

          <SectionHeading>あそびかた</SectionHeading>
          <Step icon="🖱">
            左上の「<b>管理</b>」ボタン（または <b>V キー</b>）で、練習したい
            範囲を選ぼう。あ行〜ぴゃ行まで、全 <b>33ステージ</b>あるよ。
          </Step>
          <Step icon="⌨️">
            画面に出てくる 文字を、ローマ字で タイピングしよう。
          </Step>
          <Step icon="⏱">
            制限時間内に うち終えると <b>スコアGET</b>！ 時間切れや まちがいは
            ライフが 1へる。
          </Step>
          <Step icon="💔">
            ライフが 0になると ゲームオーバー。そこまでの スコアが
            <b> ハイスコア</b>に 記録されるよ。
          </Step>
          <Step icon="🏆">
            1つの ステージで 20問 終えると <b>ステージクリア</b>！
            次のステージに進むと、背景も かわるよ。
          </Step>

          <SectionHeading>このゲームの しかけ</SectionHeading>
          <Step icon="🖐️">
            ステージ1は <b>F と J</b>の ホームポジション練習。
            指の おきばしょを 体で おぼえよう。
          </Step>
          <Step icon="⚡">
            はやく 正確に うつほど 高得点！ 管理画面の
            「タイムアウト速度」を 上げると、ボーナス倍率も アップするよ。
          </Step>
          <Step icon="👀">
            「ローマ字ヒント」を <b>OFF</b>にすると、スコアが
            <b> 1.5倍</b>に！ ヒント無しで うてるようになったら 挑戦してみよう。
          </Step>
          <Step icon="🔤">
            ローマ字の <b>大文字／小文字</b>も、管理画面から 切りかえできる。
          </Step>
          <Step icon="🌟">
            ハイスコアは ブラウザに 自動で 保存される。次のプレイで
            自己ベスト更新を ねらおう！
          </Step>

          <SectionHeading>管理画面でできること</SectionHeading>
          <Step icon="⚙️">
            練習する範囲の えらびかた・出題モード（順番通り／ランダム）・
            キーボードの表示・ローマ字ヒント・大文字小文字・タイムアウト速度・
            画面の大きさまで、ぜんぶ この中で 調整できるよ。
          </Step>

          <div className="bg-yellow-50 rounded-xl p-3 text-sm text-gray-700 leading-relaxed mt-4">
            💡 まずは「F」と「J」の 位置を 体で おぼえよう。キーボードを
            見ないで うてるようになるのが、上達の 近道だよ！
          </div>

          <div className="mt-6 p-4 bg-purple-50 rounded-xl">
            <p className="text-purple-700 text-center font-bold">
              さあ、かわいい猫と いっしょに 楽しく タイピングの 練習を
              はじめよう！
            </p>
          </div>
          {/* ▼ 2026-09-15 追加：ほかのゲームへの ごあんない と、大人むけの せつめい */}
          <SectionHeading>つぎは これに ちょうせん</SectionHeading>
          <p className="text-gray-600 leading-relaxed mb-3">
            「まなびタイム」には、キーボードが とくいになるための ゲームが
            3つ あるよ。じゅんばんに すすむのが おすすめ！
          </p>
          <NextGame
            href="https://manabi-time.com/romaji/"
            emoji="🗺"
            step="STEP 1 ローマ字を おぼえる"
            title="ローマ字ぼうけん"
          >
            「か」が <b>ka</b> だと すぐ 出てこないなら、まず こっち。
            すごろくを すすみながら ローマ字を ぜんぶ おぼえられるよ。
          </NextGame>
          <ThisGame step="STEP 2 1文字を うつ" title="タイピングきゃっと">
            ひらがな 1文字を うって、キーの ばしょを 手で おぼえる。
          </ThisGame>
          <NextGame
            href="https://manabi-time.com/typing/"
            emoji="🍎"
            step="STEP 3 ことばを うつ"
            title="タイピングたんご！"
          >
            1文字が うてるように なったら つぎは ことば。「すいか」「おべんとう」
            みたいな たんごを、止まらずに うつ れんしゅうだよ。
          </NextGame>

          <SectionHeading>おうちの方・先生へ</SectionHeading>
          <div className="text-[13px] sm:text-sm text-gray-600 leading-relaxed space-y-3">
            <p>
              「タイピングきゃっと」は、<b>ひらがな1文字をローマ字で打つ</b>ところから
              始める、小学生向けの無料タイピング練習です。出題を1文字にしぼることで、
              「ローマ字を思い出す」作業と「キーをさがす」作業が重ならないようにしています。
              ステージ1は <b>F と J のホームポジション</b>、そこからあ行〜ぱ行・拗音・促音まで
              <b>全33ステージ</b>です。
            </p>
            <p>
              左上の「管理」ボタン（<b>V キー</b>）から、練習する範囲・出題順（順番／ランダム）・
              画面キーボードの表示・ローマ字ヒント・大文字小文字・制限時間の速さ・画面の大きさを
              設定できます。学級の進度に合わせて範囲を決めてからお使いください。
            </p>
            <p>
              <b>ゲーム性はあえて控えめにしています。</b>演出でテンションを上げるより、
              練習量がたまることを優先した作りです。授業のはじめの5分にも使えます。
            </p>
            <p>
              会員登録もインストールも不要、<b>無料</b>です。広告はなく、
              <b>個人情報も一切取得していません</b>。ハイスコアと設定は、お使いの端末の
              ブラウザの中だけに保存されます。学校の授業でも家庭でも、ご連絡なしで
              自由にお使いいただけます。
            </p>
            <p>
              対応端末：パソコン・Chromebook・タブレット（キーボードで打つ練習のため、
              スマートフォンの細い画面には対応していません）。
            </p>
            <p className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
              <a
                href="https://manabi-time.com/"
                target="_blank"
                rel="noopener"
                className="text-purple-600 underline"
              >
                まなびタイム（教材いちらん）
              </a>
              <a
                href="https://manabi-time.com/privacy/"
                target="_blank"
                rel="noopener"
                className="text-purple-600 underline"
              >
                プライバシーポリシー
              </a>
            </p>
          </div>
          {/* ▲ 2026-09-15 追加ここまで */}
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
