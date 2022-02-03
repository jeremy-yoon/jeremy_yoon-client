import "../styles/globals.css";
import "../styles/star-icon.css";
import "antd/dist/antd.css";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "../styles/Home.module.css";
import { Sv, St, MainHeader } from "components";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import { RecoilRoot } from "recoil";

const { Header, Content, Footer } = Layout;

interface MyAppProps {
  Component: any;
  pageProps: any;
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <RecoilRoot>
      <Layout>
        {router.pathname !== "/" && <MainHeader />}

        <S.Content>
          <Component {...pageProps} />
        </S.Content>
      </Layout>
    </RecoilRoot>
  );
};

const S: any = {};

S.Content = styled(Sv)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  /* padding-top: 64px; */
  background: white;
`;

export default MyApp;
