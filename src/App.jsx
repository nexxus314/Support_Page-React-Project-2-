import "./App.css";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Navigation from "./components/Navigation/Navigation";
import Buttons from "./components/Buttons/Button";
import ContactForms from "./components/ContactForms/ContactForms";
function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <ContactHeader />

        <ContactForms />
      </main>
    </div>
  );
}

export default App;
