import {FC} from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Lead from "../../components/Lead";
import Starships from "../../components/Starships";

import './Main.scss';

const Main: FC = () => {
    return (
        <main className="page">
            <Header/>
            <Lead/>
            <Starships/>
            <Footer/>
        </main>
        );
}

export default Main;
