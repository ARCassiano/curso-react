import React from "react";
import students from "../data/students";

const studentsComponent = () => {

    const items = students.map(student => (
        <li key={student.id}>
            {student.id}) {student.name} {"->"} {student.score}
        </li>
    ));

    return (
        <ul style={{listStyle: "none"}}>
            {items}
        </ul>
    );
};

export default studentsComponent;