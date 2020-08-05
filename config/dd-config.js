import tracer from 'dd-trace';
import { ENV_TYPE } from '../src/utils/constants';

tracer.init({
  env: ENV_TYPE,
  hostname: '172.17.42.1',
  service: 'cms-frontend',
});
