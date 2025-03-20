
import ChatPage from "./pages/ChatPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChatProvider } from "./components/ChatContext";
function App() {
  return (
    <div className="container-sm bg-primary m-5 p-3">
      <ChatProvider>
        <p className="m-5 secondary card">green apple</p>
        <ChatPage />
      </ChatProvider>
    </div>
  );
}

export default App;
