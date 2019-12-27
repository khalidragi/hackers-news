import React, { useEffect, useState } from 'react';
import './App.css';
import NewsList from './components/NewsList';
import NavBar from './components/NavBar';
import { getStorys } from './utils/FetchAPI';
import { Container, Header, Segment } from 'semantic-ui-react';

function App() {
  const [param, setParam] = useState('topstories');
  const [newsId, setNewsId] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    const url = `https://hacker-news.firebaseio.com/v0/${param}.json`;
    getStorys(url).then(res => {
      setNewsId(res);
      setisLoading(false);
    });
  }, [param]);

  const handleParam = pressed => {
    setisLoading(true);
    switch (pressed) {
      case 'new':
        setParam('newstories');
        break;
      case 'best stories':
        setParam('beststories');
        break;
      default:
        setParam('topstories');
    }
  };

  return (
    <Container className='App'>
      <NavBar handleParam={handleParam} />
      <Container textAlign='left'>
        {isLoading ? (
          <Segment>
            <Header as='h3'>Loading...</Header>
          </Segment>
        ) : (
          <Segment>
            <NewsList newsId={newsId} />
          </Segment>
        )}
      </Container>
    </Container>
  );
}

export default App;
