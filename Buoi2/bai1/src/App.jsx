import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentInfo from "./components/StudentInfo";

function App() {
  const student = {
    name: "Đặng Tiến Đạt",
    mssv: "23683961",
    lop: "Đại học Kỹ thuật Phần mềm 19B"
  };

  return (
    <div>
      <Header />
      <StudentInfo name={student.name} mssv={student.mssv} lop={student.lop} />
      <Footer />
    </div>
  );
}

export default App;