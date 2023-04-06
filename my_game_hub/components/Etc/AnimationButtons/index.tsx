import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from 'react';

const CustomButton = (props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  return (
    <button
      {...props}
      style={{
        width: '130px',
        height: '40px',
        color: '#fff',
        borderRadius: '5px',
        padding: '10px 25px',
        fontWeight: 500,
        background: 'transparent',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        position: 'relative',
        display: 'inline-block',
        boxShadow: 'inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1)',
        outline: 'none',
        margin: '20px',
        ...props?.style,
      }}>
      Read More
    </button>
  );
};

const Type1 = () => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const onMouseEnter = () => {
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <CustomButton
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        background: 'linear-gradient(0deg, rgba(251,33,117,1) 0%, rgba(234,76,137,1) 100%)',
        border: 'none',
        overflow: 'hidden',
        opacity: isHover ? 0.7 : 1,
      }}
    />
  );
};

export default { CustomButton, Type1 };
