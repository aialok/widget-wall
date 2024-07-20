const Block = ({ keyProp }: { keyProp: string }) => {
    return (
      <div className="h-full w-full flex flex-col justify-center items-center p-6 bg-white text-[var(--black-1)] rounded-2xl text-3xl uppercase">
        {keyProp}
      </div>
    );
  };

  export default Block;