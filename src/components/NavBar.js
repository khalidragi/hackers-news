import React, { Component } from 'react';
import { Image, Menu, Header } from 'semantic-ui-react';

export default class MenuExampleSecondary extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'top' };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.handleParam(name);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary color='orange'>
        <Menu.Item>
          <Header as='h4'>
            <Image
              size='small'
              src='https://cdn.imgbin.com/0/22/21/imgbin-computer-icons-hacker-news-intelligent-qMZv1rXAbk7vNTFQcw4yXXNzs.jpg'></Image>
            Hacker News Feed
          </Header>
        </Menu.Item>
        <Menu.Item
          name='top'
          active={activeItem === 'top'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='new'
          active={activeItem === 'new'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='best stories'
          active={activeItem === 'best stories'}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
