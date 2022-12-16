import { RatingProps } from './Rating.props';
import React, { useEffect, useState, KeyboardEvent } from 'react';
import styles from './Rating.module.css';
import cn from 'classnames';
import { AiFillStar } from 'react-icons/ai';

const Rating = ({
  isEditable = false,
  setRating,
  rating,
  ...props
}: RatingProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const changeDisplay = (i: number) => {
    if (!isEditable) return;
    constructRating(i);
  };
  const setNewRating = (i: number) => {
    if (!isEditable || !setRating) return;
    setRating(i);
  };
  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space' || !setRating) return;
    setRating(i);
  };

  const constructRating = (currentRating: number) => {
    const updateRating = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <AiFillStar
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => setNewRating(i + 1)}
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<SVGElement>) =>
            isEditable && handleSpace(i + 1, e)
          }
        />
      );
    });
    setRatingArray(updateRating);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};

export default Rating;
