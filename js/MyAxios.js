// 简易的axios函数
/**
 * 一、必备知识：axios函数返回 Promise对象，Promise对象有 then方法和catch方法
 * 二、封装函数
 *   1. 创建 function Axios(e) { return xhr对象 } 函数
 *        注意：e 是配置对象， 是{url,method,data,params等等}
 *
 *   2. 使用XMLHttpRequest对象与服务器通信(四步骤)   不需要引入axios
 *        （1）创建 XHR对象
 *        （2）调用 open方法，配置请求方法和请求url地址
 *             { 1. 请求方法默认为 "GET"，使用逻辑或 来设置
 *               2. 请求url地址 需要判断是否有params选项携带参数 ，如果有就加到 url地址后面，注意用 `?${e.params}`  }
 *        （3）监听 loadend事件，接收响应结果
 *             { 1. 判断响应成功/失败  ==>  使用响应码 判断 xhr.status
 *               2. 响应码以 2开头的都是成功的 ，使用 逻辑与 三目运算符判断   }
 *        （4）发起 send请求  ==> 用if else判断
 *             { 1. 判断是否有data选项携带请求体 温馨提示：这个判断一定要写在open方法后面，
 *                  代表要打开请求以后才能在请求中设置请求头的参数
 *               2. 如果有，还要加上请求头  告诉服务器内容的类型  ==> 使用 xhr.setRequestHeader()方法
 *               3. 转换数据类型，在send中发送   数据类型按照后端要求
 *               4. 在send(str) 中发送   }
 *
 * 三、调用 Axios函数
 *   1. 格式
 *      Axios({ 配置对象 }).then(r=>r).catch(e=>e)
 */

function axios(config) {
  return new Promise((r, e) => {
    const xhr = new XMLHttpRequest();

    // 1. 判断是否有params选项，携带查询参数
    if (config.params) {
      // 2. 创建 URLSearchParams 对象并携带带url上
      const paramsObj = new URLSearchParams(config.params);
      const paramsString = paramsObj.toString(); // 对象转换为字符串，使用toString()

      // 3. 把查询参数字符串 拼接到url? 后面
      config.url += `?${paramsString}`;
    }

    xhr.open(config.method || "get", config.url);
    xhr.addEventListener("loadend", () => {
      xhr.status >= 200 && xhr.status < 300
        ? r(JSON.parse(xhr.response))
        : e(new Error(xhr.response));
    });

    // 1. 判断是否有data选项携带请求体   温馨提示：这个判断一定要写在open方法后面，代表要打开请求以后才能在请求中设置请求头的参数
    if (config.data) {
      // 2. 如果有，还要加上请求头  告诉服务器内容的类型  ==> 使用 xhr.setRequestHeader()方法
      xhr.setRequestHeader("Content-Type", "application/json"); // 注意：请求头肯定不是全 写死的！！！

      // 3. 转换数据类型，在send中发送   数据类型按照后端要求
      const jsonStr = JSON.stringify(config.data);

      // 4. 在send中发送
      xhr.send(jsonStr);
    } else {
      xhr.send();
    }
  });
}
