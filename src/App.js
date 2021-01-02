import PaintingList from './components/Painting/PaintingList';
import ColorPicker from './components/ColorPicker/ColorPicker';
//import Section from './components/Section';
import paintings from './paintings.json';
import user from './user.json';
import Profile from './components/Profile/Profile';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './statistical-data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './friends.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

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
      {/* <ColorPicker options ={colorPickerOptions} />
            <PaintingList items={paintings} /> */}
    </div>
  );
}
