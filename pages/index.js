import { useRef, useState, useEffect } from "react";
import Web3 from "web3";


function HomePage() {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);

  const startHandler = () => {
    // window._XFLOW_.pushEvent([
    //   "click",
    //   "clickEvent1",
    //   "自定义点击事件测试",
    //   { addOne: "加1" },
    //   function () {
    //     console.log("自定义事件上报完成");
    //   },
    // ]);
    // if (timerIdRef.current) {
    //   return;
    // }
    // timerIdRef.current = setInterval(() => setCount((c) => c + 1), 1000);
  };

  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };

  // useEffect(() => {
  //   (function (para) {
  //     var w = window,
  //       d = document,
  //       s = "script",
  //       a = para.sdkUrl;
  //     if (typeof w["XFlowAnalysisSetting"] !== "undefined") {
  //       return false;
  //     }
  //     w["XFlowAnalysisSetting"] = para;
  //     var x = d.createElement(s),
  //       y = d.getElementsByTagName(s)[0];
  //     x.src = a;
  //     x.async = 1;
  //     y.parentNode.insertBefore(x, y);
  //   })({
  //     sdkUrl: "https://xflowcloud.zhongan.io/sdk/dist/js/v0.0.1/ilog.js", // sdk的链接地址
  //     serverUrl: "https://xman-xflow-test.huaguilife.cn/cloud_web_sdk_base64.gif",
  //     siteId: "rqjrky2gtfpizavv", // 站点id
  //     name: "_XFLOW_", // new XFlow实例化后，暴露在window的变量名称. 主要供自定义事件使用
  //     debug: true, // 之后的配置项与上面的配置项完全一致
  //     input: true, // 是否采集 input 输入框值
  //     noBase64:true,
  //     method:'post',
  //     // 扩展信息
  //     extendsInfo: {
  //       isTest: true,
  //       developer: "zsy",
  //     },
  //     // 是否开启曝光功能
  //     exposure: {
  //       // open: 可不传,默认false
  //       // 只有open为true才会曝光元素，要曝光的元素需加上data-_xflow_exposure="true"属性
  //       // 例如：<div data-_xflow_exposure="true">需要曝光元素</div>
  //       // 这样只要这个元素在可见区域，就会自动发送曝光事件
  //       open: true,
  //       // threshold: 可不传，默认0，值范围需在0到1 // 元素可见比例占本身比例多大时，才会发送曝光事件
  //       threshold: 0,
  //       // container: 可不传，默认对body进行全局监听 // 为了性能考虑，建议传入container，值建议为曝光元素的父元素的id
  //       // container: ["id1", "id2"],
  //       // exposureExtendKeys: 可不传, // 含义为曝光事件上报时，允许携带元素上面的额外属性，如下面的attribute1, data-attribute2属性 // 在上报时，事件属性会将"data-"置换为""，所以经下面的配置后，上报属性key值为attribute1, attribute2
  //       // 如: <div data-_xflow_exposure="true" attribute1='attribute1Value' data-attribute2='attribute2Value'>hahaha</div>
  //       // exposureExtendKeys: ["attribute1", "data-attribute2"],
  //       exposureExtendKeys: ["xlow-exposure-name"],
  //       // 曝光回调callback
  //       callback: function (data) {
  //         console.log("exposure====", data && data.target);
  //       },
  //     },
  //     // 是否开启停留功能
  //     stay: {
  //       // open: 可不传,默认false
  //       // 只有open为true才会采集停留事件
  //       open: true,
  //       // thresholdTime: 可不传,默认3000ms，代表停留时间大于这个阈值的才会被采集，值需大于1000
  //       thresholdTime: 3000,
  //       // container: 可不传，默认对body进行滚动监听 // 如需传入，传入滚动容器的id即可
  //       // 如传入的话，为保证埋点数据能更准确的进行数据处理，滚动容器需保证其父元素，父元素的父元素等没有出现滚动条
  //       // container: ["id1", "id2"],
  //     },
  //     // 全埋点点击扩展信息
  //     // 如: <div extend='extendValue' click-describe='extend1Value' extend2='extend2Value'></div>
  //     // 当配置项配置了下面的clickExtendKeys，会将click-describe给上报上去，extend/extend2不会上报，增加点击上报数据的业务含义
  //     // 上报时，事件属性的key会自动将"data-"置换为""，无需业务接入时额外配置
  //     clickExtendKeys: ["xlow-click-describe"],
  //   });
  //   return () => clearInterval(timerIdRef.current);
  // }, []);
  useEffect(async ()=>{
    async function load() {
      console.log( Web3.givenProvider,' Web3.givenProvider')
      const web3 = new Web3(
          Web3.givenProvider || "http://localhost:7545"
      );
      const accounts = await web3.eth.requestAccounts();

      setAccount(accounts[0]);
  }

  load();
    
  },[])
  console.log("render");
  return (
    <div>
      <div>Timer: {count}s</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>
  );
}

export default HomePage;
