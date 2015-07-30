package com.wwl.test.web.controller;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wwl.test.entity.pojo.DemoHelper;
import com.wwl.test.entity.pojo.MClass;
import com.wwl.test.web.help.ResultInfo;

@Controller
public class ClassAPIController {
	
	private Logger logger = Logger.getLogger(ClassAPIController.class);
	
	@RequestMapping(value = "/api/classes" , method = RequestMethod.GET)
	@ResponseBody
	public ResultInfo<MClass[]> getClasses(){
		
		ResultInfo<MClass[]>  info = new ResultInfo<MClass[]>();
		
		try {
			DemoHelper helper = new DemoHelper();
			
			info.setErrorCode(0);
			info.setResult(helper.generateClasses());
			
			return info;
		} catch (Exception e){
			logger.error(e.getMessage() , e.fillInStackTrace());
		}
		
		
		return ResultInfo.getIllegalDataAccess();
		
	}

}
