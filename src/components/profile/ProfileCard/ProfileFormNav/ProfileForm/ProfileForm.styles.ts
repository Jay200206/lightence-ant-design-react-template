import { Typography, Form } from 'antd';
import { hexToRGB } from 'helpers/hexToRGB';
import styled from 'styled-components';

export const Title = styled(Typography.Text)`
  font-weight: 700;
  font-size: 1rem;
  display: block;

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: 1.125rem;
  }
`;

export const FormItem = styled(Form.Item)`
  @media only screen and ${(props) => props.theme.media.xl} {
    margin-bottom: 2rem;
  }

  & label {
    font-weight: 500;
    font-size: 0.85rem;

    color: ${(props) => props.theme.colors.main.primary};
  }

  & .ant-input-group-addon:first-of-type {
    font-weight: 600;
    width: 4rem;

    color: ${(props) => props.theme.colors.main.primary};

    background-color: ${(props) => hexToRGB(props.theme.colors.main.primary, 0.05)};
  }

  & .ant-input-group-addon + input + .ant-input-group-addon {
    background-color: transparent;
  }

  & .ant-input-affix-wrapper {
    border-radius: ${(props) => props.theme.border.radius};
  }

  & div[role='alert'] {
    margin: 0.5rem 0;
  }
`;
