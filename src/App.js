import {Layout, Row, Col} from 'antd';
import {InfoForm} from "./Components/InfoForm";
import {InfoFormContextProvider} from "./Context/InforFormContext";

const {Content} = Layout;

const App = () => {

    return (
        <Layout>
            <Content>
                <Row justify="space-around" align="middle">
                    <Col span={4}>
                        <InfoFormContextProvider>
                            <InfoForm/>
                        </InfoFormContextProvider>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}
export default App