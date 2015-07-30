define(["jquery"], function($){
	
	var teworks = {};

	teworks._helper = {};

	teworks._helper.convertJsonStrToDate = function(key, value) {

		//如果属性名称带有Time，默认是Date类型的，后台返回的是毫秒数
		if (/^.*Time$/.test(key) && value) {

			var time = new Date();
			time.setTime(Number(value));
			
			return time;
		}
		
		if (/^.*Date$/.test(key) && value) {

			var time = new Date();
			time.setTime(Number(value));
			return time;
		}
		
		if (/deadline$/.test(key) && value) {

            var time = new Date();
            time.setTime(Number(value));
            return time;
        }

		return value;
	};

	teworks._helper.convertDateToJson = function(key, value) {
		
		
		var length2 = function(num){
			
			return (num > 9 ? "" + num : "0" + num);
		};
		
		if ((/^.*Time$/.test(key) || /^.*Date$/.test(key)) && value) {
			
			if (value instanceof Date) {
				return value.getTime() - 8 *60*60*1000;
			}else{
				var date = new Date(value);
				return date.getTime() - 8 *60*60*1000;
			}
			
		}

		return value;
	};

	// 日期格式化输出
	teworks._helper.dateFormat = function(date , fmt) { //author: meizz 
		
		if (date == null || ! (date instanceof Date)) {
			return "";
		}
		
		var o = {
			"M+" : date.getMonth() + 1, //月份 
			"d+" : date.getDate(), //日 
			"h+" : date.getHours(), //小时 
			"m+" : date.getMinutes(), //分 
			"s+" : date.getSeconds(), //秒 
			"q+" : Math.floor((date.getMonth() + 3) / 3), //季度 
			"S" : date.getMilliseconds()
		//毫秒 
		};
		if (/(y+)/.test(fmt))
			fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "")
					.substr(4 - RegExp.$1.length));
		for ( var k in o)
			if (o.hasOwnProperty(k) && new RegExp("(" + k + ")").test(fmt))
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	};
	

	
	/**
	 * 重写jquery的 ajax ， 根据自己的返回结果进行重写，
	 * 
	 * 实际我们传给backbone的应该是pojo的json格式，不需要其他比如errorCode等信息，所以需要在此重写
	 * 
	 * 在main.js 里覆盖了Backbone的ajax
	 * 
	 * @returns
	 */
	teworks.ajax = function() {
		
		var param = arguments[0];
		
		delete param.contentType;
		
		if (param.data) {
			
			var oldData = param.data;
			var newData = JSON.parse(oldData, teworks._helper.convertDateToJson);

			param.data = {data : JSON.stringify(newData)};
		}
		
		
		if (param.success) {
			
			var oldSuccess = param.success;
			var oldError = param.error;
			
			param.success = function() {
				
				var newArguments = Array.prototype.slice.call(arguments, 0);
				
				var resultJSON = JSON.parse(arguments[0], teworks._helper.convertJsonStrToDate);
				
				//如果成功返回对象或者字符串，返回的对象用来覆盖model原来的值，返回的字符串没有什么意思，丢掉。
				//如果不丢掉，model的save方法中会调用_.extend(xxx, 字符串)，假设返回“abc”，结果model中会出现类"0" : "a", "1" : "b", "2" : "c"的值
				if (!resultJSON.result || typeof(resultJSON.result) === "string") {
					
					newArguments[0] = {};
				} else {
					
					newArguments[0] = resultJSON.result;
				}
				
				
				
				if (resultJSON.errorCode === 0) {
					
					oldSuccess.apply(null, newArguments);
				}
				
				
				if (oldError && resultJSON.errorCode) {
					
					oldError({errorCode : resultJSON.errorCode, errorMsg : resultJSON.errorMsg});
				}
			};
		}
		
		
		//2发送请求
		return $.ajax({
			url : param.url,
			data : param.data,
			success : param.success,
			type : param.type,
			dataType : "text"
		});
		
	};
	
	return teworks;
});