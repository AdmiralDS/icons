import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME, FontsVTBGroup, DropdownProvider } from '@admiral-ds/react-ui';
import { TooltipHoc, typography } from '@admiral-ds/react-ui';
import CopyOutline from '@admiral-ds/icons/build/documents/CopyOutline.svg?react';
import metadata from '../metadata.json';
import * as BankIcons from './icons/bank';
import * as CardsIcons from './icons/cards';
import * as CategoryIcons from './icons/category';
import * as CommunicationIcons from './icons/communication';
import * as DocumentsIcons from './icons/documents';
import * as FinanceIcons from './icons/finance';
import * as FlagsIcons from './icons/flags';
import * as LocationIcons from './icons/location';
import * as LogoIcons from './icons/logo';
import * as PaymentIcons from './icons/payment';
import * as RedactIcons from './icons/redact';
import * as SecurityIcons from './icons/security';
import * as ServiceIcons from './icons/service';
import * as SystemIcons from './icons/system';

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Title = styled.div`
  ${typography['Main/XS-bold']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  margin-bottom: 20px;
`;

const Text = styled.div`
  ${typography['Additional/M']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
`;

const Code = styled.code`
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
`;

const Panel = styled.pre`
  border: 1px dashed gray;
  border-radius: 4px;
  padding: 20px;
  background-color: ${({ theme }) => theme.color['Neutral/Neutral 05']};
  overflow-x: auto;
`;

const IconsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 8px;
  background: ${({ theme }) => theme.color['Neutral/Neutral 05']};
  padding: 32px 0;
  border-radius: 8px;
  & svg {
    flex-shrink: 0;
    *[fill^='#62'],
    *[fill^='#2B'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
    }
  }
  justify-content: center;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const IconCard = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 100px;
`;

const IconName = styled.div`
  margin-top: 16px;
  ${typography['Caption/XS']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  display: flex;
  gap: 8px;
`;

const CopyOutlineWrapper = styled.div`
  display: inline-flex;
  cursor: pointer;
`;

const CopyIcon = React.forwardRef<HTMLDivElement, { text: string }>(({ text }, ref) => {
  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };
  return (
    <CopyOutlineWrapper ref={ref}>
      <CopyOutline width={16} height={16} onClick={copyToClipboard} />
    </CopyOutlineWrapper>
  );
});
const CopyButton = TooltipHoc(CopyIcon);

const Category = ({ label, children }: { label: string; children: React.ReactNode }) => {
  return (
    <CategoryWrapper>
      <Title>{label}</Title>
      <IconsWrapper>{children}</IconsWrapper>
    </CategoryWrapper>
  );
};

const getIcons = (category: string, pack: Record<string, React.FunctionComponent<React.SVGProps<SVGSVGElement>>>) => {
  return (metadata as Record<string, Array<{ name: string; path: string }>>)[category].map((iconMetaInfo) => {
    const reactComponentName = `${capitalizeFirstLetter(category)}${iconMetaInfo.name}`;
    return {
      ...iconMetaInfo,
      reactComponentName,
      Component: pack[reactComponentName],
    };
  });
};
interface Category {
  label: string;
  value: string;
  icons: Array<{
    Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    reactComponentName: string;
    name: string;
    path: string;
  }>;
}
const CATEGORIES: Array<Category> = [
  { label: 'Cards', value: 'cards', icons: getIcons('cards', CardsIcons) },
  { label: 'Category', value: 'category', icons: getIcons('category', CategoryIcons) },
  { label: 'Communication', value: 'communication', icons: getIcons('communication', CommunicationIcons) },
  { label: 'Documents', value: 'documents', icons: getIcons('documents', DocumentsIcons) },
  { label: 'Finance', value: 'finance', icons: getIcons('finance', FinanceIcons) },
  { label: 'Flags', value: 'flags', icons: getIcons('flags', FlagsIcons) },
  { label: 'Payment', value: 'payment', icons: getIcons('payment', PaymentIcons) },
  { label: 'Redact', value: 'redact', icons: getIcons('redact', RedactIcons) },
  { label: 'Location', value: 'location', icons: getIcons('location', LocationIcons) },
  { label: 'Logo', value: 'logo', icons: getIcons('logo', LogoIcons) },
  { label: 'Security', value: 'security', icons: getIcons('security', SecurityIcons) },
  { label: 'Service', value: 'service', icons: getIcons('service', ServiceIcons) },
  { label: 'System', value: 'system', icons: getIcons('system', SystemIcons) },
  { label: 'Bank', value: 'bank', icons: getIcons('bank', BankIcons) },
];

const meta: Meta = {
  title: 'Icons/Icons',
  decorators: [
    (Story) => (
      <div style={{ padding: 24 }}>
        <ThemeProvider theme={LIGHT_THEME}>
          <DropdownProvider>
            <FontsVTBGroup />
            {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
            <Story />
          </DropdownProvider>
        </ThemeProvider>
      </div>
    ),
  ],
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/8sqIh7WvDuF1nc6Qo2BeCA/04-%F0%9F%9A%A7-%D0%98%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8-%D0%B8-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B8-Web-2.0?node-id=6681%3A281585',
    },
  },
} as Meta<typeof Text>;
export default meta;

type Story = StoryObj<typeof Text>;
const Template = () => (
  <>
    <Title style={{ fontWeight: 400 }}>
      Иконки — гафические символы используемые для представления действий, идей или объектов. Позволяют быстро
      передавать смысл отображаемой информации или привлекать к ней дополнительное внимание.
    </Title>
    {CATEGORIES.map(({ label, icons }) => (
      <Category key={label} label={label}>
        {icons.map(({ Component, name, path }, index: number) => (
          <IconCard key={name + index}>
            <Component width={24} height={24} />
            <IconName>
              {name}{' '}
              <CopyButton
                renderContent={() => 'Копировать пример использования'}
                text={`import { ReactComponent as ${name} } from '@admiral-ds/icons/${path}';`}
              />
            </IconName>
          </IconCard>
        ))}
      </Category>
    ))}
  </>
);

const exm = `
  config.module.rules.unshift({
    test: /\\.svg$/,
    use: [{ loader: '@svgr/webpack', options: { dimensions: false, svgProps: { focusable: '{false}' } } }],
  });
  `;
const svgModule = `
  declare module '*.svg' {
    import * as React from 'react';
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  }
  `;
const user1Exm = `
  declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }
  `;
const user2Exm = `
  declare module '*.svg' {
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const content: string;
  
    export { ReactComponent };
    export default content;
  }
  `;
const user3Exm = `
  declare module '*.svg' {
    import * as React from 'react';
  
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
    export default ReactComponent;
  }
  `;
const Template2 = () => {
  return (
    <Text style={{ fontWeight: 400 }}>
      В наших компонентах используется пакет иконок Admiral 2.1.
      <ul>
        <li>
          <a href="https://www.figma.com/file/eb3mxWvJpdcnG4EBj8B9V7/Admiral-Icon-Kit?type=design&node-id=17-1240">
            Макеты в Figma
          </a>
        </li>
        <li>
          <a href="https://www.npmjs.com/package/@admiral-ds/icons">Пакет в npm</a>
        </li>
      </ul>
      1) В проекте может понадобиться настройка загрузчиков svg-иконок. Например, в create-react-app уже изначально для
      webpack настроены загрузчики svg иконок. В нашем storybook настройки webpack для работы с иконками выглядят так:
      <Panel>
        <Code>{exm}</Code>
      </Panel>
      Вот несколько полезных ссылок, касающихся настройки проектов для работы с иконками:
      <ul>
        <li>
          <a href="https://react-svgr.com/docs/getting-started/">Svgr - getting started</a>
        </li>
        <li>
          <a href="https://www.npmjs.com/package/@svgr/webpack">Svgr - npm</a>
        </li>
      </ul>
      2) Также в проектах, использующих TypeScript, при работе с иконками может понадобиться настройка тайпинга
      (создание файла деклараций custom.d.ts и включение его в tsconfig.json). В нашем проекте для этого используется
      следующий файл svg.d.ts:
      <Panel>
        <Code>{svgModule}</Code>
      </Panel>
      Вот еще несколько способов написания подобного файла (примеры от пользователей библиотеки):
      <Panel>
        <Code>{user1Exm}</Code>
      </Panel>
      <Panel>
        <Code>{user2Exm}</Code>
      </Panel>
      <Panel>
        <Code>{user3Exm}</Code>
      </Panel>
      Ряд полезных ссылок по данной теме:
      <ul>
        <li>
          <a href="https://webpack.js.org/guides/typescript/#importing-other-assets">
            Webpack - Importing Other Assets
          </a>
        </li>
        <li>
          <a href="https://duncanleung.com/typescript-module-declearation-svg-img-assets/">
            TypeScript Module Declaration for SVG Assets
          </a>
        </li>
      </ul>
    </Text>
  );
};

export const Icons: Story = {
  render: Template,
  args: {},
  name: 'Список иконок',
};

export const Loaders: Story = {
  render: Template2,
  args: {},
  name: 'Использование иконок',
};
