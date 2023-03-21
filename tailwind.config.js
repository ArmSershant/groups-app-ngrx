/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/app.component.{html,ts}",
    "./src/app/groups/groups/groups.component.{html,ts}",
    "./src/app/groups/addgroup/addgroup.component.{html,ts}",
    "./src/app/students/students/students.component.{html,ts}",
    "./src/app/students/add-student/add-student.component.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
