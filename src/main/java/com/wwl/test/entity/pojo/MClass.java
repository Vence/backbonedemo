package com.wwl.test.entity.pojo;


/**
 * 班級
 * 
 * @author 王文路
 * @date 2015-7-30
 *
 */
public class MClass {
	
	private String id;
	
	private String name;
	
	private Student[] students;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Student[] getStudents() {
		return students;
	}

	public void setStudents(Student[] students) {
		this.students = students;
	}

	

}
