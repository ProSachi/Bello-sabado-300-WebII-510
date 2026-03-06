import { FaDog } from "react-icons/fa";

function Home() {
    return (
        <div>
            <h1>Bienvenido a la Veterinaria</h1>
            {/* 2. Uso del componente importado */}
            <FaDog style={{ color: 'brown', fontSize: '50px' }} />
        </div>
    );
}
export default Home;
