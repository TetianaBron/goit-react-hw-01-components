import user from './bd/user.json';
import Profile from './components/Profile/Profile';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './bd/statistical-data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './bd/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './bd/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}
