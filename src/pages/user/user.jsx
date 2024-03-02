import React from 'react'
import { useGetUser } from './service/query/useGetUser';
import { CardUser } from '../../components/cardUser';


export const User = () => {
    const {data, isLoading, error} = useGetUser();
  return (
    <div>
      {isLoading ? (
        <h1 className="text-3xl">Loading...</h1>
      ) : (
        <>
          {data?.map((item) => (
            <CardUser key={item.id} {...item} />
          ))}
        </>
      )}
    </div>
  );
}
