import React from 'react';

import { Preloader } from './Preloader';
import {Book} from './Book';
import {Timer} from './Timer';
import {ClassApp} from './ClassApp';
import { HandleClickThis } from './handleClickThis';
import { HandleClickPlusMinus } from './handleClickPlusMinus';
import { Posts } from './Posts';
import { KeyAtr } from './KeyAtr';

/*

// не працюють в jsx строках{}
// if() {}
// swich
// for/ while
// htmlFor - це for
*/

const App = (props) => {// props -> property -> властивості
  return  props.isLoading ? (
    <Preloader/>
  ): (<div>
    <ClassApp/>
    <KeyAtr/>
    <Timer/>
    <Posts/>
    <HandleClickThis/>
    <HandleClickPlusMinus/>
    <Book name = 'JS for Beginners' year='2018' price='1000'>
    Text here
    </Book>
    <Book name = 'React' year = '2018' price = '1000'/>
    <Book year = '2019' price = '1100'/>

  </div>)
}

export default App;
// export default может быть только один для каждого отдельного модуля (файла)
// export {} для экспорта нескольких величин
