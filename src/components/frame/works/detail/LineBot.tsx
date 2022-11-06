import React from 'react';
import classes from './Detail.module.css'
import { AiFillGithub } from 'react-icons/ai'

const LineBot = ({path}: any) => {
  return (
      <div className={classes.info}>
        <h3>概要</h3>
        <div className={classes.text}>
          <p>Lineアプリがインストールされた端末で使用可能なサービス。</p>
          <p>作成したLineBotを介し、個々人のLineアカウントで匿名性のあるチャットを可能にする。</p>
        </div>
        <h3>制作期間</h3>
        <div className={classes.text}>
          <p>2017年5月〜6月の1ヶ月ほど</p>
        </div>
        <h3>利用想定人数</h3>
        <div className={classes.text}>
          <p>10人前後</p>
        </div>
        <h3>使用言語・ツール</h3>
        <div className={classes.text}>
            <p>言語：PHP</p>
            <p>API：MessagingAPI（Line）</p>
            <p>開発環境：Windows</p>
            <p>エディタ：VSCode</p>
            <p>サーバー：https://www.xrea.com/</p>
            <p>ドメイン取得：https://www.value-domain.com/</p>
        </div>
        <h3>制作の意図</h3>
        <div className={classes.text}>
        <p>・OpenChatがなかった当時、匿名性のあるチャットを作ることで、気楽に発言する環境を設けるため。</p>
        <p>・例えば、勉強グループを作成し、間違った発言に対するプレッシャーに囚われず、
          自由に発言するための場に用いることができる。</p>
        <p>・既存のLineアプリを使用することで、アプリを新規開発せずに目的のサービスを実現できる。</p>
        </div>
        <h3>制作手順</h3>
        <div className={classes.text}>
          <p>１.ドメインを取得してサーバーを立てる。</p>
          <p>２.MessagingAPIが使用できるか簡単なプログラムを作成し、テストする。</p>
          <p>３.LineBotのアカウント情報、個々人のLineアカウントを保存する領域を決める。</p>
          <p>４.個人Lineアカウントからのメッセージを受け取り、他の個人Lineアカウントに送信するプログラムを作成する。</p>
        </div>
        <h3>制作段階の問題</h3>
        <div className={classes.text}>
          <p>１.ドメインを取得し、サーバー上にファイルを配置する際に躓く。</p>
          <p>　ドメインのSSL証明書を当てた際に、反映されるまで程度時間がかかることに気づかず、設定まで時間を要した。</p>
          <p>２.データベースを使うか否か</p>
          <p>　保存するデータはLineBotが持つ「ChannelToken」と個人アカウントの「UUID」のみである。</p>
          <p>　「Basic認証でテキストを保護する」「利用人数からデータ量の増加は気にならない」</p>
          <p>　以上からテキストベースでデータを保持することにした。</p>
        </div>
        <h3>課題と改善案</h3>
        <div className={classes.text}>
          <p>課題1：</p>
          <p>　URLのベタ書き、マジックナンバーの使用、コードの長さ、ネストの深さが目立つ。</p>
          <p>　PHPの厳密な設計思想のなさ故に、適当に書けてしまったコーディングと言える。</p>
          <p>　また、当ソースコードをiOSアプリに応用してしまっていた。</p>
          <p>改善案：</p>
          <p>　可読性、保守性を高めるために、ロジックの単純化という基本的なコーディング意識を持つ。</p>
          <p>課題2：</p>
          <p>　仕様上、自由に発言できるという反面、言葉に棘が出やすい。</p>
          <p>改善案：</p>
          <p>　公序良俗に反する内容を精査するAIの導入などを行う。</p>
        </div>
        <h3>全体図</h3>
        <img className={classes.image}
          src={`${ process.env.PUBLIC_URL }${path}`}
          alt=""
        />
        <h3>GitHub</h3>
        <a href='https://github.com/kudkun/bot-project'><AiFillGithub size={50} color={'gray'} /></a>
        
      </div>
  );
}

export default LineBot;
