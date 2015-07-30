package com.wwl.test.entity.pojo;

import java.util.Random;
import java.util.UUID;

/**
 * 本demo主要讲backbone如何与后台交互的过程
 * 所以省略了持久层，这里的生成器就模拟了从持久层拿到数据
 * 
 * 
 * @author 王文路
 * @date 2015-7-30
 *
 */
public class DemoHelper {
	
	private int classNum = 1;
	private int studentNum = 1;
	
	public MClass[] generateClasses(){
		Random random = new Random();
		int length = (random.nextInt(10) + 1);
		
		MClass[] rets = new MClass[length];
		
		for (int i = 0 ; i < length ; ++i) {
			MClass c = generateClass();
			c.setStudents(generateStudents());
			rets[i] = c;
		}
		
		return rets;
	}
	
	public MClass generateClass(){
		
		MClass ret = new MClass();
		
		ret.setId(UUID.randomUUID().toString());
		ret.setName("班级" + (classNum++));
		
		return ret;
		
	}
	
	public Student generateStudent(){
		
		Student student = new Student();
		student.setId(UUID.randomUUID().toString());
		student.setName("学生"  + (studentNum++));
		
		return student;
	}
	
	public Student[] generateStudents(){
		
		Random random = new Random();
		int length = (random.nextInt(10) + 1);
		
		Student[] rets = new Student[length];
		
		for (int i = 0 ; i < length ; ++i) {
			rets[i] = generateStudent();
		}
		
		return rets;
		
	}

	
	public static void main(String[] args){
		DemoHelper h = new DemoHelper();
		
		MClass[] classes = h.generateClasses();
		for (MClass c : classes) {
			System.out.println(c.getId() + "-" + c.getName());
			for (Student s : c.getStudents()){
				System.out.println("    " +  s.getId()+ "-" + s.getName());
			}
		}
	}
}
