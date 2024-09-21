import { LogIn } from "lucide-react";
import Layout from "./Layout";
import SignUp from "./components/SignUp"
import Login from "./components/Login";

export default function Home() {
  return (
    <div>
      <main>
        <Login/>
        <SignUp/>
      </main>
      {/* <Layout>
        <></>

      </Layout> */}
    </div>
  );
}
