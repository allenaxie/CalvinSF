import './ContactForm.module.scss';
import { BsMailbox } from 'react-icons/bs';
import { useForm } from '@formspree/react';
import { Form, Input, Result } from 'antd';

const ContactForm = () => {
;
  const { TextArea } = Input;
  const [state, handleSubmit] = useForm("mrgjrbvb");
  if (state.succeeded) {
    console.log('success')
    return (
      <Result
        status="success"
        title='Thanks for your message!'
      />
    );
  }

  const validateMessages = {
    types: {
      email: `is not a valid email!`
    }
  }

  return (
    <>
      <Form
        name='contact-form'
        onFinish={handleSubmit}
        className="app__footer-form"
        wrapperCol={{
          xs: { span: 18, offset: 5 },
        //   md: {span: 20, offset: 2 },
        //   lg: { span: 18, offset: 3},
        //   xl: {span: 14, offset: 6},
        }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please input your name' }]}
        >
          <Input placeholder="Your name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please enter a valid email address", type: 'email' }]}
        >
          <Input placeholder="Your email" />
        </Form.Item>
        <Form.Item
          name="message"
          rules={[
            { required: true, message: "Please enter your message" }]}
        >
          <TextArea rows={4} placeholder="Your message" />
        </Form.Item>
        <Form.Item
          wrapperCol={{ 
            xs: { span: 24, offset: 10 },
            md: { span: 24, offset: 11 }
          }}
        >
          <button type="submit" className='p-text'>
            Get In Touch
          </button>
        </Form.Item>
      </Form>
    </>
  )
}

export default ContactForm;