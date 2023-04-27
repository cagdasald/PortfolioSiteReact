import React, { ReactNode } from 'react';
import './SectionHeader.scss';
import { Menu } from 'antd';

enum MenuItem {
  about = 'About',
  careers = 'Careers',
  contact = 'Contact',
}

interface IProps {
  refAbout?: any;
  refCareers?: any;
  refContact?: any;
}

function SectionHeader(props: IProps) {
  const isRefs = (): boolean => {
    return (
      !!props.refAbout &&
      !!props.refCareers &&
      !!props.refContact 
    );
  };

  const handleClickMenuItem = (item: MenuItem): void => {
    switch (item) {
      case MenuItem.about:
        props.refAbout.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;
      case MenuItem.careers:
        props.refCareers.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;
      case MenuItem.contact:
        props.refContact.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;
    }
  };
  const renderMenuItems = (): ReactNode => {
    return (
      <React.Fragment>
        <Menu.Item
          key={MenuItem.about}
          onClick={() => handleClickMenuItem(MenuItem.about)}
        >
          About Me
        </Menu.Item>
        <Menu.Item
          key={MenuItem.careers}
          onClick={() => handleClickMenuItem(MenuItem.careers)}
        >
          My Career
        </Menu.Item>
        <Menu.Item
          key={MenuItem.contact}
          onClick={() => handleClickMenuItem(MenuItem.contact)}
        >
          Contact
        </Menu.Item>
      </React.Fragment>
    );
  };

  const renderHeader = (): ReactNode => {
    return (
      <div className='menu'>
      <Menu mode="horizontal" selectedKeys={[]}>
        {isRefs() && renderMenuItems()}
      </Menu>
      </div>
    );
  };

  const renderHeaderLogo = (): ReactNode => {
    return (
      <div className="logo">
        <div className="circle">
          <label>Ç</label>
        </div>
        <span>Çağdaş's Portfolio</span>
      </div>
    );
  };

  return (
    <div id="section-header">
      <div className="section-header-content">
        {renderHeaderLogo()}
        <React.Fragment>{renderHeader()}</React.Fragment>
      </div>
    </div>
  );
}

export default SectionHeader;
