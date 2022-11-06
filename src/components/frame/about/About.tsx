import React from 'react';
import common from '../Common.module.css';
import classes from './About.module.css';
import { motion } from 'framer-motion';
import { yFrom, yTo } from '../../../InterfaceAnimation';

const About = () => {

  return (
    <motion.div 
      initial={yFrom}
      animate={yTo}
      className={common.frame}
    >
      <div className={classes.info}>
        <h3>基本情報</h3>
          <div className={classes.text}>
            <p>氏名：宇賀神　秀</p>
            <p>生年月日：1998. 4. 13</p>
          </div>
        <h3>学歴</h3>
          <div className={classes.text}>
            <p>2014. 4&emsp;栃木県立鹿沼商工高等学校　情報科学科　入学</p>
            <p>2017. 3&emsp;栃木県立鹿沼商工高等学校　情報科学科　卒業</p>
            <p>2017. 4&emsp;日本工学院専門学校　情報処理科　入学</p>
            <p>2019. 3&emsp;日本工学院専門学校　情報処理科　卒業</p>
          </div>
        <h3>職歴</h3>
          <div className={classes.text}>
            <p>2019. 4&emsp;アイビスジャパン株式会社　入社</p>
            <p>2023. 9&emsp;アイビスジャパン株式会社　退職</p>
            <p className={classes.rightText}>現在に至る</p>
          </div>
        <h3>職務要約</h3>
          <div className={classes.text}>
            <p className={classes.job}>
            新卒で入社後、約3年間官公庁のシステム開発に従事し、基本設計から保守運用までを経験。
            2019年7月頃から約200名規模のプロジェクトに参画し、現行システムを刷新するために詳細設計から担当した。
            同時に追加機能を担当する5名程度のメンバーとなり、基本設計から携わった。
            また、テスト工程では8名ほどのチームのリーダーとして進捗や予定、障害状況の管理を担当した。
            リリースに至るまで、各工程において作業の簡略化やメンバーの負担軽減を目指し、積極的に業務改善ツールの開発・導入を行った。
            </p>
          </div>
        <h3>利用可能OS・言語</h3>
          <div className={classes.text}>
            <table>
              <tbody>
                <tr>
                  <th>／</th>
                  <th>スキル</th>
                  <th>年数</th>
                  <th>業務経験</th>
                </tr>
                <tr>
                  <td>フロントエンド</td>
                  <td>HTML/CSS</td>
                  <td>半年未満</td>
                  <td>ー</td>
                </tr>
                <tr>
                  <td rowSpan={4}>フロント＆バック</td>
                  <td>Java</td>
                  <td>1年</td>
                  <td>ー</td>
                </tr>
                <tr>
                  <td>React(Typescript)</td>
                  <td>1ヶ月</td>
                  <td>ー</td>
                </tr>
                <tr>
                  <td>Swift</td>
                  <td>3ヶ月</td>
                  <td>ー</td>
                </tr>
                <tr>
                  <td>Python(Django)</td>
                  <td>1ヶ月</td>
                  <td>○</td>
                </tr>
                <tr>
                  <td rowSpan={2}>バックエンド</td>
                  <td>PHP</td>
                  <td>3ヶ月</td>
                  <td>ー</td>
                </tr>
                <tr>
                  <td>MySQL</td>
                  <td>半年未満</td>
                  <td>○</td>
                </tr>
                <tr>
                  <td>DevOps</td>
                  <td>AWS(Glue,S3,Athenaなど)</td>
                  <td>3年</td>
                  <td>○</td>
                </tr>
                <tr>
                  <td>業務改善</td>
                  <td>VBA,Bat,Bash</td>
                  <td>３年</td>
                  <td>○</td>
                </tr>
                <tr>
                  <td>オープン系</td>
                  <td>C#</td>
                  <td>半年</td>
                  <td>ー</td>
                </tr>
                <tr>
                  <td>組み込み系</td>
                  <td>C</td>
                  <td>2年</td>
                  <td>ー</td>
                </tr>
                <tr>
                  <td rowSpan={3}>OS</td>
                  <td>Windows</td>
                  <td>3年以上</td>
                  <td>○</td>
                </tr>
                <tr>
                  <td>Linux</td>
                  <td>3年以上</td>
                  <td>○</td>
                </tr>
                <tr>
                  <td>macOS</td>
                  <td>2年</td>
                  <td>ー</td>
                </tr>
              </tbody>
            </table>
        </div>
        <h3>エンジニアになるまで</h3>
          <div className={classes.text}>
            <h4>小学生時代：</h4>
            <p>アメーバピグで「IPアドレスを抜いたぞ」と脅され、ITに興味を持つ。</p>
            <p>タッチタイピングを習得する。</p>
            <h4>中学生時代：</h4>
            <p>セキュリティ技術に興味を持つ。</p>
            <h4>高校生時代：</h4>
            <p>C言語やC#に触れ、キーロガーや攻撃ツールなどを作る。</p>
            <p>情報セキュリティ技術者試験を受けるが、午後問題が難しく、落ちる。</p>
            <p>業務的な知識を身につけたいと思い、ITを仕事にしようと考える。</p>
            <h4>専門学生時代：</h4>
            <p>世の中にまだないサービスが自分でも作れることを知る。</p>
          </div>
        <h3>学習についての私の考え</h3>
          <div className={classes.text}>
            <p>プログラミングにおいて、学習を目的にすると続かない。</p>
            <p>作りたいものがあれば、学習内容が難しくても乗り越えられる。</p>
          </div>
      </div>
    </motion.div>
  );
}

export default About;
