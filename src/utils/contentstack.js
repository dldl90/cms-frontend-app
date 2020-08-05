import Contentstack from 'contentstack';

import * as runtimeProcess from 'process';
import { QA, DEVELOPMENT } from './constants';

export const getStackEnv = (stack, isPreview) => {
  const isQa = process.env.NODE_ENV === DEVELOPMENT || runtimeProcess.env.ENV_TYPE === QA;

  if (isPreview) return stack.preview;
  if (isQa) return stack.qa;
  return stack.prod;
};

export const getStack = stack => Contentstack.Stack(stack);

export const getSingleContent = (stack, contentType, path) => {
  const Query = stack.ContentType(contentType).Query();

  return Query.where('url', path)
    .toJSON()
    .find();
};

export const getAssetUrl = (asset, res) => {
  const { UID: assetUid, stack } = asset;
  const Stack = Contentstack.Stack(getStackEnv(stack));

  const data = Stack.Assets(assetUid)
    .toJSON()
    .fetch();

  data.then(
    function success(result) {
      const documentPath = result.url;
      res.status(302).redirect(documentPath);
    },
    function error(err) {
      return err;
    }
  );
};
