import styled from 'styled-components';

export const CertGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 24px 0 40px;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin: 20px 0 32px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 12px;
    max-width: 500px;
    margin: 24px auto;
  }
`;

export const CertCard = styled.div`
  background: #212d45;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
  min-height: 140px;

  &:hover {
    transform: translateY(-4px);
    background: #263353;
    box-shadow: 0 8px 24px rgba(19, 173, 199, 0.15);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 16px;
    gap: 12px;
    min-height: 130px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 14px 16px;
    min-height: 0;
  }
`;

export const CertIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #13adc7;
  flex-shrink: 0;
  padding-top: 2px;
`;

export const CertBody = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const CertTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 6px;
  line-height: 20px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 15px;
    line-height: 19px;
  }
`;

export const CertIssuer = styled.span`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  letter-spacing: 0.02em;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 13px;
  }
`;

export const CertMeta = styled.span`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.55);
  letter-spacing: 0.02em;
  margin-top: 2px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 12px;
  }
`;

export const CertId = styled.span`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.02em;
  margin-top: 8px;
  font-family: 'Courier New', monospace;
  word-break: break-all;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 10px;
  }
`;
