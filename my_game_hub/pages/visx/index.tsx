import PreviewCard from '@/components/Visx/PreviewCard';
import VisxExamplesRadar from '@/components/Visx/VisxExamples/Radar';
import Link from 'next/link';
import { useRouter } from 'next/router';

const VisxPage = () => {
  const router = useRouter();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}>
      <div style={{ height: 60 }} />
      <div
        style={{
          display: 'flex',
          gap: 5,
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <PreviewCard title='Curves' content='<Curve.* /> <Shape.Line />'>
          <div>Hello World!</div>
        </PreviewCard>
        <PreviewCard title='Curves' content='<Curve.* /> <Shape.Line />'>
          <div>Hello World!</div>
        </PreviewCard>
        <Link href={`${router.asPath}/radar`}>
          <PreviewCard title='Radar' content='<Shape.Line /> + <Shape.LineRadial />' textBgColor='#FAF7E9'>
            <VisxExamplesRadar width={300} height={325.5} />
          </PreviewCard>
        </Link>
      </div>
    </div>
  );
};
export default VisxPage;
