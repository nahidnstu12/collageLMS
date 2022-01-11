export const Input = ({ label, type, id, placeholder }) => {
  return (
    <div class="col-lg-8 offset-lg-2 col-md-12 mb-4">
      <label for="name">{label}</label>
      <input id={id} type={type} placeholder={placeholder} />
    </div>
  );
};
export const courseList = [
  { courseName: "Physics Lab", courseCode: "1" },
  { courseName: "Chemistry", courseCode: "2" },
  { courseName: "Biology", courseCode: "3" },
  { courseName: "Zoology", courseCode: "4" },
];
export const Select = ({ label }) => {
  return (
    <div class="col-lg-8 offset-lg-2 col-md-12 mb-4">
      <label for="subject">{label}</label>

      <select id="subject" class="es-add-select">
        {courseList.map((item) => (
          <option key={item.courseCode} value={item.courseCode}>{item.courseName}</option>
        ))}
      </select>
    </div>
  );
};

// export const Select = () =>{
//     return(

//     )
// }
