import { useState,useEffect } from "react";
import vish from "../assets/vishal.jpg";
import Course from "./Course";
function CourseList() {
  const [list, setList] = useState([
    {
      id: 1,
      image: vish,
      title: "java dev",
      description: "proplayer",
      price: 11199,
    },
    {
      id: 2,
      image: vish,
      title: "java dev",
      description: "proplayer",
      price: 99,
    },
    {
      id: 3,
      image: vish,
      title: "java dev",
      description: "proplayer",
      price: 399,
    },
    {
      id: 4,
      image: vish,
      title: "java dev",
      description: "proplayer",
      price: 299,
    },
    {
      id: 5,
      image: vish,
      title: "java dev",
      description: "proplayer",
      price: 999,
    },
  ]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  function handleDelete(id) {
    const newList = list.filter((value) => value.id != id);
    setList(newList);
  }

  list.sort((x, y) => y.price - x.price);

  // using filter in react
  const filteredList = list.filter((value) => value.price > 199);

  const filtMap = filteredList.map((value, i) => (
    <Course
      key={i}
      id={i}
      image={value.image}
      title={value.title}
      description={value.description}
      price={value.price}
    ></Course>
  ));

  const map = list.map((value, i) => (
    <Course
      key={i}
      id={value.id}
      image={value.image}
      title={value.title}
      description={value.description}
      price={value.price}
      delete={handleDelete}
    />
  ));

  return map;
}

export default CourseList;
