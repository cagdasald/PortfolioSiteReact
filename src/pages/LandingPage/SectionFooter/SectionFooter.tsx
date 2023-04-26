import React from 'react';
import './SectionFooter.scss';
import { Button, Form, Input } from 'antd';
import github from "../../../assets/images/github.png"
import linkedin from "../../../assets/images/linkedin.png"
import upwork from "../../../assets/images/upwork.png"
import TextArea from 'antd/es/input/TextArea';

interface IProps {
  sectionRef: any;
}

function SectionFooter(props: IProps) {
  return (
    <div id="section-footer">
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
          <TextArea rows={4} placeholder="Your Message" />
        </Form.Item>
        <Button className='submit' htmlType="submit">Send Message</Button>
      </Form>
      <div className='logo'>
        <img src={github} alt="github" />
        <img src={linkedin} alt="linkedin" />
        <img src={upwork} alt="upwork" />
      </div>
    </div>
  );
}

export default SectionFooter;
