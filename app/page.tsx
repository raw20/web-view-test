import Header from "./ui/header/hearder";
import Main from "./ui/main/main";

export default function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="w-100">
        <Main />
      </div>
    </>
  );
}
