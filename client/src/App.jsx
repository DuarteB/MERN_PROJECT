import React from "react";
import { Layout, Image, Typography } from "antd";
import Logo from "./images/camera.png";
import Home from "./components/Home";

const { Title } = Typography;
const { Header, Footer } = Layout;

const App = () => {
    return(
        <Layout>
                <Header>
                    <Image width="45" preview={false} src={Logo}/>
                    &nbsp;
                    <Title>Instaclone</Title>
                </Header>
                <Home />
                <Footer>
                    2022 Instaclone
                </Footer>
        </Layout>
    );
}

export default App;