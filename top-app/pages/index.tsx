import { GetStaticProps } from 'next';
import { useState } from 'react';
import Button from '../components/Button/Button';
import Htag from '../components/Htag/Htag';
import P from '../components/P/P';
import Rating from '../components/Rating/Rating';
import Tag from '../components/Tag/Tag';
import { withLayout } from '../layout/Layout';
import { UserItem } from '../interfaces/menu.interface';
import axios from 'axios';

function Home({ users, firstCategory }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  console.log('first', users);

  return (
    <>
      <Htag tag="h1">Text111</Htag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
      <P size="l">text text text</P>
      <Tag size="s" color="red">
        red
      </Tag>
      <Tag size="m" color="ghost">
        ghost
      </Tag>
      <Tag size="m" color="primary">
        primary
      </Tag>
      <Rating isEditable={true} setRating={setRating} rating={rating} />
      <ul>
        {users.map((user) => (
          <li key={user.username}>{user.username}</li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  const firstCategory = 0;
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return {
    props: { users, firstCategory }, // will be passed to the page component as props
  };
};

interface HomeProps extends Record<string, unknown> {
  users: UserItem[];
  firstCategory: number;
}
