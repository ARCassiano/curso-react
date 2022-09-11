import "./App.css";
import React from "react"
import First from './components/basics/first'
import Random from './components/basics/Random'
import Family from './components/basics/Family'
import FamilyMember from './components/basics/FamilyMember'
import Students from './students/Students'
import Card from "./layout/Card/Card";

const App = () => {
    const helloWorld = <strong>Olá, Mundo!</strong>;
    return (
        <>
            <h1>Fundamentos do React</h1>
            <div className="cards">
                <Card title="Alunos" color="#E5FCC2">
                    <Students/>
                </Card>
                <Card title="Família" color="#FF4E50">
                    <Family lastName="Cassiano">
                        <FamilyMember name="Anderson" />
                        <FamilyMember name="Hanaísa" />
                        <FamilyMember name="Giovana" />
                        <FamilyMember name="João" lastName="Alexandre" />
                    </Family> 
                </Card>
                
                <Card title="Número aletório" color="#A7226E">
                    <Random min={0} max={10} />
                </Card>
                <Card title="Olá, Mundo!" color="#99B898">
                    { helloWorld }
                </Card>
                <Card title="Meu primeiro componente" color="#FF8C94">
                    <First></First>
                </Card>
            </div>
        </>
    );
}

export default App;