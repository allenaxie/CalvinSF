import classes from './Footer.module.scss';
import { Row, Col } from 'antd';
import {ContactForm} from '../index';
import Image from 'next/image';

const Footer = () => {

    return (
        <Row className={classes.container}>
            <Col
                xs={{ span: 24}}
                lg={{ span: 16 }}
                className={classes.footerMainContent}
            >
                <Image src="/images/Compass_Logo_H_K.svg" width={150} height={50} alt="compass-logo"/>
                <div className={classes.footerAddress}>
                    <span>Address</span>
                    <span>Calvin Luo</span>
                    <span>891 Beach Street</span>
                    <span>San Francisco, CA 94109</span>
                </div>
                <div className={classes.footerContact}>
                    <span>Contact</span>
                    <a href="mailto:calvin.luo@compass.com">calvin.luo@compass.com</a>
                    <span>CA DRE# 02070754</span>
                </div>
                <p className={classes.footerCopyright}>Calvin Luo is a real estate agent affiliated with Compass. <a href="https://compass.com" target="_blank" rel="noreferrer" >Compass</a> is a licensed real estate broker licensed by the state of California and abides by equal housing opportunity laws. All material presented herein is intended for informational purposes only. Information is compiled from sources deemed reliable but is subject to errors, omissions, changes in price, condition, sale, or withdrawal without notice. No statement is made as to the accuracy of any description. All measurements and square footages are approximate. This is not intended to solicit property already listed. Nothing herein shall be construed as legal, accounting, or other professional advice outside the realm of real estate brokerage.</p>
            </Col>
            <Col
                xs={{ span: 18 }}
                lg={{ span: 8 }}
                className={classes.contactFormContainer}
            >
                <ContactForm/>
            </Col>
        </Row>
    )
}

export default Footer;