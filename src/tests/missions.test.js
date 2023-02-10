import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import MissionList from '../components/missions/missionList';
import store from '../redux/configureStore';
import { fetchMission, joinMission, leavingMission } from '../redux/missions/missionReducer';

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
