import AnimationButton from '@/components/Etc/AnimationButton';
import { colors } from '@/config/globalColors';
import { useState } from 'react';

const Home = () => {
  const screenDevide = 5;
  const [isPageChange, setIsPageChange] = useState(false);
  const onClickButton = () => {
    setIsPageChange(true);
  };
  return (
    <div style={{ display: 'flex', width: '100%', flex: 1, backgroundColor: colors.GRAY_200, alignItems: 'center', justifyContent: 'center' }}>
      <AnimationButton onClick={onClickButton} color1={colors.SUB_BLUE3} color2={colors.MAIN_BLUE} />
    </div>
  );
};
export default Home;
