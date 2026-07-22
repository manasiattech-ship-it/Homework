import React, { useState } from 'react'


const Students = () => {
    const [students, setStudents] = useState([
  { id: 1, name: "Alex", grade: "B" },
  { id: 2, name: "Emma", grade: "C" },
  { id: 3, name: "David", grade: "A" },
]);

const updateGrade = (id, newGrade) => {
    setStudents((prev) => {
        return prev.map((student) => {
            return student.id === id ? {...student, "grade":newGrade} : student
        })
    })
};
  return (
    <div>
       { students.map((student) => {
        return <div key={student.id}>{student.name} - {student.grade} </div> 
    })}
        <button onClick={() => updateGrade(2, "A")}>Change grade</button>
    </div>
  )
}

export default Students
