import React from 'react';
import classes from './Detail.module.css'
import { AiFillGithub } from 'react-icons/ai'

const LocalChat = ({path}: any) => {
  return (
      <div className={classes.info}>
        <h3>概要</h3>
        <div className={classes.text}>
          <p>勝手にチャットアプリをダウンロードできないイントラネットで使えるチャットツール</p>
        </div>
        <h3>制作期間</h3>
        <div className={classes.text}>
          <p>2018年7月〜2018年8月の1ヶ月</p>
        </div>
        <h3>利用想定人数</h3>
        <div className={classes.text}>
          <p>2名</p>
        </div>
        <h3>使用言語・ツール</h3>
        <div className={classes.text}>
            <p>言語：Java</p>
            <p>開発環境：Windows、macOS</p>
            <p>エディタ：IntelliJ Idea CE</p>
            <p>テスト環境：Docker</p>
        </div>
        <h3>制作の意図</h3>
        <div className={classes.text}>
        <p>・セキュリティ上の理由から、インターネット上のチャットアプリを使用できない環境に、
            簡単なチャットツールを設ける。
        </p>
        <p>・端末の標準機能でメッセージを送信することもできるが、
            OSによるコマンドの違いを吸収するため。
        </p>
        </div>
        <h3>制作手順</h3>
        <div className={classes.text}>
          <p>１.Threadクラスを継承したサブクラス(Client、Server)を用意する。</p>
          <p>２.Clientは、インスタンス生成時に接続先IPとポート番号を設定し、
            runメソッドが実行されると接続をリクエストしてメッセージを送信させる処理を書く。
          </p>
          <p>３.Serverは、接続された場合にSocketを設定するコンストラクタを用意し、
            runメソッドが実行されるとメッセージを受信する処理を書く。
          </p>
          <p>４.mainメソッドでは、ユーザから「接続先を指定する/接続を待つ」の選択を行わせ、
            接続先を指定してClientを実行した場合には、双方向のメッセージを行うためServerを起動する。
            また、接続を待つServerを実行した場合には、双方向のメッセージを行うためClientを起動する。
          </p>
        </div>
        <h3>制作段階の問題</h3>
        <div className={classes.text}>
        </div>
        <h3>課題と改善案</h3>
        <div className={classes.text}>
          <p>課題1：</p>
          <p>　Thread管理の難しさ</p>
          <p>　例外の管理や実行結果を受け取ることができない。</p>
          <p>改善案：</p>
          <p>　Executerフレームワークを使い、Threadの実行結果を直接得られるようにする。
          Threadの再利用を可能にする。</p>
        </div>
        <h3>Javaに関する課題</h3>
        <div className={classes.text}>
          <p>課題1：</p>
          <p>　低レイヤでの処理を学ぶことはWeb開発業務に直接は繋がらない。</p>
          <p>改善案：</p>
          <p>　書籍「プロになるJava」を購入してみたところ、Threadに関する記述が
            一切なかった。そのことについて著者に聞いてみたところ、「必要なんだけど、
            その前に知っておくべきことがたくさんあって、シングルスレッドでの
            処理がちゃんと書けることを優先しました。(原文ママ)」と返答をいただきました。
            基礎的なところを疎かにして、作りたいものを優先していることに気がついた。
            本書籍をしっかり読み込み、コーディングおよび開発技法やバージョン管理など
            Web開発の基礎を身に付けることにする。
          </p>
        </div>
        <div ></div>
        <h3>全体図</h3>
        <img className={classes.image}
          src={`${ process.env.PUBLIC_URL }${path}`}
          alt=""
        />
        <h3>GitHub</h3>
        <AiFillGithub href='https://github.com/kudkun/chat-project' size={50} color={'gray'} />
      </div>
  );
}

export default LocalChat;
