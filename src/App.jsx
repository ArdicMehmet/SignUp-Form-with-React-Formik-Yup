import "./App.css";
import RegisterForm from "./components/registerForm";
// Formik - Form yapmamızı kolaylaştırıyor       -- npm install formik --save
// Yup da Form validasyonlarını kolaylaştırıyor  -- npm install yup
function App() {
  return (
    <>
      <RegisterForm />
    </>
  );
}

export default App;
