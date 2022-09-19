import "./App.css";
import React from "react"
import First from './components/basics/first'
import Random from './components/basics/Random'
import Family from './components/basics/Family'
import FamilyMember from './components/basics/FamilyMember'
import Students from './students/Students'
import Products from './products/Products'
import EvenOrOdd from './evenOrOdd/EvenOrOdd'
import Welcome from './welcome/Welcome'
import Father from './family/Father';
import Input from './form/Input';
import Counter from './counter/Counter';
import Card from "./layout/Card/Card";
import Mega from "./Mega/Mega";

const App = () => {
    const helloWorld = <strong>Olá, Mundo!</strong>;
    return (
        <>
            <h1>Fundamentos do React</h1>
            <div className="cards">
                <Card title="Mega" color="#CCCCCC">
                    <Mega />
                </Card>
                <Card title="Contador" color="#CCCCCC">
                    <Counter />
                </Card>
                <Card title="Componente controlado (Input)" color="#CCCCCC">
                    <Input/>
                </Card>
                <Card title="Comunicação" color="#29ABA4">
                    <Father/>
                </Card>
                <Card title="Condicionais" color="#5DB89D">
                    <EvenOrOdd number="11"/>
                    <Welcome user={{email: "teste@servidor.com"}} />
                    <Welcome user={{name: "Carlos"}} />
                    <Welcome />
                </Card>
                <Card title="Produtos" color="#FCEBB6">
                    <Products/>
                </Card>
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