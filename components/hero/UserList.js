import React, { useState } from "react";
import UserItem from "./UserItem";
import { Button } from "../ui/button";
import { ChevronRight, ChevronUp } from "lucide-react";

const UserList = () => {
  const items = [
    {
      id: 1,
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      id: 2,
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      id: 3,
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      id: 4,
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      id: 5,
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      id: 6,
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      id: 7,
      name: "Olivia Martin",
      time: "8:47",
    },
    {
      id: 8,
      name: "Olivia Martin",
      time: "8:47",
    },
  ];

  const [visibleItems, setVisibleItems] = useState(2);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) =>
      Math.min(prevVisibleItems + 5, items.length)
    );
  };

  const showLess = () => {
    setVisibleItems((prevVisibleItems) => Math.max(prevVisibleItems - 5, 2));
  };

  return (
    <>
      <div className='grid'>
        {items.slice(0, visibleItems).map((item) => (
          <UserItem key={item.id} name={item.name} time={item.time} />
        ))}
      </div>
      <div className='flex items-center justify-center mt-3'>
        {visibleItems < items.length && (
          <Button onClick={loadMore} variant='outline' className='w-fit'>
            View more
            <ChevronRight size={16} className='ml-1' />
          </Button>
        )}
        {visibleItems >= items.length && visibleItems > 2 && (
          <Button onClick={showLess} variant='outline' className='w-fit'>
            Show less
            <ChevronUp size={16} className='ml-1' />
          </Button>
        )}
      </div>
    </>
  );
};

export default UserList;
