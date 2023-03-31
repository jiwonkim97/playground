import { useEffect, useRef, useState } from 'react';

const PinterestVerticalSlide = () => {
  const layoutRef = useRef<HTMLDivElement>(null);
  const pageRef1 = useRef<HTMLDivElement>(null);
  const pageRef2 = useRef<HTMLDivElement>(null);
  const pageRef3 = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const before = useRef(0);
  // const onScroll = () => {
  //   switch (currentPage) {
  //     case 1:
  //       return;
  //     case 2:
  //       return;
  //     case 3:
  //       return;
  //   }
  // };
  const onScroll = (e: Event) => {
    console.log('test');
    const scrollY = window.scrollY;
    const direction = scrollY > before.current ? 'down' : 'up';
    before.current = scrollY;
    // console.log(currentPage, direction);
    if (currentPage === 1) {
      if (direction === 'down') {
        setCurrentPage(2);
      }
    } else if (currentPage === 3) {
      if (direction === 'up') {
        setCurrentPage(2);
      }
    } else if (currentPage === 2) {
      if (direction === 'up') {
        setCurrentPage(cur => cur - 1);
      } else {
        setCurrentPage(cur => cur + 1);
      }
    }
  };

  useEffect(() => {
    // console.log('CP :', currentPage);
    switch (currentPage) {
      case 1:
        pageRef1.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 2:
        pageRef2.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 3:
        pageRef3.current?.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }, [currentPage]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ display: 'flex', flex: 1, width: '100%', flexDirection: 'column', overflow: 'auto' }} ref={layoutRef} id='layout-ref'>
      <div style={{ display: 'flex', height: '100vh', minHeight: '100vh', backgroundColor: '#e3e' }} ref={pageRef1}></div>
      <div style={{ display: 'flex', height: '100vh', minHeight: '100vh', backgroundColor: '#ee3' }} ref={pageRef2}></div>
      <div style={{ display: 'flex', height: '100vh', minHeight: '100vh', backgroundColor: '#3ee' }} ref={pageRef3}></div>
    </div>
  );
};

export default PinterestVerticalSlide;
