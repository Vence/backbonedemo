package com.wwl.test.web.help;

import java.io.IOException;

import org.apache.log4j.Logger;
import org.codehaus.jackson.map.ObjectMapper;

/**
 * java对象的JSON格式转换
 * @author 王文路
 * @date 2014-10-28
 */
public class JsonBinder {

	private static Logger logger = Logger.getLogger(JsonBinder.class);

	private ObjectMapper mapper = new ObjectMapper();
	
	private JsonBinder() {}
	
	private static JsonBinder instance = new JsonBinder();
	
	/**
	 * 获取单例
	 * @author 王文路
	 * @date 2014-10-24
	 * @return
	 */
	public static JsonBinder getInstance() {
		
		return instance;
	}

	/**
	 * 如果JSON字符串为Null或"null"字符串,返回Null.
	 * 如果JSON字符串为"[]",返回空集合.
	 * 
	 * 如需读取集合如List/Map,且不是List<String>这种简单类型时使用如下语句:
	 * List<MyBean> beanList = binder.getMapper().readValue(listString, new TypeReference<List<MyBean>>() {});
	 */
	public <T> T fromJson(String jsonString, Class<T> clazz) {

		try {
			return mapper.readValue(jsonString, clazz);
		} catch (IOException e) {
			
			logger.error("parse json string error:" + jsonString, e.fillInStackTrace());
			return null;
		}
	}

	/**
	 * 如果对象为Null,返回"null".
	 * 如果集合为空集合,返回"[]".
	 */
	public String toJson(Object object) {

		try {
			
			return mapper.writeValueAsString(object);
		} catch (IOException e) {
			
			logger.error("write to json string error::" + object.toString(), e.fillInStackTrace());
			return null;
		}
	}
}
