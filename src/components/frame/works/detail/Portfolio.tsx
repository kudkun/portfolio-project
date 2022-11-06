import React from 'react';
import classes from './Detail.module.css'
import { AiFillGithub } from 'react-icons/ai'

const Portfolio = ({path}: any) => {
  return (
      <div className={classes.info}>
        <h3>概要</h3>
        <div className={classes.text}>
          <p>ポートフォリオサイト</p>
        </div>
        <h3>制作期間</h3>
        <div className={classes.text}>
          <p>2022年10月30日〜2022年11月5日の1週間（制作途中）</p>
        </div>
        <h3>使用言語・ツール</h3>
        <div className={classes.text}>
            <p>言語：TypeScript、HTML/CSS</p>
            <p>ライブラリ：React.js</p>
            <p>開発環境：macOS</p>
            <p>エディタ：VScode</p>
            <p>デザインツール：Adobe XD</p>
            <p>サーバー：https://www.xrea.com/</p>
            <p>ドメイン取得：https://www.value-domain.com/</p>
        </div>
        <h3>制作の意図</h3>
        <div className={classes.text}>
          <p>私の作品を一覧にし、実績と課題を明確にするために制作した。</p>
          <p>ストレスなく閲覧できるようにリンクなどを省いたNativeアプリ風を目指す。</p>
          <p>Reactで会員制クチコミサイトを作るにあたって、そもそものCSSで躓いてしまい、
            CSSの基本構文をポートフォリオで学び直す。
          </p>
        </div>
        <h3>制作手順</h3>
        <div className={classes.text}>
          <p>１.Webサイトのデザインを決める。</p>
          <p>２.コンポーネントを決める。</p>
          <p>３.ヘッダー、Topページ、Topページから表示するAbout、Works、Contactページを作成する。</p>
          <p>４.Worksページに載せる作品を整理して、概要ページを作成する。</p>
        </div>
        <h3>制作段階の問題</h3>
        <div className={classes.text}>
          <p>１.コンポーネントはどの単位で分割するか</p>
          <p>　再利用を考えた時にどこまで分割すれば良いのかわからず、
            現状はヘッダー、作品ごとのモーダルという単位でコンポーネントを作成している。
          </p>
          <p>２.CSSの記述方法</p>
          <p>　Reactにはmui(旧Material UI)があるが、CSSをできるだけ書かずに、
            muiに依存して良いのか悩んだ。
          </p>
          <p>　マテリアルデザインに則ってデザインできれば、CSSでもmuiでも問題がなく、
            時と場合によって使い分ける必要があるという認識をした。
          </p>
          <p>　今回は、設計の手間がかかるためSassなどは用いず、スコープ汚染を防ぐために、
            CSS Moduleを使用した。また、ハンバーガーメニューやスライドモーションについては、
            muiを活用することにした。
          </p>
          <p>３."key"に関するWarningの発生</p>
          <p>　オブジェクトをmapで処理し際に、マップ内での親タグにkeyをつけないと、
            Warningが出てしまうことに気づかず、解決に時間がかかった。
          </p>
        </div>
        <h3>発見</h3>
        <div className={classes.text}>
            <p>１.自動型変換について</p>
            <p>　アンボクシングをしようとするとエラーが出る。
                Reactのどの拡張機能かは不明なので調べておくことにする。
            </p>
            <p>２.アロー関数について</p>
            <p>　従来のfunction関数しかコーディングの経験がなかったため、
                記述方法に戸惑った。
            </p>
            <p>　・コンストラクタが存在しない</p>
            <p>　・「this」はクラス変数を指さない</p>
            <p>　・残余引数「...」を使って要素の追加などができる</p>
            <p>など</p>
            <p>3.react-router-domについて</p>
            <p>　SPAを意識したWebサイトを作ろうと考え、ページ遷移を行わないように設計した。
                しかし、react-router-domのLinkタグは、アドレスバーを変化させ、
                ユーザにはあたかもページ遷移しているように見せる。ページ遷移しているという認識誤りから、
                当サイトはreact-router-domを使わずにコーディングしている。
            </p>
        </div>
        <h3>課題と改善案</h3>
        <div className={classes.text}>
          <p>課題1：</p>
          <p>　作品概要ページの文章をベタ書きにしており、
          設定とViewは分けるべきというReactの基本的設計思想に則っていない。
          </p>
          <p>改善案：</p>
          <p>
            　概要ページコンポーネントにpropsで内容を渡すことで、概要ページごとに
            コンポーネントを用意して文章をベタ書きすることはなくなる。
          </p>
          <p>課題2：</p>
          <p>　当サイトにはヘッダーコンポーネントのハンバーガーメニューからAboutを選択すると、
            メインコンポーネントのAboutが赤くなる処理がある。
            また、メインコンポーネント内のAboutを押下しても、同じく赤くなる。
          </p>
          <p>　ヘッダーからメインへのpropsのバケツリレーで結合度が高くなるため、
            useContextを使用したが、Providerタグ内に子コンポーネントを記載する必要がある。
          </p>
          <p>
            　メインからヘッダーの状態を見るという操作をしたいが、方法がわかっておらず、
            ヘッダーとメインを分離するという解決に至っていない。
          </p>
          <p>改善案：</p>
          <p>　解決方法が見つかり次第修正する。
          </p>
          <p>課題3：</p>
          <p>　TypeScriptの利点を活かせていない</p>
          <p>　型を付けることができるTypeScriptだが、propsにおいて
            型をつけるとエラーが起きてしまい、anyで逃げてしまっている。
          </p>
          <p>改善案：</p>
          <p>　propsの型定義については、分かり次第修正することとする。
            また、学習において、TODOリストを作成した際に「Type Assertion（as構文）」や
            「Non-null assertion operator（!構文）」、「Type Guard」でバグを生み出せることがわかった。
            今後の開発においては、逃げない型宣言と条件分岐でバグを生み出さないようにする必要がある。
          </p>
          <p>課題4：</p>
          <p>　React hooksの機能を活かせていない</p>
          <p>改善案：</p>
          <p>　ポートフォリオサイトにReactの使用はオーバースペックにも感じられるが、
            会員制クチコミサイトをReactで作るために、今回React開発での考え方を学ぶことができた。
            今回の学びと反省を活かし、hooksを有効活用した開発を行いたい。
          </p>
        </div>
        <h3>GitHub</h3>
        <a href='https://github.com/kudkun/portfolio-project'><AiFillGithub size={50} color={'gray'} /></a>
      </div>
  );
}

export default Portfolio;
