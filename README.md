# backbonedemo

##前言
这是本人做的一个关于 **backbone** 的demo,至于 backbone 是什么，这里不多说，简单来说就是一款前端mvc框架，除了backbone,还有很多mvc框架可供选择。可以参看我之前的一篇博客 [Backbone技术解析](http://vence.github.io/blog/2015/05/14/backbone-info/)

更多关于Backbone的知识点请查看[API中文文档](http://www.css88.com/doc/backbone/#Collection)

下面就demo中的一点问题进行声明：

##SpringMVC 返回数据

这个是SpringMVC3.0以上的版本，全部使用注解，这一部分知识这里也不做了解了，比较简单。

##Backbone基础
在使用Backbone之前，一定要定义一套跟后台POJO一致的数据模型，这样才能实现数据交互。如果两者的数据模型有出入，带来的问题就是

- 如果前端向后台传送数据模型，如果前端model中的属性POJO对象中没有， 会报Json转换异常；
  如果后台pojo对象的属性在前端model没有，这是正常的。
  简单言之：**就是前端model的属性 必须完全属于 后台POJO对象属性集合**；

- 如果后台向前台传送数据模型，如果后台POJO属性有，而前端对象没有，正常；
 如果后台POJO属性没有，前端属性中却有，就是default值；


注： 这里使用了**Jackson**框架对json进行解析

##RequireJS
用backbone为什么要使用requireJS框架呢， 就是实现异步加载脚本！

##重写Backbone的Ajax
###为什么要重写？
因为 Backbone 的 `Model` 和 `Collection` 提供了很多直接与后台交互的方法，比如 `fetch` ， `save` , `create` ， `distory` 等等去实现增删改查

###怎么重写？
- 就是在发送请求到后台之前，需要包装成我们自己的请求格式，比如我习惯将实体的请求参数封装进data里：

	{data: model}


- 在请求返回的响应中，需要解除后台的包装，比如结果集封装在 `ReusltInfo` 对象里，就是不仅会有我需要的实体对象数据，还有一些其他的数据，比如 `errorCode` 和 `errorMsg`等 。

##其他问题
参看我的另外一篇博客
[Backbone前端开发流程及规范](http://vence.github.io/blog/2015/05/24/backbone-coding-info/)
