interface WorkshopProps {
  slug: string;
  title: string;
  date: string;
  place: string;
  eventShortDescription: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  description: string;
  moreInfo?: string;
  moreInfoLink?: string;
  description2nd: string;
  when: string;
  where: string;
  necessary: string;
  registerLink: string;
  whatToExpect?: string;
  timeFrames?: {
    timeFrame?: string;
    descriptionOfTimeFrame?: { shortDescription?: string }[];
  }[];

  subInfoSection: { shortDescription: string }[];
}
export const workshopsData: WorkshopProps[] = [
  {
    slug: 'code-camp-5',
    title: 'code camp 5',
    date: '2024.gads 23.februāris 16:00-18:00',
    place: 'SEB Inovāciju centrs | Krišjāņa Barona iela, Rīga',
    eventShortDescription:
      'Pievienojies darbnīcai un uzzini kādi ir biežākie rīki un tehnoloģijas, kas tiek pielietotas spēļu izstrādes veidošanā, kā arī izmēģini izveidot savu spēli. ',
    image: {
      src: '/images/workshops/2024/code-camp-5.webp',
      alt: 'Code Camp 5',
      width: 594,
      height: 312,
    },
    description:
      'Pasākuma laikā praktiski darbosimies, apgūstot pamatus par spēļu izstrādi. Iepazīsimies ar vairākiem populāriem rīkiem, ko izmanto spēļu izstrādē un mēģināsim izveidot arī savu pirmo spēli. Nekādas iepriekšējas zināšanas nav nepieciešamas, tamdēļ jāņem vērā, ka darbnīca paredzēta iesācējiem un tiem, kas nav vēl nekad izstrādājuši savas spēles.',
    description2nd:
      'Īpaši aicināti uz pasākumu ir vidusskolas skolēni un universitātes studenti, ar interesti par tehnoloģijām vai jaunu ideju veidošanu. Jebkuram dalībniekam pasākums ir par brīvu.',
    when: '23.februāris 16:00',
    where: 'SEB Inovāciju centrs, Krišjāņa Barona iela 20, Rīga',
    necessary: 'Dators, lādētājs un vēlme apgūt jaunas tehnoloģijas!',
    registerLink: 'https://forms.gle/EtpjgKqbrvyQyQ4M9',
    whatToExpect: 'Ko vari sagaidīt no darbnīcas?',
    timeFrames: [
      {
        timeFrame: '16:00-16:25',
        descriptionOfTimeFrame: [
          { shortDescription: 'Iepazīšanās un apskats par spēļu izstrādes rīkiem un tendencēm;' },
        ],
      },
      {
        timeFrame: '16:25-17:50',
        descriptionOfTimeFrame: [{ shortDescription: 'Praktiska darbošanās veidojot spēles;' }],
      },
    ],
    subInfoSection: [
      { shortDescription: 'Pasākuma laikā un pēc pasākuma tiks nodrošināti dzērieni un uzkodas.' },
      { shortDescription: 'Jautājumu gadījumā droši zvani/raksti: +371 26115374' },
    ],
  },
  {
    slug: 'code-camp-4',
    title: 'code camp 4',
    date: '2024. gads 26. janvāris 16:00-18:00',
    place: 'SEB Inovāciju centrs | Krišjāņa Barona iela, Rīga',
    eventShortDescription:
      'Pievienojies darbnīcai un uzzini, kā uzbūvēt savu mobilo lietotni, izmantojot rīku Flutter. ',
    image: {
      src: '/images/workshops/2024/code-camp-4.webp',
      alt: 'Code Camp 4',
      width: 950,
      height: 499,
    },
    description:
      'Pasākuma laikā praktiski darbosimies, apgūstot pamatus par mobilajām lietotnēm un kam jāpievērš uzmanība, tās izstrādājot. Kā arī pievērsīsimies plaši izmantotajam rīkam Flutter, apskatīsim vairākas tā iespējas un iemācīsimies viņu pielietot lietotņu veidošanā. Nekādas iepriekšējas zināšanas par lietotņu veidošanu un Flutter no dalībniekiem netiek sagaidītas.',
    moreInfo: 'Vairāk par rīku Flutter: ',
    moreInfoLink: 'https://flutter.dev/',
    description2nd:
      'Īpaši aicināti uz pasākumu ir vidusskolas skolēni un universitātes studenti, ar interesti par tehnoloģijām vai jaunu ideju veidošanu. Jebkuram dalībniekam pasākums ir par brīvu.',
    when: '26.janvāris 16:00',
    where: 'SEB Inovāciju centrs, Krišjāņa Barona iela 20, Rīga',
    necessary: 'Dators, lādētājs un vēlme apgūt jaunas tehnoloģijas!',
    registerLink: 'https://forms.gle/Ez8RGvp3Uu1dkHdX8',
    whatToExpect: 'Ko vari sagaidīt no darbnīcas?',
    timeFrames: [
      {
        timeFrame: '16:00-16:25',
        descriptionOfTimeFrame: [
          { shortDescription: 'Iepazīšanās un apskats par lietotnēm;' },
          {
            shortDescription:
              'Izpratne par dažādām lietotnēm un funkcijām, kas jāņem vērā, tās veidojot; ',
          },
        ],
      },
      {
        timeFrame: '16:25-17:50',
        descriptionOfTimeFrame: [
          { shortDescription: 'Apskats par Flutter un tā iespējām;' },
          { shortDescription: 'Mobilās lietotnes veidošana ar Flutter;' },
        ],
      },
    ],
    subInfoSection: [
      { shortDescription: 'Pasākuma laikā un pēc pasākuma tiks nodrošināti dzērieni un uzkodas.' },
      { shortDescription: 'Jautājumu gadījumā droši zvani/raksti: +371 26115374' },
    ],
  },
  {
    slug: 'code-camp-3',
    title: 'code camp 3',
    date: '2023. gads 15. decembris 16:00-18:00',
    place: 'SEB Inovāciju centrs | Krišjāņa Barona iela, Rīga',
    eventShortDescription:
      'Pievienojies darbnīcai un uzzini kā labāk nonākt līdz savai biznesa idejai un uzbūvēt pirmo mājaslapas prototipu.',
    image: {
      src: '/images/workshops/2023/code-camp-3.webp',
      alt: 'Code Camp 3',
      width: 950,
      height: 499,
    },
    description:
      'Pasākuma laikā apgūsi praktiskus ieteikumus, kas nākotnē palīdzēs attīstīt jaunu biznesa ideju, izprast kā nonākt līdz jaunam produktam un izvērtēt savas idejas ilgtspējību. Otrajā darbnīcas daļā iemācīsies, kā veidot mājaslapu savai idejai ar pieejamajiem no-code rīkiem. Nekādas iepriekšējas zināšanas nav nepieciešamas un pasākums paredzēts tiem, kuriem nav/ir minimāla pieredze ar no-code rīkiem un uzņēmējdarbību.',
    moreInfo: '',
    description2nd:
      'Īpaši aicināti uz pasākumu ir vidusskolas skolēni un universitātes studenti, ar interesti par tehnoloģijām vai jaunu ideju veidošanu. Jebkuram dalībniekam pasākums ir par brīvu.',
    when: '15.decembris 16:00',
    where: 'SEB Inovāciju centrs, Krišjāņa Barona iela 20, Rīga',
    necessary: 'Dators, lādētājs un vēlme apgūt jaunas tehnoloģijas!',
    registerLink: 'https://bit.ly/raccoons_cc3',
    whatToExpect: 'Ko vari sagaidīt no darbnīcas?',
    timeFrames: [
      {
        timeFrame: '16:00-16:45',
        descriptionOfTimeFrame: [
          {
            shortDescription:
              'Attīsti radošo domāšanu ideju ģenerēšanas procesā un iemācies kā izvērtēt idejas dzīvotspēju;',
          },
          { shortDescription: 'Iegūsti izpratni par biznesa modeļiem un tirgus tendencēm;' },
          {
            shortDescription:
              'Sadarbojies ar citiem dalībniekiem un kopīgi izvērtē savas biznesa idejas ilgtspējību.',
          },
        ],
      },
      {
        timeFrame: '16:55-17:50',
        descriptionOfTimeFrame: [
          { shortDescription: 'Iedziļinies mājaslapu izstrādes un lietotāja pieredzes pamatos;' },
          { shortDescription: 'Izmantojot no-code rīkus izveido savu pirmo mājaslapas prototipu;' },
          { shortDescription: 'Izproti labāk lietotāja nozīmi savas idejas prototipa veidošanā.' },
        ],
      },
    ],
    subInfoSection: [
      { shortDescription: 'Pasākuma laikā un pēc pasākuma tiks nodrošināti dzērieni un uzkodas.' },
      { shortDescription: 'Jautājumu gadījumā droši zvani/raksti: +371 26115374' },
    ],
  },
  {
    slug: 'code-camp-2',
    title: 'code camp 2',
    date: 'October 4, 2023, 18:00',
    place: 'SEB Inovation center | Krišjāņa Barona street 20, Rīga',
    eventShortDescription: 'PART 2 to our first CODE CAMP!',
    image: {
      src: '/images/workshops/2023/code-camp-2.webp',
      alt: 'Code Camp 2',
      width: 3000,
      height: 1809,
    },
    description:
      'If you are new to coding, this in-person session is going to help you familiarize yourself with coding projects and GitHub. Learn to navigate your repo, understand branches, and collaborate with others on code.',
    moreInfo: '',
    description2nd: '',
    when: '',
    where: '',
    necessary: '',
    registerLink: '',
    subInfoSection: [],
  },
  {
    slug: 'code-camp-1',
    title: 'code camp 1',
    date: 'September 20, 2023, 18:00',
    place: 'SEB Inovation center | Krišjāņa Barona street 20, Rīga',
    eventShortDescription:
      'Join the workshop and familiarize yourself with the coding environment and basic front-end web design!',
    image: {
      src: '/images/workshops/2023/code-camp-1.webp',
      alt: 'Code Camp 1',
      width: 3000,
      height: 1809,
    },
    description:
      'Do you want to introduce yourself to coding and build a simple site? This in-person session is going to help you familiarize yourself with a coding environment and basic front-end web design in a hands-on workshop!',
    moreInfo: '',
    description2nd: '',
    when: '',
    where: '',
    necessary: '',
    registerLink: '',
    subInfoSection: [],
  },
];
