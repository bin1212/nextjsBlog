import {useRouter} from 'next/router'
function Posts({posts}) {
    const route = useRouter()
    console.log(route,'route')
   
  return <div onClick={()=>{ route.push('/about',undefined,{shallow:true})}}>Posts{posts}</div>;
}



const mockData = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(id);
        }, 100);
    });
};
const pathData = ()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(['1','2','3','4','5','6']);
        }, 100);
    });
}
// 此函数在构建时被调用
export async function getStaticPaths() {
  // 调用外部 API 获取博文列表
  const res = await pathData();
  // 据博文列表生成所有需要预渲染的路径
  const paths = res.map((post) => {
    return {
        params: { id: post },
      }
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}
// 在构建时也会被调用
export async function getStaticProps({ params }) {
  // params 包含此片博文的 `id` 信息。
  // 如果路由是 /posts/1，那么 params.id 就是 1
  const res = await mockData(params.id);

  // 通过 props 参数向页面传递博文的数据
  return { props: { posts:res } };
}
export default Posts;