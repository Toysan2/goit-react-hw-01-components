import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

const App = () => (
  <div>
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
    <div>
      <Statistics title="Upload stats" stats={data} />
    </div>
    <div>
      <FriendList friends={friends} />
    </div>
    <div>
      <TransactionHistory items={transactions} />
    </div>
  </div>
);

export default App;
