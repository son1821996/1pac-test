import React from 'react';

import { UserProfileProvider } from './context/Context';
import Tabs from './component/Tabs/Tabs';
import ListNews from './component/ListNews/ListNews';
import Profile from './component/Profile/Profile';

function App() {

  return (
    <div className="App">
      <UserProfileProvider>
        <h1>
            Top Header news
          </h1>
          <Tabs>
          <div label="Headline news">
          <ListNews type="headlines" />
          </div>
          <div label="Custom news">
            <ListNews type="custom" />
          </div>
          <div label="User profile">
            <Profile />
          </div>
        </Tabs>
      </UserProfileProvider>
    </div>
  );
}

export default App;
