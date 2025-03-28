export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
}

export interface GlossaryLetter {
  id: number;
  letter: string;
  terms: GlossaryTerm[];
}

export const glossaryData: GlossaryLetter[] = [
  {
    id: 1,
    letter: "A",
    terms: [
      {
        id: "A1",
        term: "Adenocarcinoma",
        definition: `A adenocarcinoma é o tipo mais comum de câncer em adultos, origina-se nas glândulas presentes nos tecidos de revestimento do organismo, este tumor maligno é encontrado no corpo presentes nos tecidos de revestimento do organismo.
          \nAlguns exemplos de localização dos adenocarcinomas são o trato gastrintestinal, a região da cabeça e pescoço, o trato respiratório, a próstata e a mama.
          \nQuais são os sintomas do adenocarcinoma?
          \nOs sintomas podem variar conforme seus subtipos, podendo incluir:
          \n• Perda de peso repentina
          \n• Dificuldade para engolir
          \n• Constipação
          \n• Falta de ar
          \n• Dores no peito
          \nComo é realizado o tratamento para o adenocarcinoma?
          \nO tratamento e o prognóstico variam dependendo do órgão afetado e do estágio do câncer, considerando a origem do tumor, o órgão afetado e o estágio da doença, tal como o adenocarcinoma de mama.
          \nOs tratamentos podem envolver cirurgia, radioterapia, terapia alvo ou quimioterapia, lembrando que cada caso é específico.`,
      },
      {
        id: "A2",
        term: "Adenomegalia",
        definition: "Aumento dos gânglios linfáticos.",
      },
      {
        id: "A3",
        term: "Adjuvante",
        definition: "Tratamento complementar que potencializa o principal.",
      },
      {
        id: "A4",
        term: "Alopecia",
        definition:
          "Perda de cabelo ou pelos, frequentemente causada por quimioterapia ou radioterapia.",
      },
      {
        id: "A5",
        term: "Anamnese",
        definition: "Histórico e coleta de informações de saúde do paciente.",
      },
      {
        id: "A6",
        term: "Anaplasia",
        definition: "Perda de diferenciação celular em um tecido.",
      },
      {
        id: "A7",
        term: "Anemia",
        definition:
          "Condição caracterizada pela redução dos glóbulos vermelhos ou da hemoglobina no sangue, causando fadiga e fraqueza.",
      },
      {
        id: "A8",
        term: "Angiogênese",
        definition: "Formação de novos vasos sanguíneos.",
      },
      {
        id: "A9",
        term: "Anticorpo",
        definition:
          "Proteína produzida pelo sistema imunológico para combater antígenos.",
      },
      {
        id: "A10",
        term: "Antígeno",
        definition:
          "Substância reconhecida pelo sistema imunológico, desencadeando resposta.",
      },
      {
        id: "A11",
        term: "Apoptose",
        definition: "Morte celular programada.",
      },
    ],
  },
  {
    id: 2,
    letter: "B",
    terms: [
      {
        id: "B1",
        term: "Bastonetes",
        definition:
          "Células fotorreceptoras na retina, responsáveis pela visão em baixa luminosidade.",
      },
      {
        id: "B2",
        term: "Beta-2-Microglobulina",
        definition:
          "Proteína encontrada na superfície de muitas células, importante em algumas doenças renais e neoplásicas.",
      },
      {
        id: "B3",
        term: "Beta-HCG",
        definition:
          "Hormônio produzido na gravidez, também usado como marcador tumoral.",
      },
      {
        id: "B4",
        term: "Bilirrubina",
        definition:
          "Pigmento resultante da quebra da hemoglobina, excretado pelo fígado.",
      },
      {
        id: "B5",
        term: "Biópsia",
        definition:
          "Procedimento médico em que um pequeno pedaço de tecido é removido para análise em laboratório.",
      },
      {
        id: "B6",
        term: "Bisfosfonato",
        definition:
          "Classe de medicamentos usados para tratar osteoporose e metástases ósseas.",
      },
      {
        id: "B7",
        term: "Braquiterapia",
        definition:
          "Técnica de radioterapia em que a fonte de radiação é colocada próxima ou dentro do tumor.",
      },
    ],
  },
  {
    id: 3,
    letter: "C",
    terms: [
      {
        id: "C1",
        term: "CA 15-3",
        definition:
          "Marcador tumoral relacionado principalmente ao câncer de mama.",
      },
      {
        id: "C2",
        term: "CA 19-9",
        definition:
          "Marcador tumoral associado ao câncer de pâncreas e vias biliares.",
      },
      {
        id: "C3",
        term: "Carcinogênico",
        definition: "Capaz de causar ou promover o desenvolvimento de câncer.",
      },
      {
        id: "C4",
        term: "Carcinoma",
        definition:
          "Um tipo de câncer que começa nas células epiteliais que revestem a pele ou tecidos internos.",
      },
      {
        id: "C5",
        term: "Cerebelo",
        definition: "Parte do cérebro responsável pela coordenação motora.",
      },
      {
        id: "C6",
        term: "Cérebro",
        definition:
          "Órgão central do sistema nervoso responsável por funções cognitivas e motoras.",
      },
      {
        id: "C7",
        term: "Ciclo de Tratamento",
        definition:
          "Conjunto de sessões terapêuticas (por exemplo, quimioterapia) organizadas em ciclos.",
      },
      {
        id: "C8",
        term: "Cintilografia",
        definition:
          "Exame de imagem que usa isótopos radioativos para avaliar órgãos e tecidos.",
      },
      {
        id: "C9",
        term: "Citogenética",
        definition:
          "Estudo dos cromossomos e da hereditariedade a nível celular.",
      },
      {
        id: "C10",
        term: "Creatinina",
        definition: "Substância avaliada para verificar a função renal.",
      },
      {
        id: "C11",
        term: "Cromossomo",
        definition: "Estrutura que contém o material genético da célula (DNA).",
      },
      {
        id: "C12",
        term: "Cuidados Paliativos",
        definition:
          "Abordagem para melhorar a qualidade de vida de pacientes com doenças graves.",
      },
    ],
  },
  {
    id: 4,
    letter: "D",
    terms: [
      {
        id: "D1",
        term: "Dacriocistite",
        definition: "Inflamação do saco lacrimal.",
      },
      {
        id: "D2",
        term: "Dactilite",
        definition: "Inflamação nos dedos das mãos ou dos pés.",
      },
      {
        id: "D3",
        term: "Dengue",
        definition: "Doença viral transmitida pelo mosquito Aedes aegypti.",
      },
      {
        id: "D4",
        term: "Dermatite",
        definition: "Inflamação da pele.",
      },
      {
        id: "D5",
        term: "Diabetes",
        definition: "Doença caracterizada pela hiperglicemia persistente.",
      },
      {
        id: "D6",
        term: "Diagnóstico",
        definition:
          "Processo de identificação de uma doença ou condição com base em sinais, sintomas e exames.",
      },
      {
        id: "D7",
        term: "Displasia",
        definition:
          "Alteração celular que pode ser precursora de lesões malignas.",
      },
    ],
  },
  {
    id: 5,
    letter: "E",
    terms: [
      {
        id: "E1",
        term: "Ecocardiograma",
        definition:
          "Exame que utiliza ondas de ultrassom para criar imagens do coração e avaliar sua função.",
      },
      {
        id: "E2",
        term: "Eclâmpsia",
        definition:
          "Complicação grave da gravidez, caracterizada por convulsões em mulheres com pré-eclâmpsia.",
      },
      {
        id: "E3",
        term: "Edema",
        definition: "Acúmulo de líquido nos tecidos, causando inchaço.",
      },
      {
        id: "E4",
        term: "Eletrocardiograma",
        definition: "Exame que registra a atividade elétrica do coração.",
      },
      {
        id: "E5",
        term: "Embolia",
        definition:
          "Bloqueio de um vaso sanguíneo por um êmbolo (como coágulo ou gordura).",
      },
      {
        id: "E6",
        term: "Endoscopia",
        definition:
          "Exame que permite visualizar órgãos internos através de um aparelho com câmera.",
      },
      {
        id: "E7",
        term: "Enfisema",
        definition:
          "Doença pulmonar caracterizada pela destruição dos alvéolos e dificuldade de respirar.",
      },
    ],
  },
  {
    id: 6,
    letter: "F",
    terms: [
      {
        id: "F1",
        term: "Faringite",
        definition:
          "Inflamação da faringe, geralmente causada por infecções virais ou bacterianas, resultando em dor de garganta.",
      },
      {
        id: "F2",
        term: "Febre",
        definition: "Elevação da temperatura corporal acima do normal.",
      },
      {
        id: "F3",
        term: "Fibrose",
        definition:
          "Aumento do tecido conjuntivo fibrótico em um órgão ou tecido.",
      },
      {
        id: "F4",
        term: "Fisioterapia",
        definition:
          "Terapia física para reabilitação e melhora das funções motoras.",
      },
      {
        id: "F5",
        term: "Fístula",
        definition: "Conexão anormal entre duas estruturas do corpo.",
      },
      {
        id: "F6",
        term: "Fratura",
        definition: "Ruptura ou quebra de um osso.",
      },
      {
        id: "F7",
        term: "Fungicida",
        definition: "Substância que mata fungos ou inibe seu crescimento.",
      },
    ],
  },
  {
    id: 7,
    letter: "G",
    terms: [
      {
        id: "G1",
        term: "Gânglio Linfático",
        definition:
          "Pequena estrutura do sistema imune responsável pela filtragem da linfa.",
      },
      {
        id: "G2",
        term: "Gastrite",
        definition: "Inflamação do revestimento do estômago.",
      },
      {
        id: "G3",
        term: "Gastroenterologista",
        definition: "Médico especialista em doenças do sistema digestivo.",
      },
      {
        id: "G4",
        term: "Glicemia",
        definition: "Nível de glicose presente no sangue.",
      },
      {
        id: "G5",
        term: "Glomerulonefrite",
        definition: "Inflamação dos glomérulos nos rins.",
      },
      {
        id: "G6",
        term: "Gonadotrofina",
        definition:
          "Hormônio que age sobre as gônadas (ovários ou testículos).",
      },
      {
        id: "G7",
        term: "Granuloma",
        definition:
          "Formação de tecido inflamatório, geralmente em resposta a infecção ou corpo estranho.",
      },
    ],
  },
  {
    id: 8,
    letter: "H",
    terms: [
      {
        id: "H1",
        term: "Hemangioma",
        definition: "Tumor benigno formado por vasos sanguíneos.",
      },
      {
        id: "H2",
        term: "Hematoma",
        definition: "Acúmulo de sangue fora dos vasos sanguíneos.",
      },
      {
        id: "H3",
        term: "Hemoglobina",
        definition:
          "Proteína presente nos glóbulos vermelhos responsável pelo transporte de oxigênio no sangue.",
      },
      {
        id: "H4",
        term: "Hemólise",
        definition: "Destruição dos glóbulos vermelhos do sangue.",
      },
      {
        id: "H5",
        term: "Hepatite",
        definition: "Inflamação do fígado.",
      },
      {
        id: "H6",
        term: "Hepatomegalia",
        definition: "Aumento do tamanho do fígado.",
      },
      {
        id: "H7",
        term: "Histologia",
        definition: "Estudo microscópico dos tecidos biológicos.",
      },
    ],
  },
  {
    id: 9,
    letter: "I",
    terms: [
      {
        id: "I1",
        term: "Icterícia",
        definition:
          "Coloração amarelada da pele e dos olhos devido ao excesso de bilirrubina.",
      },
      {
        id: "I2",
        term: "Imunidade",
        definition:
          "A capacidade do corpo de se defender contra infecções, doenças ou outros invasores externos.",
      },
      {
        id: "I3",
        term: "Imunoglobulina",
        definition: "Anticorpo produzido por células do sistema imunológico.",
      },
      {
        id: "I4",
        term: "Imunossupressão",
        definition: "Redução ou bloqueio da resposta imune do organismo.",
      },
      {
        id: "I5",
        term: "Imunoterapia",
        definition:
          "Tratamento que estimula ou suprime o sistema imunológico para combater doenças.",
      },
      {
        id: "I6",
        term: "Incidência",
        definition:
          "Número de casos novos de uma doença em uma população e período específicos.",
      },
      {
        id: "I7",
        term: "Infiltração",
        definition:
          "Acúmulo ou penetração de células ou substâncias em um tecido.",
      },
    ],
  },
  {
    id: 10,
    letter: "J",
    terms: [
      {
        id: "J1",
        term: "Jejum",
        definition: "Abstinência de ingestão de alimentos por um período.",
      },
      {
        id: "J2",
        term: "Jugo",
        definition:
          "Região próxima à articulação temporomandibular (também refere-se à proeminência da bochecha).",
      },
      {
        id: "J3",
        term: "Junta Médica",
        definition:
          "Grupo de profissionais que avaliam um caso clínico em conjunto.",
      },
      {
        id: "J4",
        term: "Juvenil",
        definition:
          "Relacionado à fase jovem ou ao período da infância/adolescência.",
      },
    ],
  },
  {
    id: 11,
    letter: "K",
    terms: [
      {
        id: "K1",
        term: "Keratina",
        definition:
          "Proteína fibrosa encontrada em cabelos, unhas e camadas externas da pele.",
      },
      {
        id: "K2",
        term: "Klinefelter",
        definition:
          "Síndrome genética em homens, caracterizada pelo cariótipo XXY.",
      },
      {
        id: "K3",
        term: "Kuru",
        definition:
          "Doença priônica rara, associada a rituais de canibalismo em algumas culturas.",
      },
    ],
  },
  {
    id: 12,
    letter: "L",
    terms: [
      {
        id: "L1",
        term: "Laparoscopia",
        definition:
          "Procedimento cirúrgico minimamente invasivo realizado no abdômen.",
      },
      {
        id: "L2",
        term: "Leucemia",
        definition:
          "Tipo de câncer que afeta os tecidos formadores de sangue, incluindo a medula óssea e os linfócitos.",
      },
      {
        id: "L3",
        term: "Leucócitos",
        definition:
          "Glóbulos brancos do sangue, responsáveis pela defesa imunológica.",
      },
      {
        id: "L4",
        term: "Linfadenopatia",
        definition: "Aumento ou inchaço dos gânglios linfáticos.",
      },
      {
        id: "L5",
        term: "Linfangioma",
        definition:
          "Malformação de vasos linfáticos que pode formar uma massa.",
      },
      {
        id: "L6",
        term: "Linfócitos",
        definition: "Tipo de leucócitos cruciais para respostas imunológicas.",
      },
      {
        id: "L7",
        term: "Linfoma",
        definition: "Câncer que se desenvolve a partir dos linfócitos.",
      },
    ],
  },
  {
    id: 13,
    letter: "M",
    terms: [
      {
        id: "M1",
        term: "Macroglobulinemia",
        definition:
          "Excesso de imunoglobulinas macro (geralmente IgM) no sangue.",
      },
      {
        id: "M2",
        term: "Maligno",
        definition:
          "Termo que descreve um tumor cancerígeno com capacidade de invasão e metástase.",
      },
      {
        id: "M3",
        term: "Mamografia",
        definition:
          "Exame radiológico das mamas para detecção de anormalidades.",
      },
      {
        id: "M4",
        term: "Mastectomia",
        definition: "Cirurgia de remoção total ou parcial da mama.",
      },
      {
        id: "M5",
        term: "Melanoma",
        definition: "Tipo de câncer de pele originado nos melanócitos.",
      },
      {
        id: "M6",
        term: "Metástase",
        definition:
          "Processo pelo qual células cancerígenas se espalham do tumor original para outras partes do corpo.",
      },
      {
        id: "M7",
        term: "Mieloma",
        definition:
          "Câncer de células plasmáticas que se desenvolve na medula óssea.",
      },
    ],
  },
  {
    id: 14,
    letter: "N",
    terms: [
      {
        id: "N1",
        term: "Neoplasia",
        definition: "Crescimento anormal e descontrolado de células (tumor).",
      },
      {
        id: "N2",
        term: "Neuroblastoma",
        definition:
          "Tumor maligno que surge a partir de células nervosas imaturas, comum em crianças.",
      },
      {
        id: "N3",
        term: "Neurocirurgião",
        definition:
          "Médico especializado em cirurgias do sistema nervoso central e periférico.",
      },
      {
        id: "N4",
        term: "Neurologia",
        definition:
          "Especialidade médica que estuda e trata distúrbios do sistema nervoso.",
      },
      {
        id: "N5",
        term: "Neutrófilos",
        definition:
          "Tipo de leucócito que atua principalmente em infecções bacterianas.",
      },
      {
        id: "N6",
        term: "Nódulo",
        definition: "Pequena massa de tecido anormal ou tumoral.",
      },
      {
        id: "N7",
        term: "Núcleo",
        definition: "Estrutura celular que abriga o material genético (DNA).",
      },
    ],
  },
  {
    id: 15,
    letter: "O",
    terms: [
      {
        id: "O1",
        term: "Obesidade",
        definition:
          "Excesso de gordura corporal que pode levar a problemas de saúde.",
      },
      {
        id: "O2",
        term: "Oncogene",
        definition:
          "Gene mutado ou expresso em níveis elevados que pode causar câncer.",
      },
      {
        id: "O3",
        term: "Oncologia",
        definition:
          "Ramo da medicina que se concentra no diagnóstico, tratamento e estudo do câncer.",
      },
      {
        id: "O4",
        term: "Osteossarcoma",
        definition: "Tipo de câncer ósseo agressivo.",
      },
      {
        id: "O5",
        term: "Osteólise",
        definition: "Destruição ou reabsorção do tecido ósseo.",
      },
      {
        id: "O6",
        term: "Osteopenia",
        definition:
          "Densidade óssea abaixo do normal, porém não tão baixa quanto na osteoporose.",
      },
      {
        id: "O7",
        term: "Osteoporose",
        definition:
          "Perda progressiva de massa óssea, aumentando o risco de fraturas.",
      },
    ],
  },
  {
    id: 16,
    letter: "P",
    terms: [
      {
        id: "P1",
        term: "Paliativo",
        definition:
          "Cuidado voltado para alívio de sintomas e conforto do paciente.",
      },
      {
        id: "P2",
        term: "Pancreatite",
        definition: "Inflamação do pâncreas.",
      },
      {
        id: "P3",
        term: "Paracentese",
        definition:
          "Procedimento de remoção de líquido acumulado na cavidade abdominal.",
      },
      {
        id: "P4",
        term: "Patologista",
        definition:
          "Médico que estuda alterações de tecidos e células para diagnosticar doenças.",
      },
      {
        id: "P5",
        term: "Pediatria",
        definition:
          "Especialidade médica focada no tratamento de crianças e adolescentes.",
      },
      {
        id: "P6",
        term: "Pet Scan",
        definition:
          "Exame de tomografia por emissão de pósitrons para detectar alterações metabólicas.",
      },
      {
        id: "P7",
        term: "Pneumologista",
        definition: "Médico especializado em doenças do sistema respiratório.",
      },
    ],
  },
  {
    id: 17,
    letter: "Q",
    terms: [
      {
        id: "Q1",
        term: "Quimioterapia",
        definition:
          "Tratamento médico que utiliza medicamentos para destruir ou impedir o crescimento de células cancerígenas.",
      },
      {
        id: "Q2",
        term: "Quiescente",
        definition: "Estado inativo ou em repouso.",
      },
      {
        id: "Q3",
        term: "Quociente",
        definition:
          "Resultado de uma divisão, também pode ser usado em índices e escalas médicas.",
      },
    ],
  },
  {
    id: 18,
    letter: "R",
    terms: [
      {
        id: "R1",
        term: "Radioterapia",
        definition:
          "Terapia que utiliza radiação para destruir células cancerígenas ou reduzir tumores.",
      },
      {
        id: "R2",
        term: "Recidiva",
        definition:
          "Retorno ou reaparecimento de uma doença após aparente melhora.",
      },
      {
        id: "R3",
        term: "Remissão",
        definition:
          "Período em que os sinais e sintomas de uma doença diminuem ou desaparecem.",
      },
      {
        id: "R4",
        term: "Ressecção",
        definition: "Remoção cirúrgica de parte de um órgão ou tecido.",
      },
      {
        id: "R5",
        term: "Ressonância Magnética",
        definition:
          "Exame de imagem de alta definição que utiliza campo magnético e radiofrequência.",
      },
      {
        id: "R6",
        term: "Retinoblastoma",
        definition: "Câncer raro que afeta a retina, mais comum em crianças.",
      },
      {
        id: "R7",
        term: "Risco",
        definition: "Probabilidade de ocorrer um evento adverso ou doença.",
      },
    ],
  },
  {
    id: 19,
    letter: "S",
    terms: [
      {
        id: "S1",
        term: "Sarcoma",
        definition:
          "Um tipo raro de câncer que se forma em tecidos conjuntivos, como ossos, músculos e cartilagem.",
      },
      {
        id: "S2",
        term: "Saturação",
        definition: "Nível de oxigênio ligado à hemoglobina no sangue.",
      },
      {
        id: "S3",
        term: "Sebo",
        definition:
          "Substância oleosa produzida pelas glândulas sebáceas da pele.",
      },
      {
        id: "S4",
        term: "Sindrome",
        definition: "Conjunto de sinais e sintomas que ocorrem em conjunto.",
      },
      {
        id: "S5",
        term: "Soro",
        definition:
          "Parte líquida do sangue sem células e fatores de coagulação.",
      },
      {
        id: "S6",
        term: "Subcutâneo",
        definition: "Tecido localizado abaixo da pele.",
      },
      {
        id: "S7",
        term: "Susceptibilidade",
        definition:
          "Tendência ou predisposição a ser afetado por algo, como uma doença.",
      },
    ],
  },
  {
    id: 20,
    letter: "T",
    terms: [
      {
        id: "T1",
        term: "Terapia",
        definition:
          "Conjunto de métodos e tratamentos para aliviar ou curar doenças.",
      },
      {
        id: "T2",
        term: "Timo",
        definition:
          "Órgão linfático primário, importante para a maturação de linfócitos T.",
      },
      {
        id: "T3",
        term: "Tireóide",
        definition: "Glândula endócrina que regula o metabolismo do corpo.",
      },
      {
        id: "T4",
        term: "Tomografia",
        definition: "Exame de imagem que cria cortes transversais do corpo.",
      },
      {
        id: "T5",
        term: "Toxicidade",
        definition:
          "Nível de dano que uma substância pode causar ao organismo.",
      },
      {
        id: "T6",
        term: "Transtorno",
        definition:
          "Condição de saúde que interfere no funcionamento mental ou físico.",
      },
      {
        id: "T7",
        term: "Tumor",
        definition:
          "Massa anormal de tecido que pode ser benigna (não cancerígena) ou maligna (cancerígena).",
      },
    ],
  },
  {
    id: 21,
    letter: "U",
    terms: [
      {
        id: "U1",
        term: "Ultrassom",
        definition:
          "Exame de imagem que usa ondas sonoras para visualizar órgãos internos.",
      },
      {
        id: "U2",
        term: "Ureter",
        definition: "Duto que transporta a urina dos rins até a bexiga.",
      },
      {
        id: "U3",
        term: "Uretra",
        definition: "Canal que conduz a urina da bexiga para fora do corpo.",
      },
      {
        id: "U4",
        term: "Urologia",
        definition:
          "Especialidade médica que trata do sistema urinário e do sistema reprodutor masculino.",
      },
      {
        id: "U5",
        term: "Urticária",
        definition:
          "Reação alérgica na pele, com placas avermelhadas que coçam.",
      },
      {
        id: "U6",
        term: "Úvula",
        definition:
          "Pequeno tecido em forma de gota que pende no final do palato mole.",
      },
    ],
  },
  {
    id: 22,
    letter: "V",
    terms: [
      {
        id: "V1",
        term: "Vacina",
        definition:
          "Preparação que estimula o sistema imunológico a produzir imunidade contra uma doença.",
      },
      {
        id: "V2",
        term: "Vasculite",
        definition: "Inflamação dos vasos sanguíneos.",
      },
      {
        id: "V3",
        term: "Vasopressina",
        definition:
          "Hormônio que promove a retenção de água pelos rins e a constrição dos vasos sanguíneos.",
      },
      {
        id: "V4",
        term: "Vírus",
        definition:
          "Agente infeccioso microscópico que necessita de células vivas para se reproduzir.",
      },
      {
        id: "V5",
        term: "Vitamina",
        definition: "Nutriente essencial para diversas funções biológicas.",
      },
      {
        id: "V6",
        term: "Volemia",
        definition: "Volume total de sangue circulante no corpo.",
      },
    ],
  },
  {
    id: 23,
    letter: "W",
    terms: [
      {
        id: "W1",
        term: "Waldenstrom",
        definition:
          "Refere-se à Macroglobulinemia de Waldenstrom, neoplasia de células B que causa excesso de IgM.",
      },
      {
        id: "W2",
        term: "Werner",
        definition:
          "Síndrome rara de envelhecimento precoce que se manifesta após a puberdade.",
      },
      {
        id: "W3",
        term: "Wilson",
        definition:
          "Doença hereditária que provoca acúmulo de cobre no organismo.",
      },
    ],
  },
  {
    id: 24,
    letter: "X",
    terms: [
      {
        id: "X1",
        term: "Xantelasma",
        definition: "Depósito de gordura amarelada, geralmente nas pálpebras.",
      },
      {
        id: "X2",
        term: "Xeroderma",
        definition: "Secura excessiva da pele.",
      },
      {
        id: "X3",
        term: "Xerostomia",
        definition: "Sensação de boca seca devido à redução da saliva.",
      },
    ],
  },
  {
    id: 25,
    letter: "Y",
    terms: [
      {
        id: "Y1",
        term: "Yersinia",
        definition:
          "Gênero de bactérias que inclui espécies causadoras de doenças como a peste (Yersinia pestis).",
      },
      {
        id: "Y2",
        term: "Yodo",
        definition:
          "Forma antiga de escrever 'iodo', elemento essencial para a função tireoidiana.",
      },
    ],
  },
  {
    id: 26,
    letter: "Z",
    terms: [
      {
        id: "Z1",
        term: "Zinco",
        definition:
          "Mineral essencial envolvido em diversas reações enzimáticas e no sistema imunológico.",
      },
      {
        id: "Z2",
        term: "Zollinger-Ellison",
        definition:
          "Síndrome caracterizada por tumores produtores de gastrina, gerando hipersecreção ácida no estômago.",
      },
    ],
  },
];
