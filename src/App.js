import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Command from './components/Command';
import Home from './components/Home';
import Community from './components/Community';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Command" element={<Command/>} />
                    <Route path="/Community" element={<Community/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
