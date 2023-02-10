import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import MissionList from '../components/missions/missionList';
import store from '../redux/configureStore';
import { fetchMissions, joinMission, leavingMission } from '../redux/missions/missionReducer';

describe('display the mission in the page', () => {
  it('should display all the missions', () => {
    const { container } = render(
      <Provider store={store}>
        <MissionList />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
describe('Missions reducers', () => {
  it('should fetch missions', async () => {
    await store.dispatch(fetchMissions());
    expect(store.getState().mission.length).toEqual(10);
  });
  it('should reserve a missions', () => {
    store.dispatch(joinMission('9D1B7E0'));
    expect(store.getState().mission[0].reserved).toBe(true);
  });
  it('should cancel a reservation', () => {
    store.dispatch(leavingMission('9D1B7E0'));
    expect(store.getState().mission[0].reserved).toEqual(false);
  });
});