import React from 'react';
import common from '../Common.module.css';
import classes from './Contact.module.css';
import { motion } from 'framer-motion';
import { yFrom, yTo } from '../../../InterfaceAnimation';

const Contact = () => {
  return (
    <motion.div 
    initial={yFrom}
    animate={yTo}
    className={common.frame}
  >
    <div className={classes.contact}>
      <p>お手数ですが、下記メールアドレスへご連絡ください</p>
      <h1>kuu@kudkun.com</h1>
      <p>※下記のような連絡フォームを実装予定</p>
      <img
        src={`${ process.env.PUBLIC_URL }/me/contact.png`}
        alt="サンプル画像"
        style={{width: "80%"}}
      />
    </div>
  </motion.div>
  );
}

export default Contact;
