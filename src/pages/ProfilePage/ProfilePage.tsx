import { RootState } from '../../store/store';
import { loadData } from './profilePage.slice';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const pageState = useSelector((state: RootState) => state.profilePage);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/4')
      .then((response) => response.json())
      .then((json) => {
        const payload = {
          name: json.name,
          email: json.email,
          website: json.website,
          phone: json.phone,
        };
        dispatch(loadData(payload));
      });
  }, []);

  return (
    <div className="profile-page container">
      <div>
        <b>Name:</b> {pageState.name}
      </div>
      <div>
        <b>Email:</b> {pageState.email}
      </div>
      <div>
        <b>Website:</b> {pageState.website}
      </div>
      <div>
        <b>Phone:</b> {pageState.phone}
      </div>
    </div>
  );
};
