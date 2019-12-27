import React, { useState } from 'react';
import { List, Button, Icon } from 'semantic-ui-react';
import Story from './Story';

const NewsList = ({ newsId }) => {
  const [increment, setIncrement] = useState(0);

  const handleMore = e => {
    setIncrement(increment + 30);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log(e);
  };

  return (
    <>
      <List divided relaxed>
        {newsId
          ? newsId
              .slice(increment, increment + 30)
              .map(story => <Story storyId={story} />)
          : null}
      </List>
      <Button
        compact
        icon
        labelPosition='right'
        onClick={handleMore}
        color='orange'>
        <Icon name='arrow right' />
        More
      </Button>
    </>
  );
};

export default NewsList;
