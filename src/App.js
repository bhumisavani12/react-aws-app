import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import '../src/css/style.css'

function App({ signOut }) {
  return (
    // <View className="App">
    //   <Card>
    //     <Image src={logo} className="App-logo" alt="logo" />
    //     <Heading level={1}>We now have Auth!</Heading>
    //   </Card>
    //   <Button onClick={signOut}>Sign Out</Button>
    // </View>
    <div className="App">
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;