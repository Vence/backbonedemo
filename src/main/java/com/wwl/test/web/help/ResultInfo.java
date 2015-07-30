package com.wwl.test.web.help;

/**
 * 封装所有api请求的返回结果
 * @author 王文路
 * @date 2014-9-26
 */
public class ResultInfo<T> {

	/**
	 * 错误码
	 */
	private int errorCode;
	
	/**
	 * 错误信息
	 */
	private String errorMsg;
	
	/**
	 * 没有错误，返回结果
	 * 有错误，结果为null
	 */
	private T result;
	
	
	public int getErrorCode() {
		return errorCode;
	}
	public void setErrorCode(int errorCode) {
		this.errorCode = errorCode;
	}
	public String getErrorMsg() {
		return errorMsg;
	}
	public void setErrorMsg(String errorMsg) {
		this.errorMsg = errorMsg;
	}
	public T getResult() {
		return result;
	}
	public void setResult(T result) {
		this.result = result;
	}
	
	
	////////////////////////////////////////////////////////////////////
	
	/**
	 * 非法session的错误信息
	 * @author 王文路
	 * @date 2014-10-24
	 * @return
	 */
	public static ResultInfo<String> getIllegalSession() {
		
		ResultInfo<String> info = new ResultInfo<String>();
		info.setErrorCode(1);
		info.setErrorMsg("用户登陆超时，请重新登陆！");
		
		return info;
	}
	
	
	/**
	 * 非法权限
	 * @author 王文路
	 * @date 2014-12-31
	 * @return
	 */
	public static ResultInfo getIllegalPermission() {
		
		ResultInfo info = new ResultInfo();
		info.setErrorCode(2);
		info.setErrorMsg("没有操作权限！");
		
		return info;
	}
	
	
	////////////////////////////////////////////////////////////////////
	/**
	 * 调用Service接口异常
	 * @author 王文路
	 * @date 2014-10-24
	 * @return
	 */
	public static ResultInfo getIllegalDataAccess() {
		
		ResultInfo info = new ResultInfo();
		info.setErrorCode(3);
		info.setErrorMsg("参数异常！");
		
		return info;
	}
	
}
