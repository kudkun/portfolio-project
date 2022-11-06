import { useContext } from 'react';
import classes from './Main.module.css';
import About from '../frame/about/About';
import Works from '../frame/works/Works';
import Contact from '../frame/contact/Contact';
import { NameContext } from '../header/Header';

const Top = () => {
  const { frame, frameName } = useContext(NameContext);

  // 要素が最上部になるまでスクロールする
  const id = document.getElementById(frame);
  id !== null && id.scrollIntoView({block: 'start', behavior: 'smooth'}); 

  type ButtonType = {
    name: string,
    text1: string,
    text2: string,
  }

  //ハンバーガーメニュー内のメニュー配列
  const button: ButtonType[] = [{
    name: "About",
    text1: "私の基本情報と経歴",
    text2: "",
  },{
    name: "Works",
    text1: "ふと気づいた日常生活の不便",
    text2: "プロトタイプで解決してきました",
  },{
    name: "Contact",
    text1: "ご連絡はこちらから",
    text2: "",
  }]


  return (
      <div className={classes.main}>
          <div className={`${classes.item} ${ frame !== '' && classes.moveTop }`}>
            {/* メニューを配列から読み込んで出力する */}
            {button.map((item) => (
              <span onClick={() => { frameName(item.name); }}
                key={item.name}
              >
                <h2 id={item.name} className={`${ frame === item.name && classes.changeColor }`}>{item.name}</h2>
                <p>{item.text1}</p>
                <p>{item.text2}</p>
              </span>
            ))}
          </div>
          {/* メニューアイコンを表示する */}
          { frame === 'About' ? <About /> : undefined }
          { frame  === 'Works' ? <Works /> : undefined }
          { frame  === 'Contact' ? <Contact /> : undefined }
      </div>
  );
}

export default Top;
