import Service from "./services";
import * as API from '../constant/api';

const url = 'stories/new_story'
export const new_story = () => {
  return Service.get(`${API}/${url}`);
}