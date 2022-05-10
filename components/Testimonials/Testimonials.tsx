import classes from './Testimonials.module.scss';
import { Row, Col } from 'antd';
import { motion } from 'framer-motion';

const Testimonials = ({ testimonials }: any) => {

    return (
        <Row className={classes.container}>
            {testimonials.map((item: any, index: number) => (
                <Col
                    xs={{ span: 24 }}
                    md={{ span: 12 }}
                    key={item.name}
                    className={classes.testimonialItem}
                >
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 1.3 }}
                    >
                        <p>&quot;{item.feedback}&quot;</p>
                        <span>{item.name}</span>
                    </motion.div>
                </Col>
            ))}
        </Row>
    )
}

export default Testimonials;