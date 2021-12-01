/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  OknoClose,
  OknoContent,
  OknoFooter,
  OknoMaximize,
  OknoMinimize,
  OknoResize,
  OknoTitlebar,
  OknoWindow,
} from "components/OknoWindow";
import Okno from "lib/Okno";

interface DefaultOknoWindowProps {
  okno: Okno;
  children?: React.ReactNode;
}

const TitlebarStyles = css`
  display: flex;
  justify-content: space-between;
  background: #888;
  padding: 0.25rem;

  & > * {
    margin-left: 2px;
  }
`;

const ContentStyles = css`
  background: #ddd;
  color: #222;
  padding: 0.5rem 0.25rem;
`;

const FooterStyles = css`
  background: #ddd;
  display: flex;
  justify-content: end;
`;

const ResizeStyles = css`
  width: 12px;
  height: 12px;
  background: #aaa;
`;

export default function DefaultOknoWindow({
  okno,
  children,
}: DefaultOknoWindowProps) {
  return (
    <OknoWindow okno={okno}>
      <OknoTitlebar css={TitlebarStyles}>
        <span>Window {okno.id}</span>
        <div className="controls">
          <OknoMinimize>Minimize</OknoMinimize>
          <OknoMaximize>Maximize</OknoMaximize>
          <OknoClose>Close</OknoClose>
        </div>
      </OknoTitlebar>
      <OknoContent css={ContentStyles}>{children}</OknoContent>
      <OknoFooter css={FooterStyles}>
        <OknoResize css={ResizeStyles} />
      </OknoFooter>
    </OknoWindow>
  );
}
