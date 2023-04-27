import React from 'react';
import './SectionFooter.scss';
import { Button, Form, Input } from 'antd';
import github from '../../../assets/images/github.png';
import linkedin from '../../../assets/images/linkedin.png';
import upwork from '../../../assets/images/upwork.png';
import { useLottie } from 'lottie-react';
import mailbox from '../../../assets/lotties/mailbox.json';

interface IProps {
  sectionRef: any;
}

function SectionFooter(props: IProps) {
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

  return (
    <div id="section-footer" ref={props.sectionRef}>
      <div className="lottie">{View}</div>
      <span className="desc">
        Send me a <span className="msg">message</span>, I will be touch with
        <br /> you shortly
      </span>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item>
          <Input placeholder="Your Name" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="Your Subject" />
        </Form.Item>
        <Form.Item>
          <TextArea
            showCount
            autoSize={{ minRows: 6, maxRows: 8 }}
            style={{ width: 300, resize: 'none' }}
            placeholder="Your Message"
          />
        </Form.Item>
        <Button className="submit" htmlType="submit">
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
