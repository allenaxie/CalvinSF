import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import classes from '../styles/Home.module.scss';
import { Col, Row } from 'antd';
import {motion} from 'framer-motion';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

const Home: NextPage = () => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Calvin Luo SF</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.main}>

        <section className={classes.headerSection}>
          <motion.div 
            className={classes.headerTextContainer}
            whileInView={{opacity:[0,1]}}
            transition={{ duration:1.5}}
          >
            <span className={classes.primaryText}>Calvin Luo</span>
            <div className={classes.secondaryText}>
              <span>SF Native Real Estate Expert</span>
              <span>Compass | CA DRE #02070754</span>
            </div>
          </motion.div>
        </section>

        <Row className={classes.aboutContainer}>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 8 }}
            className={classes.aboutCol}
          >
            <motion.div
              whileInView={{ opacity: [0,1], x:[-400,0] }}
              transition={{ duration: 1, delay:0.5 }}
            >
              <Image src="/images/FSTour.jpeg" width={305} height={458} />
            </motion.div>
          </Col>
          <Col
            className={`${classes.aboutTextContainer} ${classes.aboutCol}`}
            xs={{ span: 24 }}
            lg={{ span: 8 }}
          >
            <motion.div 
              className={classes.aboutHeading}
              whileInView={{opacity:[0,1]}}
            >
              <span>About Me</span>
            </motion.div>
            <motion.div 
            className={classes.aboutContent}
            whileInView={{opacity:[0,1]}}
            >
              <span>
                I have overseen numerous transactions as well as manage workflows around home buying and selling. Coupled with my knowledge of the city, and my experiences of having lived here all my life, I have the enthusiasm and desire to ensure your home buying/selling process flows as smoothly as possible.
                <br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
              <button className={classes.aboutBtn}>Learn More</button>
            </motion.div>
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 8 }}
            className={`${classes.aboutCol} ${classes.aboutCol3}`}
          >
            <motion.div
            whileInView={{ opacity: [0,1], x:[400,0] }}
            transition={{ duration: 1, delay:0.5 }}
            >
            <Image src="/images/Selfie.jpeg" width={305} height={458} />
            </motion.div>
          </Col>
        </Row>

        <Row className={classes.propertiesContainer}>
          <div className={classes.propertiesGallery}>
            <button className={classes.propertiesArrow}><FaArrowLeft/></button>
            <div className={classes.propertiesImgGroup}>
              <Image src="/images/properties/9 Somerset Place.jpeg" height={308} width={410}/>
              <Image src="/images/properties/9 Somerset Place.jpeg" height={308} width={410}/>
              <Image src="/images/properties/303 Philip Drive-304 (Temp).jpeg" height={308} width={410}/>
              <Image src="/images/properties/454 Frederick Street.jpeg" height={308} width={410}/>
              <Image src="/images/properties/454 Frederick Street.jpeg" height={308} width={410}/>
              <Image src="/images/properties/454 Frederick Street.jpeg" height={308} width={410}/>
            </div>
            <button className={classes.propertiesArrow}><FaArrowRight/></button>
          </div>
          <button className={classes.propertiesBtn}>
            <span>
              Sold Properties
            </span>
          </button>
        </Row>
      </main>
    </div>
  )
}

export default Home;
