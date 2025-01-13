import Divider from "./divider";
import Container from "./layout/container";
import Topics from "./topics";

const topics = [
  {
    title: "1. Compromissos da Protmundi com os internautas e usuários do site",
    content: `
        • Não divulgar sem prévia autorização, em hipótese alguma, o e-mail do internauta que se cadastrar em páginas que requerem preenchimento de dados pessoais.
        • Com exceção de empresas parceiras, não revelar sem prévia autorização o e-mail do internauta a terceiros.
        • Não enviar mensagens ao correio eletrônico do internauta caso ele tenha solicitado exclusão de nossa base.
        • Possibilitar ao internauta o cancelamento, a qualquer momento, do envio de material informativo por e-mail solicitado anteriormente.
      `,
  },
  {
    title: "2. Cookies",
    content: `
        A Protmundi utiliza, em seus sites e serviços on-line, um recurso do seu navegador chamado cookie. Cookies são pequenos arquivos no formato texto que ficam gravados na sua máquina. A utilização desses arquivos é muito comum hoje em dia e nos dá uma grande flexibilidade na disposição das informações exibidas. Esses arquivos nos permitem gravar alguns dados importantes, como o número de vezes que você acessou o site, para que mais tarde possamos não exibir um conteúdo repetido, por exemplo. Se você não quiser utilizar os benefícios dos cookies, a maioria dos navegadores permite bloquear o recebimento deles.
        
        Com base nas atuais legislações de proteção de dados (GDPR e LGDP), a aceitação desta Política faculta à Protmundi a utilização de cookies para identificar o comportamento dos usuários no ambiente do website.
        
        A Protmundi não coleta informações que podem rastrear dados pessoais de indivíduos, nem detém informações que possam ferir direitos individuais.
        
        Os dados pessoais recolhidos pela Protmundi recebem tratamento automatizado, passando a integrar a base de dados do site e sistemas on-line, gerando estatísticas e informações destinadas a proporcionar aos nossos usuários facilidades de navegação, ampliação e melhoria dos conteúdos e serviços oferecidos.
        
        Você pode desativar cookies a qualquer momento ou cancelar a inscrição para receber nossos e-mails promocionais. Porém, ao desativar essas tecnologias, talvez você não consiga usar e aproveitar todos os recursos que oferecemos.
        
        O procedimento para desativar é diferente para cada navegador e você precisará fazer isso em cada um dos que utiliza: Google Chrome, Mozilla Firefox, Safari, Internet Explorer, Microsoft Edge e Opera.
      `,
  },
  {
    title: "3. Formulários e pesquisas",
    content: `
        A Protmundi reserva-se o direito de veicular em seu site qualquer tipo de formulário e/ou pesquisa de opinião. Todos os dados considerados confidenciais que são colhidos dessa forma são de uso exclusivo da Protmundi e não serão distribuídos para eventuais publicidades, a menos que o usuário autorize a iniciativa. Algumas pesquisas automáticas por voto poderão ser publicadas on-line para que o usuário possa ver os resultados imediatamente.
        
        As formas pelas quais a Protmundi pode usar e/ou compartilhar determinadas informações pessoais dos usuários estão descritas abaixo.
      `,
  },
  {
    title: "Uso das informações pela Protmundi",
    content: `
        A Protmundi coleta dados sobre você que são limitados ao tipo de informação que pode ser encontrado em um cartão de visita típico: nome, sobrenome, cargo, nome do empregador/empresa, endereço comercial, e-mail do trabalho e número de telefone comercial. Em alguns casos, podemos solicitar informações profissionais adicionais, como o tamanho da empresa em que você trabalha e o tipo de indústria.
        
        Para melhorar e/ou atualizar as informações que você nos forneceu, podemos combiná-las com informações profissionais ou dados pessoais que coletamos de fontes de terceiros. Os dados pessoais a que nos referimos neste documento são as informações pessoais e profissionais que você fornece, bem como as informações obtidas de fontes de terceiros, as quais normalmente combinamos com um registro de usuário.
        
        Endereços postais: endereços postais e outras informações sobre os usuários e seus dados são utilizados para promover produtos e serviços da Protmundi.
        
        Números de telefone: os números de telefone dos assinantes da Protmundi são utilizados para coletar dados de requalificação e podem ser utilizados para fins promocionais.
        
        Endereços de e-mail: os endereços de email de assinantes da Protmundi são utilizados para fins de requalificação. Estes endereços de e-mail também podem ser usados para coletar informações adicionais por membros da equipe editorial ou equipe de marketing da Protmundi para promover os produtos e serviços da empresa. Quando o usuário fornece seu endereço de e-mail para a Protmundi, concorda em receber e-mails da marca e das empresas que utilizam seus serviços on-line.
      `,
  },
  {
    title: "4. Conteúdo de terceiros",
    content: `
        A Protmundi pode disponibilizar conteúdo e materiais fornecidos por terceiros, como tabelas, desenhos técnicos e outros formatos. Para que o usuário tenha acesso a este conteúdo de clientes, podemos pedir para que ele forneça, por meio de um formulário, informações de identificação pessoal (nome, e-mail, telefone) e demais dados, como cargo, empresa, área de atuação e dados demográficos da empresa. Depois de ter preenchido o formulário com seus dados, o usuário terá acesso completo ao conteúdo escolhido.
        
        Ao acessar o conteúdo disponibilizado por um terceiro contratante da Protmundi, as informações fornecidas pelos usuários poderão ser compartilhadas com esses terceiros e serão regidas pelas políticas de privacidade destes terceiros, bem como desta Política. A Protmundi não assume qualquer responsabilidade pelas ações ou políticas de tais terceiros.
      `,
  },
  {
    title: "5. Como protegemos seus dados pessoais",
    content: `
        A Protmundi possui proteções que incluem medidas de segurança técnicas e organizacionais para resguardar seus dados pessoais contra eventuais perdas, usos indevidos, usos não autorizados, acessos, divulgações inadvertidas, alterações e destruição de dados, e exigimos dos terceiros que contratamos apoio nas operações comerciais da Protmundi, para que estes também empreguem medidas de segurança.
        
        Atualizamos e testamos a segurança continuamente e restringimos o acesso aos seus dados pessoais somente àqueles que precisam acessá-los, com o fim de fornecer produtos, conteúdos ou serviços da Protmundi para você.
      `,
  },
  {
    title: "6. Armazenamento de seus dados pessoais",
    content: `
        Podemos armazenar seus dados pessoais por meio dos servidores seguros da própria Protmundi ou outra tecnologia hospedada internamente. Seus dados pessoais também podem ser armazenados por terceiros, por meio de serviços em nuvem ou outras tecnologias contratadas pela Protmundi.
        
        Esses terceiros não usam ou possuem acesso aos seus dados pessoais além do armazenamento em nuvem e recuperação, e a Protmundi exige que essas partes empreguem, minimamente, o mesmo nível de segurança que usamos para proteger seus dados pessoais.
      `,
  },
  {
    title: "7. A base legal que temos para processar seus dados pessoais",
    content: `
        As atuais legislações de proteção de dados (GDPR e LGDP) exigem que os coletores de dados, como a Protmundi, tenham uma base legal para usar os dados pessoais de seus usuários.
        
        A Protmundi usa os dados pessoais que você disponibiliza com vistas a fornecer a você produtos, conteúdos e serviços de alta qualidade, conforme solicitado, a enviar avisos importantes e para fins internos, como auditoria, análise de dados e pesquisa, no intuito de fornecer as informações necessárias a fim de que se tomem as decisões de compra de tecnologia com base em mais dados.
        
        Também podemos usar seus dados pessoais para oferecer produtos, conteúdos ou serviços que possam interessar a você, com base em seus interesses ou nas preferências compartilhadas conosco, e para compartilhar seus dados pessoais com terceiros patrocinadores de conteúdos, eventos e outros serviços ou ofertas.
        
        A base legal para o processamento de seus dados pessoais é o seu consentimento. Em determinadas circunstâncias, caso a Protmundi tenha interesse legítimo em fazê-lo e não esteja infringindo nenhum de seus direitos e liberdades
    A base legal para o processamento de seus dados pessoais é o seu consentimento. Em determinadas circunstâncias, caso a Protmundi tenha interesse legítimo em fazê-lo e não esteja infringindo nenhum de seus direitos e liberdades, podemos processar seus dados pessoais.
      
      Quando a Protmundi processar seus dados pessoais — para os interesses legítimos dela —, ela irá considerar e equilibrar qualquer impacto potencial sobre você e seus direitos, sob a proteção de dados e qualquer outra lei relevante. Nossos interesses comerciais legítimos não substituem seus interesses. Portanto, a Protmundi não usará seus dados pessoais em circunstâncias em que seus direitos e liberdades sejam anulados por nossos interesses legítimos, a menos que tenhamos seu consentimento ou seja exigido ou permitido por lei.
    `,
  },
  {
    title: "8. Ligações para outros sites",
    content: `
      O site da Protmundi possui ligações para outros sites, os quais, a nosso ver, podem conter informações/ferramentas úteis para os nossos visitantes.
      
      Nossa Política de Privacidade não é aplicada a sites de terceiros, por isso, caso visite outro site a partir do nosso, você deve ler a política de privacidade dele. Não nos responsabilizamos pela política de privacidade ou conteúdo presente nesses mesmos sites.
    `,
  },
  {
    title: "9. Direitos do usuário",
    content: `
      Você tem o direito de, a qualquer momento, solicitar a confirmação sobre o tratamento dos seus dados pessoais; acesso aos seus dados pessoais; correções de dados incompletos, incorretos ou desatualizados; anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a legislação vigente; portabilidade dos seus dados pessoais para outro prestador de serviços, desde que isso não comprometa nossos segredos industriais e comerciais; eliminação dos dados pessoais tratados com seu consentimento, conforme permitido por lei; informações sobre as entidades com as quais seus dados pessoais foram compartilhados; informações sobre a possibilidade de não fornecer consentimento e as consequências da negativa; e a revogação do consentimento.
      
      Sua solicitação será tratada com o máximo cuidado para garantir a eficácia dos seus direitos. No entanto, esteja ciente de que, em certos casos, devido a requisitos legais, seu pedido pode não ser atendido imediatamente, e pode haver situações em que não poderemos cumpri-lo devido ao cumprimento de obrigações legais.
    `,
  },
  {
    title: "10. Alterações na política de privacidade",
    content: `
      Se fizermos alterações na forma como tratamos seus dados, notificaremos você pelos canais habituais, como e-mail ou mensagens através dos aplicativos nas nossas plataformas. Nos casos em que precisamos da sua aprovação, vamos notificá-lo por estes meios para que você possa decidir se concorda ou não.
    `,
  },
];

const text = `
A Protmundi criou esta Política de Privacidade com o objetivo de demonstrar o permanente compromisso com a segurança do conteúdo fornecido e das informações disponíveis em nosso site.

Todas as suas informações pessoais recolhidas serão usadas para ajudar a tornar a sua visita em nosso site o mais produtiva e agradável possível.

A garantia da confidencialidade dos dados pessoais dos utilizadores do nosso site é importante para a Protmundi, seus domínios e subdomínios.

Todas as informações pessoais relativas a clientes ou visitantes que usem o site serão tratadas em concordância com a Lei n°12.965, de 26 de abril de 2014 e com a Lei n° 13.709, de 14 de agosto de 2018.

A informação pessoal recolhida pode incluir o seu nome, e-mail, cargo, número de telefone, endereço, data de nascimento e/ou outros.

É importante ressaltar que este site e os eventos e publicações da Portmundi fornecem produtos, conteúdos e serviços para um público profissional e de consumidores e não se destinam a indivíduos menores de 13 anos de idade. Nós não coletamos ou armazenamos intencionalmente dados pessoais fornecidos por menores de 13 anos de idade.
`;

export default function PrivacyTerms() {
  return (
    <div className="bg-white py-24 pb-96 flex flex-col gap-12 w-full">
      <Container>
        <div className="flex flex-col gap-2">
          <h1 className="font-[600] text-[32px] text-primary">
            Política de Privacidade
          </h1>

          <div>
            {text.split("\n").map((paragraph, index) => (
              <p key={index} className="pt-4 text-[15px]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div>
          <Topics topics={topics} />
          <Divider className="my-4" />
          Última atualização: 21 de junho de 2024.
        </div>
      </Container>
    </div>
  );
}
