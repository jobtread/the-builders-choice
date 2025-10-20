import Accordion from '#src/components/accordion.js';
// import Btn from '#src/components/btn.js';
import Page from '#src/components/page.js';
import Section from '#src/components/section.js';
import Heading4 from '#src/components/typography/heading-four.js';
import Heading1 from '#src/components/typography/heading-one.js';
import Heading3 from '#src/components/typography/heading-three.js';
import Heading2 from '#src/components/typography/heading-two.js';
import OList from '#src/components/typography/ordered-list.js';
import UList from '#src/components/typography/unordered-list.js';

const ColorSwatch = ({ pms, cmyk, hex, name, invert }) => {
  return (
    <div className='shadow-sm border border-tbcSmoke text-xs rounded-md'>
      <div
        className={`h-[100px] p-3 flex justify-start items-end font-medium uppercase ${
          invert ? '' : 'text-white'
        }`}
        style={{ background: `#${hex}` }}
      >
        {name}
      </div>
      <div className='p-3 pb-8 space-y-2'>
        {pms && (
          <div>
            <strong>PANTONE</strong> {pms}
          </div>
        )}
        {cmyk && (
          <div>
            <strong>CMYK</strong> {cmyk}
          </div>
        )}
        {hex && (
          <div>
            <strong>HEX</strong> {hex}
          </div>
        )}
      </div>
    </div>
  );
};

const SubSection = ({ children }) => (
  <div className='py-8 mt-8 border-t border-gray-100'>{children}</div>
);
const SubSectionDesc = ({ children }) => (
  <div className='font-light max-w-[800px] mb-8'>{children}</div>
);
const SubSectionHeader = ({ children }) => (
  <div className='font-display font-medium text-tbcBlueMed text-3xl mt-8'>
    {children}
  </div>
);

const primaryColors = [
  { cmyk: false, hex: '182671ff', name: 'tbcBlueDark' },
  { cmyk: false, hex: '375E9Fff', name: 'tbcBlueMed' },
  { cmyk: false, hex: '7699B9ff', name: 'tbcBlueLight' },
  { cmyk: false, hex: 'FDAF34ff', name: 'tbcOrange', invert: true },
  { cmyk: false, hex: 'FED947ff', name: 'tbcYellow', invert: true },
  { cmyk: false, hex: 'F3F3F3ff', name: 'tbcSmoke', invert: true },
  { cmyk: false, hex: '170C0Aff', name: 'tbcLicorice' },
  { cmyk: false, hex: '222834ff', name: 'tbcBlack' }
];

export default () => (
  <Page title="The Builder's Choice">
    <div className='bg-tbcYellow bg-linear-to-t from-tbcOrange to-tbcYellow'>
      <Section
        customClasses="bg-[url('/images/abstract-boxes-bg.svg')] bg-no-repeat bg-contain bg-right"
        size='none'
      >
        <div className='py-12'>
          <h1 className='text-tbcBlueMed mt-8 mb-4 text-sm font-bold uppercase tracking-wide'>
            The Builder&apos;s Choice
          </h1>
          <h2 className='text-tbcBlueDark font-display font-medium tracking-tight text-5xl md:text-6xl mb-4'>
            Branding Guide
          </h2>
        </div>
      </Section>
    </div>
    <Section>
      <SubSection>
        <SubSectionHeader>Primary Colors</SubSectionHeader>
        <SubSectionDesc>
          Primary colors should be used where possible. Brand Orange should
          always web included as either a primary fill or primary accent within
          a composition.
        </SubSectionDesc>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {primaryColors.map(color => (
            <ColorSwatch
              key={color.hex}
              cmyk={color.cmyk}
              hex={color.hex}
              name={color.name}
              invert={color.invert}
            />
          ))}
        </div>
      </SubSection>
      <SubSection>
        <SubSectionHeader>Grays</SubSectionHeader>
        <SubSectionDesc>
          Grays can be used in combination with any primary and secondary
          colors. In most cases, the gray serves as a background to denote a
          separation of content (like sections on a web page) and is most often
          paired with white.
        </SubSectionDesc>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {/* <ColorSwatch
            pms='Black 6 C'
            cmyk='82, 71, 59, 75'
            hex='101820'
            name='Pantone Black 6 C'
          /> */}
          <ColorSwatch cmyk='76, 69, 64, 82' hex='0e0f13' name='Brand Black' />
          <ColorSwatch cmyk='0, 0, 0, 100' hex='000000' name='Text Black' />
          <ColorSwatch cmyk='80, 73, 57, 73' hex='181a24' name='Gray 8' />
          <ColorSwatch cmyk='75, 67, 47, 36' hex='404353' name='Primary Gray' />
          <ColorSwatch cmyk='69, 60, 45, 24' hex='545765' name='Gray 6' />
          <ColorSwatch cmyk='52, 43, 34, 3' hex='838591' name='Gray 5' invert />
          <ColorSwatch cmyk='33, 26, 22, 0' hex='acaeb5' name='Gray 4' invert />
          <ColorSwatch cmyk='15, 11, 9, 0' hex='d5d7db' name='Gray 3' invert />
          <ColorSwatch cmyk='6, 4, 3, 0' hex='ecedf0' name='Gray 2' invert />
          <ColorSwatch cmyk='3, 1, 0, 0' hex='f5f7fa' name='Gray 1' invert />
        </div>
      </SubSection>
    </Section>
    <Section>
      <div className='md:flex md:gap-12'>
        <div>
          <Heading1>Heading One</Heading1>
          <Heading2>Heading Two</Heading2>
          <Heading3>Heading Three</Heading3>
          <Heading4>Heading Four</Heading4>
          <OList>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              luctus placerat tempor. Etiam hendrerit pretium velit quis
              accumsan. Cras eget neque vehicula, scelerisque nulla ac,
              tincidunt magna. Praesent nec enim a urna congue fermentum. Fusce
              consectetur luctus dapibus. Aliquam vel mattis nisl. Sed tincidunt
              dignissim velit quis ultricies. Curabitur efficitur aliquet felis
              nec lacinia. Integer pellentesque mi magna, eget pretium purus
              placerat vel. Phasellus in porttitor leo.
            </li>
            <li>
              Aliquam aliquet pretium libero vel lacinia. Suspendisse at eros et
              turpis pharetra hendrerit nec volutpat neque. Cras imperdiet
              tellus et ex aliquam vestibulum. Maecenas lobortis, risus sed
              faucibus mattis, sapien ligula sagittis mauris, in fringilla justo
              justo vehicula massa. Phasellus eget justo ac nisl iaculis
              vehicula. Donec a elit dapibus, scelerisque sapien vestibulum,
              vestibulum turpis. Vivamus semper tortor dolor, et tincidunt
              lectus luctus eu. In hac habitasse platea dictumst. Pellentesque
              lobortis lectus vitae sagittis vehicula. Vestibulum vel bibendum
              ante, ac dapibus leo. Quisque at leo sem. Suspendisse commodo
              dolor eu feugiat condimentum. Nulla facilisi. Donec pulvinar felis
              ut nibh tincidunt, vitae aliquet dolor porttitor. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas.
            </li>
            <li>
              Quisque sodales in arcu nec volutpat. Praesent non aliquam risus.
              Aenean at orci aliquet purus dapibus luctus non in ex. Nunc ac
              ipsum massa. Vivamus ullamcorper risus felis, id pulvinar justo
              hendrerit sit amet. Donec eget tincidunt nisi. Aenean id purus
              dictum magna venenatis laoreet. In et accumsan nibh. Quisque enim
              augue, convallis ut eleifend cursus, viverra sit amet tortor.
              Maecenas congue placerat nulla. Etiam non semper velit. Phasellus
              condimentum, enim rutrum vulputate laoreet, magna turpis
              scelerisque nisi, sed venenatis dui sem ut tellus. Praesent varius
              pellentesque dolor, quis tincidunt lorem elementum at.
              Pellentesque vel magna sit amet odio sollicitudin tincidunt in eu
              neque. Mauris facilisis vitae eros ut volutpat.
            </li>
          </OList>
          <UList>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              luctus placerat tempor. Etiam hendrerit pretium velit quis
              accumsan. Cras eget neque vehicula, scelerisque nulla ac,
              tincidunt magna. Praesent nec enim a urna congue fermentum. Fusce
              consectetur luctus dapibus. Aliquam vel mattis nisl. Sed tincidunt
              dignissim velit quis ultricies. Curabitur efficitur aliquet felis
              nec lacinia. Integer pellentesque mi magna, eget pretium purus
              placerat vel. Phasellus in porttitor leo.
            </li>
            <li>
              Aliquam aliquet pretium libero vel lacinia. Suspendisse at eros et
              turpis pharetra hendrerit nec volutpat neque. Cras imperdiet
              tellus et ex aliquam vestibulum. Maecenas lobortis, risus sed
              faucibus mattis, sapien ligula sagittis mauris, in fringilla justo
              justo vehicula massa. Phasellus eget justo ac nisl iaculis
              vehicula. Donec a elit dapibus, scelerisque sapien vestibulum,
              vestibulum turpis. Vivamus semper tortor dolor, et tincidunt
              lectus luctus eu. In hac habitasse platea dictumst. Pellentesque
              lobortis lectus vitae sagittis vehicula. Vestibulum vel bibendum
              ante, ac dapibus leo. Quisque at leo sem. Suspendisse commodo
              dolor eu feugiat condimentum. Nulla facilisi. Donec pulvinar felis
              ut nibh tincidunt, vitae aliquet dolor porttitor. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas.
            </li>
            <li>
              Quisque sodales in arcu nec volutpat. Praesent non aliquam risus.
              Aenean at orci aliquet purus dapibus luctus non in ex. Nunc ac
              ipsum massa. Vivamus ullamcorper risus felis, id pulvinar justo
              hendrerit sit amet. Donec eget tincidunt nisi. Aenean id purus
              dictum magna venenatis laoreet. In et accumsan nibh. Quisque enim
              augue, convallis ut eleifend cursus, viverra sit amet tortor.
              Maecenas congue placerat nulla. Etiam non semper velit. Phasellus
              condimentum, enim rutrum vulputate laoreet, magna turpis
              scelerisque nisi, sed venenatis dui sem ut tellus. Praesent varius
              pellentesque dolor, quis tincidunt lorem elementum at.
              Pellentesque vel magna sit amet odio sollicitudin tincidunt in eu
              neque. Mauris facilisis vitae eros ut volutpat.
            </li>
          </UList>
        </div>
        <div className='flex-none bg-gray-200 p-8 md:w-1/3'>
          <Accordion
            id='faq-1'
            question='Ut facilisis nisi lectus, ac ullamcorper massa consectetur ut'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus
            placerat tempor. Etiam hendrerit pretium velit quis accumsan. Cras
            eget neque vehicula, scelerisque nulla ac, tincidunt magna. Praesent
            nec enim a urna congue fermentum. Fusce consectetur luctus dapibus.
            Aliquam vel mattis nisl. Sed tincidunt dignissim velit quis
            ultricies. Curabitur efficitur aliquet felis nec lacinia. Integer
            pellentesque mi magna, eget pretium purus placerat vel. Phasellus in
            porttitor leo.
          </Accordion>
          <Accordion
            id='faq-2'
            question='Phasellus maximus eget neque vel bibendum'
          >
            Aliquam aliquet pretium libero vel lacinia. Suspendisse at eros et
            turpis pharetra hendrerit nec volutpat neque. Cras imperdiet tellus
            et ex aliquam vestibulum. Maecenas lobortis, risus sed faucibus
            mattis, sapien ligula sagittis mauris, in fringilla justo justo
            vehicula massa. Phasellus eget justo ac nisl iaculis vehicula. Donec
            a elit dapibus, scelerisque sapien vestibulum, vestibulum turpis.
            Vivamus semper tortor dolor, et tincidunt lectus luctus eu. In hac
            habitasse platea dictumst. Pellentesque lobortis lectus vitae
            sagittis vehicula. Vestibulum vel bibendum ante, ac dapibus leo.
            Quisque at leo sem. Suspendisse commodo dolor eu feugiat
            condimentum. Nulla facilisi. Donec pulvinar felis ut nibh tincidunt,
            vitae aliquet dolor porttitor. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas.
          </Accordion>
          <Accordion
            id='faq-3'
            question='Cras imperdiet enim neque, ac hendrerit lacus maximus non'
          >
            Quisque sodales in arcu nec volutpat. Praesent non aliquam risus.
            Aenean at orci aliquet purus dapibus luctus non in ex. Nunc ac ipsum
            massa. Vivamus ullamcorper risus felis, id pulvinar justo hendrerit
            sit amet. Donec eget tincidunt nisi. Aenean id purus dictum magna
            venenatis laoreet. In et accumsan nibh. Quisque enim augue,
            convallis ut eleifend cursus, viverra sit amet tortor. Maecenas
            congue placerat nulla. Etiam non semper velit. Phasellus
            condimentum, enim rutrum vulputate laoreet, magna turpis scelerisque
            nisi, sed venenatis dui sem ut tellus. Praesent varius pellentesque
            dolor, quis tincidunt lorem elementum at. Pellentesque vel magna sit
            amet odio sollicitudin tincidunt in eu neque. Mauris facilisis vitae
            eros ut volutpat.
          </Accordion>
        </div>
      </div>
    </Section>
  </Page>
);
