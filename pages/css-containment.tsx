import type * as CSS from 'csstype';
import { Fragment, useState } from 'react';
import styled, { css } from 'styled-components';

const cssContains: Array<CSS.Properties['contain']> = [
  'none',
  'size',
  'layout',
  'paint',
  'style',
  'strict',
  'content',
];

const descriptionMap = new Map<
  typeof cssContains[keyof typeof cssContains],
  string
>([
  ['size', '子孫要素のサイズの計算を省略する'],
  ['layout', '要素の外側が内側のレイアウトに影響を与えない。また、逆も然り'],
  ['paint', '子孫要素をその要素の外側に描画しない'],
  ['strict', 'size layout paint style'],
  ['content', 'layout paint'],
]);

const CssContainment = () => {
  const [cssContain, setCssContain] =
    useState<CSS.Properties['contain']>('none');

  return (
    <main>
      <h1>CSS Containment</h1>
      <form>
        {cssContains.map((value) => (
          <Fragment key={value}>
            <input
              id={value}
              type="radio"
              name="contain"
              checked={value === cssContain}
              onChange={(e) => {
                setCssContain(e.target.value);
              }}
              value={value}
            />
            <label htmlFor={value}>{value}</label>
          </Fragment>
        ))}
      </form>
      {descriptionMap.get(cssContain) ?? '---'}
      <StyledParent>
        <StyledContainment contain={cssContain}>
          <StyledChild>CHILD</StyledChild>
          <StyledFixedElement>FIXED</StyledFixedElement>
          <StyledAbsoluteElement>ABSOLUTE</StyledAbsoluteElement>
        </StyledContainment>
      </StyledParent>
    </main>
  );
};

export default CssContainment;

const StyledParent = styled.div``;

const StyledContainment = styled.div<Partial<Pick<CSS.Properties, 'contain'>>>`
  position: relative;
  background-color: yellow;
  ${({ contain }) =>
    contain &&
    css`
      contain: ${contain};
    `};
`;

const fontStyle = css`
  display: grid;
  place-items: center;
  color: white;
`;

const StyledChild = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  ${fontStyle}
`;

const StyledFixedElement = styled.div`
  position: fixed;
  background-color: green;
  width: 100px;
  height: 100px;
  right: 20px;
  bottom: 0;
  ${fontStyle}
`;

const StyledAbsoluteElement = styled.div`
  position: absolute;
  background-color: orange;
  width: 100px;
  height: 100px;
  right: 10px;
  bottom: -50px;
  ${fontStyle}
`;
