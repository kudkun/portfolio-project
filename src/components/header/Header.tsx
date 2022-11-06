import { useState, createContext } from 'react';
import classes from './Header.module.css';
import { HiOutlineViewList, HiOutlineX } from "react-icons/hi";
import { motion } from 'framer-motion';
import Main from  '../main/Main'

export const NameContext = createContext<string | any>('');

// TODO: Topコンポーネントの呼び出しをAppコンポーネント内に移動したい
const Header = () => {
  const [ open, setOpen ] = useState<boolean>(false);
  const [ frame, setFrame ] = useState<string>('');

  const burgerIcon = <HiOutlineViewList className={classes.burger} 
                        size="40px" color="gray"
                        onClick={() => { setOpen(!open); }}
                      />

  const closeIcon = <HiOutlineX className={classes.burger}
                      size="40px" color="gray"
                      onClick={() => { setOpen(!open); }}
                      />

  // メニューを閉じる
  const closeMenu = () => setOpen(false);

  // 表示するフレーム名を設定する
  const frameName = (name: string) => { setFrame(name); }

  const ulAnimateFrom: Object = {x: 100};
  const ulAnimateTo: Object = {x: 0};
  const liAnimeteFrom: Object = {opacity: 0, y: -60};
  const liAnimeteTo: Object = {opacity: 1, y: 0};

  type MenuType = {
    name: string,
    text: string,
  }
  
  //ハンバーガーメニュー内のメニュー配列
  const menu: MenuType[] = [{
    name: "About",
    text: "About me"
  },{
    name: "Works",
    text: "My Works"
  },{
    name: "Contact",
    text: "Contact me"
  }]
  return (
    <div className={classes.main}>
      <div className={classes.menu}>
        <nav>
            {/* ハンバーガーメニューが開かれていて、メニューが押下された場合 */}
            { ( open || frame !== '') && 
              <div onClick={() => { closeMenu(); frameName(''); }}></div> 
            }
            {/* <div className={classes.logo}> */}
              {/* <h4><Link to="/">{title}</Link></h4> */}
            {/* </div> */}
           
            {/* <ul className={`${classes.links} ${open === true ? classes.open : undefined}`}>
              <li className={`${open === true ? classes.view : undefined }`}><Link to="/post">口コミ</Link></li>
              <li className={`${open === true ? classes.view : undefined }`}><Link to="/signin">サインイン</Link></li>
            </ul> */}

            {/* ハンバーガーメニューが開かれていたら閉じるボタンを表示する */}
            { open === true ? closeIcon : burgerIcon }

            {/* ハンバーガーメニューが開かれていたらメニューを表示する */}
            { open && 
              <motion.ul
                initial={ulAnimateFrom}
                animate={ulAnimateTo}
                className={classes.links}
              >
                {menu.map((item) => (
                  <motion.li
                    initial={liAnimeteFrom}
                    animate={liAnimeteTo}
                    onClick={() => { closeMenu(); frameName(item.name); }}
                    key={item.name}
                  >
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            }
        </nav>
      </div>
      {/* メニューごとのフレームを表示するコンポーネント */}
      <NameContext.Provider value={{ frame, frameName }} >
        <Main />
      </NameContext.Provider>
    </div>
  );
};
export default Header;
