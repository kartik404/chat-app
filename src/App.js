import { ChatEngine } from "react-chat-engine";

import './App.css';
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="263d8dac-adb6-4cbf-9727-915961bcd95f"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            // userSecret="123456"
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}
        />
    );
}

export default App;