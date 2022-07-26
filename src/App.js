import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="md:flex-wrap lg:flex xl:flex mx-5 my-5 justify-center">
        <Card
          title_task="Group Task 1"
          item_title="Re-designed the zero-g doggie bags. No more spills!"
          border_color="border-cyan-500"
          bg_color="bg-cyan-50"
          progress_bar="100"
          text_color="text-cyan-500"
          month="January - March" />
        <Card
          title_task="Group Task 2"
          item_title="Bundle interplanetary analytics for improved transmission"
          border_color="border-yellow-500"
          bg_color="bg-yellow-50"
          progress_bar="30"
          text_color="text-yellow-500"
          month="April - June" />
        <Card
          title_task="Group Task 3"
          item_title="Data Migration: Performance & Culture End Game"
          border_color="border-red-500"
          bg_color="bg-red-50"
          progress_bar="60"
          text_color="text-red-500"
          month="July - September" />
        <Card title_task="Group Task 4"
          item_title="Bundle interplanetary analytics for improved transmission"
          border_color="border-green-500"
          bg_color="bg-green-50"
          progress_bar="20"
          text_color="text-green-500"
          month="October - December" />
      </div>
    </>
  );
}

export default App;
