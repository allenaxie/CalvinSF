import type { NextPage } from 'next';
import Head from 'next/head';
import classes from '../styles/Home.module.scss';
import { Col, Row } from 'antd';

const Home: NextPage = () => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.main}>

        <section className={classes.headerSection}>
          <div className={classes.headerTextContainer}>
            <span className={classes.primaryText}>Calvin Luo</span>
            <div className={classes.secondaryText}>
              <span>SF Native Real Estate Expert</span>
              <span>Compass | CA DRE #02070754</span>
            </div>
          </div>
        </section>

        <Row className={classes.aboutContainer}>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 8 }}
            className={classes.aboutCol}
          >
            image
          </Col>
          <Col
            className={`${classes.aboutTextContainer} ${classes.aboutCol}`}
            xs={{ span: 24 }}
            lg={{ span: 8 }}
          >
            <div className={classes.aboutHeading}>
              <span>About Me</span>
            </div>
            <div className={classes.aboutContent}>
              <span>
                I have overseen numerous transactions as well as manage workflows around home buying and selling. Coupled with my knowledge of the city, and my experiences of having lived here all my life, I have the enthusiasm and desire to ensure your home buying/selling process flows as smoothly as possible.
                <br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
              <button className={classes.aboutBtn}>Learn More</button>
            </div>
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 8 }}
            className={classes.aboutCol}
          >
            image
          </Col>
        </Row>

        <Row className={classes.propertiesContainer}>
          <button className={classes.propertiesBtn}>Sold Properties</button>
        </Row>
      </main>
    </div>
  )
}

export default Home;
