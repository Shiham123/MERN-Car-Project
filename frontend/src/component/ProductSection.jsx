import PerProduct from './perProduct';

const ProductSection = () => {
  return (
    <div className="mt-[10rem]">
      <div className="flex justify-start items-center flex-col">
        <p className="text-fontColor text-[20px] font-bold font-inter my-4">
          Popular Products
        </p>
        <h1 className="text-[#151515] text-[45px] font-bold font-inter dark:text-white my-4">
          Browse Our Products
        </h1>
        <p className="text-[#737373] text-[16px] leading-[30px] w-2/5 text-center my-4 dark:text-white font-inter">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{' '}
        </p>
      </div>
      <PerProduct />
    </div>
  );
};

export default ProductSection;
