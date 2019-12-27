import React, { useEffect, useState } from 'react';
import { List } from 'semantic-ui-react';
import { getStorys } from '../utils/FetchAPI';
import { mapTime } from '../utils/mapTime';

const Story = ({ storyId }) => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    const baseURL = `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`;
    getStorys(baseURL).then(res => {
      setStory(res);
    });
  }, [storyId]);

  return (
    <>
      {story ? (
        <>
          <List.Item key={story.id}>
            <List.Content>
              <List.Header as='a'>{story.title}</List.Header>
              <List.Description as='p'>
                <span>{story.score} points </span>
                <span>By: {story.by}, </span>
                <span>{mapTime(story.time)} ago</span>
              </List.Description>
            </List.Content>
          </List.Item>
        </>
      ) : null}
    </>
  );
};

export default Story;
