import React, { useState } from 'react';
import './SectionFooter.scss';
import { Button, Form, Input } from 'antd';
import github from '../../../assets/images/github.png';
import linkedin from '../../../assets/images/linkedin.png';
import upwork from '../../../assets/images/upwork.png';
import { useLottie } from 'lottie-react';
import emailjs from '@emailjs/browser';
import mailbox from '../../../assets/lotties/mailbox.json';
interface IProps {
  sectionRef: any;
}

function SectionFooter(props: IProps) {
  const [form] = Form.useForm();
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mailbox,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const { TextArea } = Input;
  const { View } = useLottie(defaultOptions);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 1000);
  };

  const handleFinish = () => {
    emailjs
      .sendForm(
        'service_awsmfev',
        'template_3b5xpdg',
        '#my-form',
        'rJ5UsVKvZanMPOBKr'
      )
      .then(
        (result) => {
          console.log(result.text);
          form.resetFields();
        },
        (error) => {
          console.log(error.text);
          form.resetFields();
        }
      );
  };

  return (
    <div id="section-footer" ref={props.sectionRef}>
      <div className="lottie">{View}</div>
      <span className="desc">
        Send me a <span className="msg">message</span>, I will be touch with
        <br /> you shortly
      </span>
      <Form
        id="my-form"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        form={form}
        onFinish={handleFinish}
      >
        <Form.Item name="user_name">
          <Input name="user_name" placeholder="Your Name" />
        </Form.Item>
        <Form.Item name="user_email">
          <Input
            name="user_email"
            type="mail"
            placeholder="Your Mail Address"
          />
        </Form.Item>
        <Form.Item name="subject">
          <Input name="subject" placeholder="Your Subject" />
        </Form.Item>
        <Form.Item name="message">
          <TextArea
            name="message"
            showCount
            autoSize={{ minRows: 6, maxRows: 8 }}
            style={{ width: 300, resize: 'none' }}
            placeholder="Your Message"
          />
        </Form.Item>
        <Button
          loading={loadings[0]}
          onClick={() => enterLoading(0)}
          className="submit"
          htmlType="submit"
        >
          Send Message
        </Button>
      </Form>
      <div className="logo">
        <img src={github} alt="github" />
        <img src={linkedin} alt="linkedin" />
        <img src={upwork} alt="upwork" />
      </div>
    </div>
  );
}

export default SectionFooter;
