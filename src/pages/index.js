import Accordion from '#src/components/accordion.js';
import Btn from '#src/components/btn.js';
import Page from '#src/components/page.js';
import Section from '#src/components/section.js';
import Heading4 from '#src/components/typography/heading-four.js';
import Heading1 from '#src/components/typography/heading-one.js';
import Heading3 from '#src/components/typography/heading-three.js';
import Heading2 from '#src/components/typography/heading-two.js';
import OList from '#src/components/typography/ordered-list.js';
import UList from '#src/components/typography/unordered-list.js';

export default () => (
  <Page title="The Builder's Choice">
    <div className='bg-white bg-linear-to-t from-tbcOrange to-tbcYellow'>
      <Section
        customClasses="bg-[url('/images/abstract-boxes-bg.svg')] bg-no-repeat bg-contain bg-right"
        size='none'
      >
        <div className='md:flex md:items-center gap-4 lg:gap-8'>
          <div>
            <h1 className='text-tbcBlueMed mt-8 mb-4 text-sm font-bold uppercase tracking-wide'>
              Superheader Here
            </h1>
            <h2 className='text-tbcBlueDark font-display font-medium tracking-tight text-5xl md:text-6xl mb-4'>
              Get the Builder&apos;s Choice
            </h2>
            <p className='text-tbcLicorice leading-relaxed mb-4 font-light pr-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
              quam condimentum, blandit nulla non, tristique lorem. Ut interdum,
              orci non cursus consectetur, dolor mi porttitor ante, et tincidunt
              lorem mauris eu enim. Vestibulum libero nulla, venenatis nec neque
              in, gravida ultrices enim.
            </p>
            <Btn
              text='Purchase Book'
              url='/request-a-demo'
              customClasses='inline-flex mb-8'
              size='sm'
              btnColor='blue'
            />
          </div>
          <div className='flex-none max-w-[600px]'>
            <img src='/images/book-hdr.webp' alt='' />
          </div>
        </div>
      </Section>
    </div>
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
