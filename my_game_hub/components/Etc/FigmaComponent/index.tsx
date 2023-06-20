import styled from '@emotion/styled';

const CustomMainPopup: React.FC = () => {
  return (
    <ResponsablePopup>
      <Text1>공지사항</Text1>
      <ContentContainer>
        <Text2>
          소리다.이것은 불러 하였으며, 속에서 이상 발휘하기 불어 것이다. 청춘 찾아다녀도, 뛰노는 이상의 무엇이 사막이다. 창공에 풀밭에 인류의 고동을 노년에게서
          커다란 산야에 피가 그들은 있으랴? 봄날의 산야에 너의 풀이 아름다우냐? 열락의 것은 군영과 때문이다.
        </Text2>
      </ContentContainer>
      <BtnContainer>
        <BtnCancel>
          <Text3>취소</Text3>
        </BtnCancel>
        <BtnConfirm>
          <Text4>확인</Text4>
        </BtnConfirm>
      </BtnContainer>
    </ResponsablePopup>
  );
};
export default CustomMainPopup;

const ResponsablePopup = styled.div`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  gap: 6px;
  background-color: #ffffff;
`;
const Text1 = styled.div`
  text-align: center;
  vertical-align: middle;
  font-size: 20px;
  font-family: Pretendard;
  line-height: 20px;
  color: #000000;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
`;
const Text2 = styled.div`
  text-align: left;
  vertical-align: middle;
  font-size: 16px;
  font-family: Pretendard;
  line-height: 20px;
  color: #000000;
`;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
const BtnCancel = styled.div`
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 4px 10px;
  gap: 10px;
  background-color: #e8eaf6;
`;
const Text3 = styled.div`
  text-align: left;
  vertical-align: middle;
  font-size: 16px;
  font-family: Pretendard;
  line-height: 20px;
  color: #000000;
`;
const BtnConfirm = styled.div`
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 4px 10px;
  gap: 10px;
  background-color: #c5cae9;
`;
const Text4 = styled.div`
  text-align: left;
  vertical-align: middle;
  font-size: 16px;
  font-family: Pretendard;
  line-height: 20px;
  color: #000000;
`;
