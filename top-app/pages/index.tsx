import { useState } from 'react';
import Button from '../components/Button/Button';
import Htag from '../components/Htag/Htag';
import P from '../components/P/P';
import Rating from '../components/Rating/Rating';
import Tag from '../components/Tag/Tag';

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">Text</Htag>
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
    </>
  );
}
