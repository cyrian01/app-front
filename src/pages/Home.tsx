import Container from "../components/Container";
import Hero from "../components/Hero";
import TodoTable from "../components/TodoTable";

export default function Home() {
  return (
    <div>
      <Container>
        <Hero />
        <h1 className="text-2xl text-gray-500">
          On va apprendre ensemble,{" "}
          <span className="text-gray-600 text-3xl">Javascript</span> ECM6 et
          Reactjs
        </h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-colors duration-300">
          Let's Start
        </button>
      </Container>
      <TodoTable />
    </div>
  );
}
