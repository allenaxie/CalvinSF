import classes from './Footer.module.scss';
import { Row, Col } from 'antd';
import {ContactForm} from '../index';
import Image from 'next/image';

const Footer = () => {

    return (
        <Row className={classes.container}>
            <Col
                lg={{ span: 16 }}
            >
                <Image src="/images/compassLogo.png" width={150} height={50}/>
                Hi
            </Col>
            <Col
                lg={{ span: 8 }}
            >
                <ContactForm/>
            </Col>
        </Row>
    )
}

export default Footer;