import { Watch } from 'react-loader-spinner';

export const LoaderWatch = () => {
  return (
    <Watch
      height="80"
      width="80"
      radius="48"
      color="#4fa94d"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    ></Watch>
  );
};
