import "../styles.css";
import Layout from "../components/Layout";
import {useEffect} from 'react'
import Router,{useRouter} from 'next/router'

const mockData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({isLogin:true});
    }, 100);
  });
};
const auth = ['/','/about']
// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps,loginData,pathname }) {
  const route = useRouter()
  console.log(route.pathname,'route')
  console.log(loginData,pathname)
  let show = false
  if(auth.includes(route.pathname)){
    show = true
  }
  useEffect(() => {
    const beforeHistoryChange = url => {
      console.log('App is changing to: ', url)
    }

    Router.events.on('beforeHistoryChange', beforeHistoryChange)
    return () => {
      Router.events.off('beforeHistoryChange', beforeHistoryChange)
    }
}, [])
useEffect(()=>{
  // console.log(route,'route')
  // if(route.pathname!='/about'){
  //   route.replace('/about')
  // }
  // route.replace('/about')
},[route])
  return (
    <Layout>
      {/* {
        isLogin
      } */}
      {
        show?<Component {...pageProps} />:<div>404</div>
      }
      
    </Layout>
  );
}
MyApp.getInitialProps=async (appContext)=>{
  const {pathname} = appContext
  const res = await mockData();
  return {loginData:res,pathname}
}
export default  MyApp