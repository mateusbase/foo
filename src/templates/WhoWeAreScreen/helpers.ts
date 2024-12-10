type MenuContent = {
  [key: number]: {
    title: string;
    paragraphs: string[];
    secondParagraph?: string;
    icons?: string[];
  };
};

export const menuContent: MenuContent = {
  1: {
    title:
      "A Oncoclínicas&Co é um dos maiores grupos de oncologia, hematologia e radioterapia da América Latina.",
    paragraphs: [
      `Oncoclínicas&Co é o maior grupo dedicado ao tratamento do câncer na América Latina, com um modelo especializado e inovador focado em toda a jornada do tratamento oncológico, aliando eficiência operacional, atendimento humanizado e especialização por meio de um corpo clínico composto por mais de 2.700 médicos especialistas com ênfase em oncologia. Com a missão de democratizar o tratamento oncológico, oferece um sistema completo que integra clínicas ambulatoriais a cancer centers de alta complexidade. Conta com 145 unidades em 39 cidades brasileiras, permitindo acesso de qualidade em todas as regiões que atua, alinhados aos padrões dos melhores centros de referência mundiais no tratamento do câncer.`,
      `Com foco em tecnologia, medicina de precisão e genômica, a Oncoclínicas realizou aproximadamente 635 mil tratamentos em 2023. É parceira exclusiva no Brasil do Dana-Farber Cancer Institute, afiliado à Faculdade de Medicina de Harvard, um dos principais centros de pesquisa e tratamento de câncer no mundo. Possui a Boston Lighthouse Innovation, especializada em bioinformática, em Cambridge, Estados Unidos, e participação na MedSir, dedicada ao desenvolvimento e gestão de ensaios clínicos para pesquisas independentes sobre o câncer, em Barcelona, Espanha. Recentemente, expandiu sua atuação para a Arábia Saudita por meio de uma joint venture com o Grupo Al Faisaliah, levando a missão de vencer o câncer para um novo continente e proporcionando cuidados oncológicos em escala global, ao combinar a hiperespecialização oncológica com abordagens inovadoras de tratamento.`,
      `A laserterapia é usada para eliminar ou ao menos aliviar essas manifestações e, consequentemente, melhorar a qualidade de vida do paciente.`,
      `A companhia integra a carteira do IDIVERSA, índice lançado pela B3, destacando empresas comprometidas com diversidade de gênero e raça.`,
    ],
  },
  2: {
    title: "Franquias Oncoclínicas",
    paragraphs: [
      `A Oncoclínicas possui uma ampla rede de franquias, que proporciona aos pacientes o mesmo nível de atendimento de qualidade em diferentes regiões do Brasil.`,
      `Cada franquia é equipada com infraestrutura de ponta e oferece um ambiente acolhedor para pacientes e familiares.`,
    ],
  },
  3: {
    title: "Propósito",
    paragraphs: [
      `O propósito da Oncoclínicas é proporcionar um tratamento de excelência para o paciente, com foco na cura e no bem-estar, utilizando as mais avançadas tecnologias e práticas médicas.`,
      `O foco da instituição é oferecer tratamento humanizado, com atenção individualizada às necessidades dos pacientes e seus familiares durante toda a jornada do tratamento oncológico.`,
    ],
  },
  4: {
    title: "Parcerias",
    paragraphs: [
      `A Oncoclínicas mantém parcerias estratégicas com algumas das principais instituições de pesquisa e tratamento oncológico do mundo, como o Dana-Farber Cancer Institute, afiliado à Harvard.`,
      `Essas parcerias permitem que a Oncoclínicas esteja na vanguarda dos tratamentos mais inovadores para o câncer, trazendo novas tecnologias e protocolos para o Brasil.`,
    ],
  },
  5: {
    title: "Convênios",
    paragraphs: [
      `A Oncoclínicas oferece atendimento através de diversos convênios médicos, garantindo que o maior número de pacientes tenha acesso ao tratamento de alta qualidade oferecido pelo grupo.`,
      `Entre os convênios aceitos estão as principais operadoras de saúde do Brasil, oferecendo ampla cobertura para diversos tipos de tratamento oncológico.`,
    ],
  },
  6: {
    title: "Qualidade/Certificações",
    paragraphs: [
      `A Oncoclínicas segue padrões rigorosos de qualidade e segurança, contando com certificações de órgãos nacionais e internacionais que garantem a excelência no atendimento.`,
      `Os processos são continuamente revisados e atualizados para garantir que o paciente receba o melhor cuidado, com foco na segurança e nos melhores resultados clínicos.`,
    ],
    icons: [
      "https://www.onconews.com.br/site/images/artigos/2019/asco-qopi_bx.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlk6_3Kw69_KXzUx0U18ou-j2gBb5x6unC5g&s",
      "https://www.ona.org.br/img/ona_og.png",
      "https://estruturadinamica.com.br/wp-content/uploads/2023/03/Logo_Metodologia_Horiz_central.png",
      "https://www.promedica.com.br/wp-content/uploads/2020/01/SeloPALC_cmyk.jpg",
      "https://www.revistasaudenews.com.br/fotos/p_20210916_162400_94.jpg",
    ],
    secondParagraph:
      "Nosso Sistema de Gestão de Qualidade e Segurança do Paciente tem como objetivo Implementar e oferecer serviços e processos com alta qualidade, seguros, baseados em evidência científica e centrado no paciente.Promover uma cultura de excelência em todos os níveis da organização, incentivando a colaboração, a inovação e o aprendizado contínuo, onde cada membro da equipe é responsável por contribuir para a qualidade dos cuidados prestados, com foco na segurança do paciente, na eficácia dos tratamentos e na experiência do paciente.",
  },
  7: {
    title: "Segurança",
    paragraphs: [
      `A segurança do paciente é prioridade máxima na Oncoclínicas, que adota as mais rigorosas normas de segurança em todos os seus processos clínicos e administrativos.`,
      `Todas as unidades são equipadas com tecnologia de ponta para garantir que o ambiente de atendimento seja seguro e eficiente.`,
    ],
  },
  8: {
    title: "Compliance",
    paragraphs: [
      `O programa de compliance da Oncoclínicas é robusto, garantindo que todas as práticas da empresa estejam alinhadas com as leis e regulamentos do setor de saúde, tanto nacional quanto internacional.`,
      `O grupo mantém um compromisso com a ética, a integridade e a transparência em todas as suas operações, assegurando que as atividades da Oncoclínicas estejam em conformidade com as melhores práticas de mercado.`,
    ],
  },
  9: {
    title: "Carreiras",
    paragraphs: [
      `A Oncoclínicas valoriza seus profissionais e oferece diversas oportunidades de carreira em várias áreas de atuação, sempre buscando o desenvolvimento contínuo e a excelência.`,
      `O grupo promove um ambiente de trabalho colaborativo, com foco no desenvolvimento profissional e pessoal de seus colaboradores, além de oferecer programas de formação e capacitação.`,
    ],
  },
};
