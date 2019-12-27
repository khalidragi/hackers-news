import React from 'react';
import { List } from 'semantic-ui-react';
import Story from './Story';

const NewsList = ({ newsId }) => {
  return (
    <List divided relaxed>
      {newsId ? newsId.map(story => <Story storyId={story} />) : null}
    </List>
  );
};

export default NewsList;
