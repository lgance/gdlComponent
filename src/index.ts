import './css/common/normalize.scss';
import './css/common/reset.scss';

/** TypeScript Module Test */
import show, * as module from './testFolder/test';
import { Student } from './testFolder/test';

/** gdl App Initialize  Singleton*/
import App from './App';

/** User HeaderLayout */
import HeaderLayout from './userLayout/HeaderLayout';

/** User MainLayout */
import MainLayout from './userLayout/MainLayout';

/** User FooterLayout */
import FooterLayout from './userLayout/FooterLayout';

/** User Responsive SCSS */
import '@userCSS/userResponsive.scss';

/** User Layout Initialize */
HeaderLayout.Init();
MainLayout.Init();
FooterLayout.Init();

/** App Initialize */
App.init();

/** App Layout Settings */
App.setHeader(HeaderLayout);
App.setMain(MainLayout);
App.setFooter(FooterLayout);

/** App Layout adjustings */
App.adjustLayout();

// setTimeout(() => {
//   let user = new Student('first', 'second', 'last');
//   console.log(user);

//   let textView = document.createElement('div');
//   textView.textContent = show(user);

//   document.body.appendChild(textView);

//   console.warn('test ppap');
// }, 1000);

// 콜백헬을 벗어나기 위한 callback 패턴
// 단순 실행

// const First_func = ()=>{
//   mysql.query( 'select 1' , ( res )=>{
//       console.log( 2 );
//       Second_func();
//   });
// };

// const Second_func = ()=>{
//   mysql.query( 'select 2' , ( res )=>{
//       console.log( 3 );
//   });
// };

// console.log( 1 );
// First_func();

// // 반복문

// const temp_array = [];
// const function_a = ()=>{
//   for( let i = 0 ; i < 10 ; i++ ){
//       temp_array.push( i );
//   }

//   function_b();
// };

// const function_b = ()=>{
//   if( temp_array.length == 0 ){
//       console.log("END");
//       return;
//   }
//   const item = temp_array.shift();
//   mysql.query(`select ${item}`,()=>{
//       function_b();
//   });
// };

// function_a();
