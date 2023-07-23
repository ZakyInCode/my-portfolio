const buttonLearnMore = () => {
  return (
    <div className="relative border border-slate-200 p-2 flex justify-center items-center z-1 my-4">
      <button className="bg-red-500 text-2xl text-center font-semibold text-white px-10 py-2 z-10">
        Learn more
      </button>
      <div className="absolute w-[110%] h-3 bg-black z-2" />
    </div>
  );
};
export default buttonLearnMore;
