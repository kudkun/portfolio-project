import { useState } from 'react';
import common from '../Common.module.css';
import classes from './Works.module.css';
import { motion } from 'framer-motion';
import { yFrom, yTo } from '../../../InterfaceAnimation';
import LineBot from './detail/LineBot';
import SwiftApp from './detail/SwiftApp';
import Portfolio from './detail/Portfolio';
import LocalChat from './detail/LocalChat';


// TODO：LineBot、SwiftAppコンポーネントにおいて、HTMLベタ書きで大体同じフォーマットを使っている。
// 保守性を上げるためにはどうしたら良いか。
const Works = () => {
  const [ frame, setFrame ] = useState<String>('');
  const [ open, setOpen ] = useState<boolean>(false);

  // const ref = useRef<HTMLDivElement>(null);

  //表示するフレームの名前を設定する
  const frameName = (name: string) => { setFrame(name); }

  //フレームの表示・非表示を切り替える
  const frameState = () => { setOpen(!open); }

  type WorksType = {
    title: string,
    caution?: string,
    path: string,
    alt: string,
    name: string,
  }

  //ハンバーガーメニュー内のメニュー配列
  const works: WorksType[] = [{
    title: "匿名Lineグループ(OpenChatの先駆け)",
    path: "/anonymous/talk.png",
    alt: "匿名で会話している画面",
    name: "LineBot"
  },{
    title: "講義管理・通知アプリ(iOS)",
    path: "/ios/top.png",
    alt: "iOSアプリのトップページ",
    name: "SwiftApp"
  },{
    title: "当ポートフォリオについて",
    path: "/me/portfolio.png",
    alt: "当ポートフォリオについて",
    name: "Portfolio"
  },{
    title: "ローカルチャットツール",
    path: "/chat/localChat.png",
    alt: "ローカルチャットツール",
    name: "LocalChat"
  },{
    title: "会員制クチコミサイト",
    caution: "詳細ページは準備中です",
    path: "/hime-mati/post.png",
    alt: "サイトの口コミ投稿ページ",
    name: "Posting"
  },{
    title: "業務効率化ツール",
    caution: "詳細ページは準備中です",
    path: "/wait/sample.png",
    alt: "業務効率化ツール",
    name: "Business"
  },{
    title: "RaspberryPiを用いたIoTの研究",
    caution: "詳細ページは準備中です",
    path: "/wait/sample.png",
    alt: "RaspberryPiを用いたIoTの研究",
    name: "RaspberryPi"
  }]

  return (
    <motion.div 
      initial={yFrom}
      animate={yTo}
      className={common.frame}
    >
      {/* 作品を一覧として配列から読み込んで表示する */}
      <div className={classes.works}>
        {works.map((item) => (
          <div className={classes.block}
            key={item.name}
          >
            <p>{item.title}</p>
            <p style={{color: 'red', fontSize: '8px', margin:'0'}}>{item.caution}</p>
            <img
              src={`${ process.env.PUBLIC_URL }${item.path}`}
              alt={item.alt}
              onClick={() => { frameName(item.name); frameState(); }}
            />
          </div>
        ))}
      </div>
      {/* 作品の画像が押下されたときの処理 */}
      { open && (
        <div id={classes.overlay}>
          <div id={classes.content}>
            <button className={classes.closeBtn}
              onClick={() => { frameState(); }}
            >
              <i>X</i>
            </button>
            
            {/* TODO：コンポーネントを一つにまとめる */}
            {/* 作品ごとのフレームを表示する */}
            { frame === 'LineBot' ? <LineBot path={"/anonymous/overall.png"} /> : undefined}
            { frame === 'SwiftApp' ? <SwiftApp path={"/ios/overall.png"} /> : undefined }
            { frame === 'Portfolio' ? <Portfolio path={"/me/overall.png"} /> : undefined }
            { frame === 'LocalChat' ? <LocalChat path={"/chat/overall.png"} /> : undefined }
          </div>
        </div>
      )}
      
      {/* <div ref={ref}></div> */}
    </motion.div>
  );
}

export default Works;
