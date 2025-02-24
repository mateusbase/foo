type MenuContent = {
  [key: number]: {
    title: string;
    paragraphs: string[];
    secondParagraph?: string;
    icons?: string[];
  };
};

export const menuContent: MenuContent = {
  7: {
    title: "",
    paragraphs: [
      `Oncoclínicas&Co é o maior grupo dedicado ao tratamento do câncer na América Latina, com um modelo especializado e inovador focado em toda a jornada do tratamento oncológico, aliando eficiência operacional, atendimento humanizado e especialização por meio de um corpo clínico composto por mais de 2.700 médicos especialistas com ênfase em oncologia. Com a missão de democratizar o tratamento oncológico, oferece um sistema completo que integra clínicas ambulatoriais a cancer centers de alta complexidade. Conta com 145 unidades em 39 cidades brasileiras, permitindo acesso de qualidade em todas as regiões que atua, alinhados aos padrões dos melhores centros de referência mundiais no tratamento do câncer.`,
      `Com foco em tecnologia, medicina de precisão e genômica, a Oncoclínicas realizou aproximadamente 635 mil tratamentos em 2023. É parceira exclusiva no Brasil do Dana-Farber Cancer Institute, afiliado à Faculdade de Medicina de Harvard, um dos principais centros de pesquisa e tratamento de câncer no mundo. Possui a Boston Lighthouse Innovation, especializada em bioinformática, em Cambridge, Estados Unidos, e participação na MedSir, dedicada ao desenvolvimento e gestão de ensaios clínicos para pesquisas independentes sobre o câncer, em Barcelona, Espanha. Recentemente, expandiu sua atuação para a Arábia Saudita por meio de uma joint venture com o Grupo Al Faisaliah, levando a missão de vencer o câncer para um novo continente e proporcionando cuidados oncológicos em escala global, ao combinar a hiperespecialização oncológica com abordagens inovadoras de tratamento.`,
      `A laserterapia é usada para eliminar ou ao menos aliviar essas manifestações e, consequentemente, melhorar a qualidade de vida do paciente.`,
      `A companhia integra a carteira do IDIVERSA, índice lançado pela B3, destacando empresas comprometidas com diversidade de gênero e raça.`,
    ],
  },
};
