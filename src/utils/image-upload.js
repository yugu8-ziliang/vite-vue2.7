export const transformImgListToFileList = (imgs) =>
  imgs.map((_) => ({ url: _ }));

export const transformFileListToImgList = (files) =>
  files.map(({ url }) => url);

export const transformFileListToRawList = (files) =>
  files.map(({ raw }) => raw);

// 判断本地blob图
const isBlob = (value) => /^blob:/.test(value);

export const splitOnlineImgAndLocalImg = (fileList) => {
  return fileList.reduce(
    (pre, cur) => {
      const [x, y] = pre;
      const { url } = cur;

      if (isBlob(url)) {
        return [x, [...y, cur]];
      }
      return [[...x, cur], y];
    },
    [[], []]
  ); //[在线图File,本地图File]
};
