import React from 'react';
import classes from './Detail.module.css'
import { AiFillGithub } from 'react-icons/ai'

const SwiftApp = ({path}: any) => {
  return (
      <div className={classes.info}>
        <h3>概要</h3>
        <div className={classes.text}>
          <p>LineAPIの知見を活かした学校の講義管理・通知アプリ</p>
          <p>iOSアプリ内でユーザ登録したアカウント（教諭）から、個々人のLineアカウント（生徒）へ講義内容を通知する。</p>
        </div>
        <h3>制作期間</h3>
        <div className={classes.text}>
          <p>2018年12月〜2019年2月の3ヶ月</p>
        </div>
        <h3>利用想定人数</h3>
        <div className={classes.text}>
          <p>50名以上</p>
        </div>
        <h3>使用言語・ツール</h3>
        <div className={classes.text}>
            <p>言語：PHP、Swift、MySQL</p>
            <p>API：MessagingAPI（Line）</p>
            <p>開発環境：macOS</p>
            <p>エディタ：VScode、Xcode</p>
            <p>サーバー：https://www.xrea.com/</p>
            <p>ドメイン取得：https://www.value-domain.com/</p>
        </div>
        <h3>制作の意図</h3>
        <div className={classes.text}>
        <p>・臨時的な講義内容の変更や、教諭からの連絡事項はメールで配信されており、
        現代のメール離れによる配信内容の確認漏れを改善するため。</p>
        <p>・クラス内のLine利用率が高く、LineAPIを活用すれば知見を活かすことができるため。</p>
        </div>
        <h3>制作手順</h3>
        <div className={classes.text}>
          <p>１.アプリのデザインを決める。</p>
          <p>２.アプリ内で扱うデータ（アカウント情報など）を決定し、DB設計を行う。</p>
          <p>３.アプリからログイン、登録、削除を行えるようにPHP、Swift、SQLでロジックを作成・テストする。</p>
          <p>４.以前作成したLineAPIのPHPプログラムを応用して、アプリ内からLineへ通知するロジックを作成する。</p>
        </div>
        <h3>制作段階の問題</h3>
        <div className={classes.text}>
          <p>・コンパイルが遅い</p>
          <p>　Xcodeのコンパイルが遅く、特定の機能のみをテストしたい場合でも時間がかかる。</p>
          <p>　差分コンパイルができず、時短のために複数の機能をコーディングしたため、不具合が多発した。</p>
        </div>
        <h3>課題と改善案</h3>
        <div className={classes.text}>
          <p>課題1：</p>
          <p>　コンパイルを早くする</p>
          <p>改善案：</p>
          <p>　Storyboardを使わず、画面設計と画面遷移を行う。</p>
          <p>課題2：</p>
          <p>　冗長なロジックが多く、可読性・保守性に欠ける</p>
          <p>改善案：</p>
          <p>　Swiftのコードには、匿名LineBotを作成したときのような、深すぎるネストなどは
            無いが、同様の機能を持つ関数の排除や繰り返し文を使用する意識を持つ。
          </p>
          <p>課題3：</p>
          <p>　LineBotのアクセストークンの取り扱い</p>
          <p>　教諭がチャネルアクセストークンを発行するという場面において、
            教諭が自らLineBotを作成する必要があるため、ユーザビリティに欠ける。
          </p>
          <p>改善案：</p>
            <p>　アプリ内ボタンで教諭のLineBot作成リクエストに応じ、
            自動でLineBotを作成し、教諭のアカウント情報を紐付ける。
            </p>
          <p>課題4：</p>
          <p>　iPhoneの機種によりレイアウトが崩れる</p>
          <p>改善案：</p>
          <p>　add New Constrainを設定し、レスポンシブデザインに対応させる。</p>
        </div>
        <h3>全体図</h3>
        <img className={classes.image}
          src={`${ process.env.PUBLIC_URL }${path}`}
          alt=""
        />
        <h3>GitHub</h3>
        <AiFillGithub href='https://github.com/kudkun/notifi-project' size={50} color={'gray'} />
      </div>
  );
}

export default SwiftApp;
