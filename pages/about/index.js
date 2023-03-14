import {useState,useEffect} from 'react'
import useDebounce from './useDebounce'
function About({posts}) {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const handleClick = useDebounce(function() {
      console.count('click1')
      setCounter(counter + 1)
    }, 1000)
    // useEffect(function() {
    //   const t = setInterval(() => {
    //     setCounter2(x => x + 1)
    //   }, 500);
    //   return clearInterval.bind(undefined, t)
    // }, [])
  return <div onClick={handleClick}>About1{counter}<p>{counter2}</p></div>;
}
const mockData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1212);
    }, 100);
  });
};
export async function getStaticProps() {
  // 调用外部 API 获取博文列表
  const res = await mockData();
  console.log(res, "res");
//   const posts = await res.json();

  // 通过返回 { props: { posts } } 对象，Blog 组件
  // 在构建时将接收到 `posts` 参数
  return {
    props: {
      posts:res,
    },
  };
}

export default About;
