import React, { useState } from "react";
import NewTask from "../Components/NewTask";
import TodoItem from "../Components/TodoItem";
function HomePage() {
  const [todos, setTodos] = useState([]);  //เก็บรายการ todo ทั้งหมดไว้ใน array

  const addTask = (task) => {
    setTodos((prevTodos) => [...prevTodos, task]);     //เพิ่มงานใหม่ลงใน array ของ todos และคัดลอกงานเก่าๆ ไว้ด้วย
  };
  return (
    <>
      <NewTask addTask={addTask} />   {/* ส่งฟังก์ชั่น addtask ไปยังคอมโพเนนนต์ Newtask เพื่อให้ Newtask สามารถเพิ่มงานใหม่ได้ */}
      <ul className="bg-gray-200 rounded-md shadow-sm p-4">
        {todos.map((todo, i) => (    //วนลูปผ่าน array ของ todos
          <TodoItem key={i} id={i} todo={todo} /> //ส่งค่า todo และดัชนี i ไปยังคอมโพเนนต์ TodoItem
        ))}
      </ul>
    </>
  );
}

export default HomePage;
