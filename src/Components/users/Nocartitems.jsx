import item from '../../assets/no itemscart.png';

const Nocartitems = () => {
  return (
    <div className='w-full flex items-center justify-center'>
      <img
        src={item}
        className='sm:max-w-[400px] max-w-[300px] w-full mt-20'
        alt=""
      />
    </div>
  );
};

export default Nocartitems;
