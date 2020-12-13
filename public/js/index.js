const deleteStudent = (id) => {};

fetch("/students")
  .then((res) => res.json())
  .then(({ data }) => {
    const table = document.getElementById("students-table");
    data.forEach((student) => {
      const row = document.createElement("tr");
      const first_name = document.createElement("td");
      first_name.textContent = student.first_name;
      row.appendChild(first_name);
      const second_name = document.createElement("td");
      second_name.textContent = student.second_name;
      row.appendChild(second_name);
      const location = document.createElement("td");
      location.textContent = student.location;
      row.appendChild(location);
      const class_name = document.createElement("td");
      class_name.textContent = student.name;
      row.appendChild(class_name);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "delete";
      row.appendChild(deleteButton);
      // deleteButton.addEventListener("click", () => deleteStudent(student.id));
      table.appendChild(row);
    });
  });
