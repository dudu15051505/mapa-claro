var locations = [
    /* CIDADES ADICIONADAS MANUALMENTE, POR ERRO NO CADASTRO DE CONSULTA API DA CLARO */
    {
        name: 'Piraquara, PR <br> GPON REDE NEUTRA',
        color: 'grey',
        latitude: '-25.442171',
        longitude: '-49.062411'
    }, {
        name: 'Mogi das Cruzes, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-23.52082',
        longitude: '-46.18541'
    }, {
        name: 'Dois Irmãos, RS <br> GPON',
        color: 'green',
        latitude: '-29.58356',
        longitude: '-51.089776'
    },

    /* CIDADES CONSULTADAS AUTOMATICAMENTE PELO SCRIPT */
    {
        name: 'Rio Branco, AC <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-9.97499',
        longitude: '-67.824348'
    }, {
        name: 'Maceió, AL <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-9.665985',
        longitude: '-35.73496'
    }, {
        name: 'Manaus, AM <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-3.118662',
        longitude: '-60.02123'
    }, {
        name: 'Macapá, AP <br> GPON',
        color: 'green',
        latitude: '0.034934',
        longitude: '-51.069395'
    }, {
        name: 'Santana, AP <br> GPON',
        color: 'green',
        latitude: '-0.045434',
        longitude: '-51.172924'
    }, {
        name: 'Alagoinhas, BA <br> GPON',
        color: 'green',
        latitude: '-12.133526',
        longitude: '-38.420772'
    }, {
        name: 'Barreiras, BA <br> GPON',
        color: 'green',
        latitude: '-12.143864',
        longitude: '-44.996838'
    }, {
        name: 'Camaçari, BA <br> GPON',
        color: 'green',
        latitude: '-12.699638',
        longitude: '-38.326265'
    }, {
        name: 'Eunápolis, BA <br> GPON',
        color: 'green',
        latitude: '-16.371498',
        longitude: '-39.582122'
    }, {
        name: 'Feira de Santana, BA <br> GPON',
        color: 'green',
        latitude: '-12.266429',
        longitude: '-38.966293'
    }, {
        name: 'Ilhéus, BA <br> GPON',
        color: 'green',
        latitude: '-14.793045',
        longitude: '-39.04602'
    }, {
        name: 'Itabuna, BA <br> GPON',
        color: 'green',
        latitude: '-14.787573',
        longitude: '-39.278056'
    }, {
        name: 'Jequié, BA <br> GPON',
        color: 'green',
        latitude: '-13.850888',
        longitude: '-40.087704'
    }, {
        name: 'Juazeiro, BA <br> GPON',
        color: 'green',
        latitude: '-9.416217',
        longitude: '-40.503251'
    }, {
        name: 'Lauro de Freitas, BA <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-12.8978',
        longitude: '-38.321008'
    }, {
        name: 'Mata de São João, BA <br> GPON',
        color: 'green',
        latitude: '-12.530685',
        longitude: '-38.300898'
    }, {
        name: 'Porto Seguro, BA <br> GPON',
        color: 'green',
        latitude: '-16.443473',
        longitude: '-39.064251'
    }, {
        name: 'Salvador, BA <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-12.97178',
        longitude: '-38.501068'
    }, {
        name: 'Teixeira de Freitas, BA <br> GPON',
        color: 'green',
        latitude: '-17.539915',
        longitude: '-39.739962'
    }, {
        name: 'Vitória da Conquista, BA <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-14.861466',
        longitude: '-40.844159'
    }, {
        name: 'Aquiraz, CE <br> GPON',
        color: 'green',
        latitude: '-3.899293',
        longitude: '-38.389563'
    }, {
        name: 'Eusébio, CE <br> GPON',
        color: 'green',
        latitude: '-3.892501',
        longitude: '-38.455875'
    }, {
        name: 'Fortaleza, CE <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-3.716638',
        longitude: '-38.542298'
    }, {
        name: 'Juazeiro do Norte, CE <br> GPON',
        color: 'green',
        latitude: '-7.196207',
        longitude: '-39.307593'
    }, {
        name: 'Sobral, CE <br> GPON',
        color: 'green',
        latitude: '-3.689133',
        longitude: '-40.34821'
    }, {
        name: 'Brasília, DF <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-15.779522',
        longitude: '-47.929657'
    }, {
        name: 'Aracruz, ES <br> GPON',
        color: 'green',
        latitude: '-19.820045',
        longitude: '-40.276441'
    }, {
        name: 'Cachoeiro de Itapemirim, ES <br> HFC',
        color: 'red',
        latitude: '-20.846212',
        longitude: '-41.119829'
    }, {
        name: 'Cariacica, ES <br> HFC',
        color: 'red',
        latitude: '-20.263202',
        longitude: '-40.416549'
    }, {
        name: 'Colatina, ES <br> GPON',
        color: 'green',
        latitude: '-19.549316',
        longitude: '-40.626898'
    }, {
        name: 'Serra, ES <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-20.121032',
        longitude: '-40.307408'
    }, {
        name: 'Vila Velha, ES <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-20.341705',
        longitude: '-40.287458'
    }, {
        name: 'Vitória, ES <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-20.315472',
        longitude: '-40.312806'
    }, {
        name: 'Anápolis, GO <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-16.328095',
        longitude: '-48.952958'
    }, {
        name: 'Aparecida de Goiânia, GO <br> HFC',
        color: 'red',
        latitude: '-16.819804',
        longitude: '-49.246856'
    }, {
        name: 'Caldas Novas, GO <br> GPON',
        color: 'green',
        latitude: '-17.74406',
        longitude: '-48.624579'
    }, {
        name: 'Formosa, GO <br> GPON',
        color: 'green',
        latitude: '-15.539991',
        longitude: '-47.336999'
    }, {
        name: 'Goiânia, GO <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-16.686439',
        longitude: '-49.264346'
    }, {
        name: 'Itumbiara, GO <br> GPON',
        color: 'green',
        latitude: '-18.409267',
        longitude: '-49.215845'
    }, {
        name: 'Jataí, GO <br> GPON',
        color: 'green',
        latitude: '-17.878383',
        longitude: '-51.720424'
    }, {
        name: 'Rio Verde, GO <br> GPON',
        color: 'green',
        latitude: '-17.792266',
        longitude: '-50.919195'
    }, {
        name: 'Santa Helena de Goiás, GO <br> GPON',
        color: 'green',
        latitude: '-17.81152',
        longitude: '-50.597664'
    }, {
        name: 'Senador Canedo, GO <br> GPON',
        color: 'green',
        latitude: '-16.708401',
        longitude: '-49.091398'
    }, {
        name: 'Valparaíso de Goiás, GO <br> GPON',
        color: 'green',
        latitude: '-16.065078',
        longitude: '-47.975675'
    }, {
        name: 'Imperatriz, MA <br> GPON',
        color: 'green',
        latitude: '-5.518471',
        longitude: '-47.477726'
    }, {
        name: 'São Luís, MA <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-2.538742',
        longitude: '-44.282513'
    }, {
        name: 'Timon, MA <br> GPON',
        color: 'green',
        latitude: '-5.097692',
        longitude: '-42.83292'
    }, {
        name: 'Araguari, MG <br> GPON',
        color: 'green',
        latitude: '-18.645575',
        longitude: '-48.193392'
    }, {
        name: 'Barbacena, MG <br> GPON',
        color: 'green',
        latitude: '-21.221446',
        longitude: '-43.770266'
    }, {
        name: 'Belo Horizonte, MG <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-19.910183',
        longitude: '-43.926572'
    }, {
        name: 'Betim, MG <br> HFC',
        color: 'red',
        latitude: '-19.966827',
        longitude: '-44.200775'
    }, {
        name: 'Cataguases, MG <br> GPON',
        color: 'green',
        latitude: '-21.39239',
        longitude: '-42.689647'
    }, {
        name: 'Conselheiro Lafaiete, MG <br> GPON',
        color: 'green',
        latitude: '-20.663445',
        longitude: '-43.784609'
    }, {
        name: 'Contagem, MG <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-19.932079',
        longitude: '-44.05392'
    }, {
        name: 'Coronel Fabriciano, MG <br> GPON',
        color: 'green',
        latitude: '-19.517879',
        longitude: '-42.627585'
    }, {
        name: 'Divinópolis, MG <br> GPON',
        color: 'green',
        latitude: '-20.144646',
        longitude: '-44.891223'
    }, {
        name: 'Governador Valadares, MG <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-18.854452',
        longitude: '-41.95553'
    }, {
        name: 'Ipatinga, MG <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-19.470275',
        longitude: '-42.547612'
    }, {
        name: 'Itabira, MG <br> GPON',
        color: 'green',
        latitude: '-19.623936',
        longitude: '-43.23123'
    }, {
        name: 'Itaúna, MG <br> GPON',
        color: 'green',
        latitude: '-20.081798',
        longitude: '-44.580112'
    }, {
        name: 'Ituiutaba, MG <br> GPON',
        color: 'green',
        latitude: '-18.977191',
        longitude: '-49.463945'
    }, {
        name: 'Juiz de Fora, MG <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-21.75952',
        longitude: '-43.339759'
    }, {
        name: 'Lagoa Santa, MG <br> GPON',
        color: 'green',
        latitude: '-19.63967',
        longitude: '-43.893216'
    }, {
        name: 'Lavras, MG <br> GPON',
        color: 'green',
        latitude: '-21.248002',
        longitude: '-45.000949'
    }, {
        name: 'Manhuaçu, MG <br> GPON',
        color: 'green',
        latitude: '-20.257226',
        longitude: '-42.027987'
    }, {
        name: 'Montes Claros, MG <br> GPON',
        color: 'green',
        latitude: '-16.728177',
        longitude: '-43.857809'
    }, {
        name: 'Nova Lima, MG <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-19.975763',
        longitude: '-43.850854'
    }, {
        name: 'Pará de Minas, MG <br> GPON',
        color: 'green',
        latitude: '-19.853441',
        longitude: '-44.611355'
    }, {
        name: 'Patos de Minas, MG <br> GPON',
        color: 'green',
        latitude: '-18.569938',
        longitude: '-46.501268'
    }, {
        name: 'Poços de Caldas, MG <br> GPON',
        color: 'green',
        latitude: '-21.779975',
        longitude: '-46.569184'
    }, {
        name: 'Pouso Alegre, MG <br> GPON',
        color: 'green',
        latitude: '-22.22659',
        longitude: '-45.938935'
    }, {
        name: 'Sabará, MG <br> HFC',
        color: 'red',
        latitude: '-19.884045',
        longitude: '-43.82631'
    }, {
        name: 'Santa Luzia, MG <br> GPON',
        color: 'green',
        latitude: '-19.754824',
        longitude: '-43.849658'
    }, {
        name: 'São João Del Rei, MG <br> GPON',
        color: 'green',
        latitude: '-21.131054',
        longitude: '-44.252646'
    }, {
        name: 'Sete Lagoas, MG <br> HFC',
        color: 'red',
        latitude: '-19.456902',
        longitude: '-44.241255'
    }, {
        name: 'Teófilo Otoni, MG <br> HFC',
        color: 'red',
        latitude: '-17.859534',
        longitude: '-41.508717'
    }, {
        name: 'Timóteo, MG <br> GPON',
        color: 'green',
        latitude: '-19.581086',
        longitude: '-42.64713'
    }, {
        name: 'Três Corações, MG <br> GPON',
        color: 'green',
        latitude: '-21.692091',
        longitude: '-45.251117'
    }, {
        name: 'Ubá, MG <br> GPON',
        color: 'green',
        latitude: '-21.120444',
        longitude: '-42.935931'
    }, {
        name: 'Uberaba, MG <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-19.747205',
        longitude: '-47.938073'
    }, {
        name: 'Uberlândia, MG <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-18.914142',
        longitude: '-48.274934'
    }, {
        name: 'Varginha, MG <br> HFC',
        color: 'red',
        latitude: '-21.555581',
        longitude: '-45.436424'
    }, {
        name: 'Vespasiano, MG <br> GPON',
        color: 'green',
        latitude: '-19.688326',
        longitude: '-43.9239'
    }, {
        name: 'Viçosa, MG <br> GPON',
        color: 'green',
        latitude: '-20.755916',
        longitude: '-42.87417'
    }, {
        name: 'Campo Grande, MS <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-20.448589',
        longitude: '-54.629463'
    }, {
        name: 'Dourados, MS <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-22.223099',
        longitude: '-54.812043'
    }, {
        name: 'Ponta Porã, MS <br> GPON',
        color: 'green',
        latitude: '-22.529617',
        longitude: '-55.720326'
    }, {
        name: 'Três Lagoas, MS <br> GPON',
        color: 'green',
        latitude: '-20.784853',
        longitude: '-51.700731'
    }, {
        name: 'Cuiabá, MT <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-15.600979',
        longitude: '-56.097397'
    }, {
        name: 'Lucas do Rio Verde, MT <br> GPON',
        color: 'green',
        latitude: '-13.058796',
        longitude: '-55.904202'
    }, {
        name: 'Nova Mutum, MT <br> GPON',
        color: 'green',
        latitude: '-13.837389',
        longitude: '-56.074316'
    }, {
        name: 'Rondonópolis, MT <br> HFC',
        color: 'red',
        latitude: '-16.467251',
        longitude: '-54.637173'
    }, {
        name: 'Sinop, MT <br> GPON',
        color: 'green',
        latitude: '-11.86043',
        longitude: '-55.509062'
    }, {
        name: 'Sorriso, MT <br> GPON',
        color: 'green',
        latitude: '-12.542527',
        longitude: '-55.721051'
    }, {
        name: 'Várzea Grande, MT <br> HFC',
        color: 'red',
        latitude: '-15.645816',
        longitude: '-56.132218'
    }, {
        name: 'Ananindeua, PA <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-1.363914',
        longitude: '-48.374298'
    }, {
        name: 'Belém, PA <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-1.455396',
        longitude: '-48.489756'
    }, {
        name: 'Castanhal, PA <br> GPON',
        color: 'green',
        latitude: '-1.297971',
        longitude: '-47.916742'
    }, {
        name: 'Marabá, PA <br> GPON',
        color: 'green',
        latitude: '-5.38075',
        longitude: '-49.132672'
    }, {
        name: 'Paragominas, PA <br> GPON',
        color: 'green',
        latitude: '-3.002116',
        longitude: '-47.352692'
    }, {
        name: 'Parauapebas, PA <br> GPON',
        color: 'green',
        latitude: '-6.067812',
        longitude: '-49.903733'
    }, {
        name: 'Cabedelo, PB <br> HFC',
        color: 'red',
        latitude: '-6.987314',
        longitude: '-34.828409'
    }, {
        name: 'Campina Grande, PB <br> HFC',
        color: 'red',
        latitude: '-7.221958',
        longitude: '-35.873144'
    }, {
        name: 'João Pessoa, PB <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-7.11509',
        longitude: '-34.864121'
    }, {
        name: 'Caruaru, PE <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-8.284547',
        longitude: '-35.969863'
    }, {
        name: 'Jaboatão Dos Guararapes, PE <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-8.112982',
        longitude: '-35.014959'
    }, {
        name: 'Olinda, PE <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-8.010166',
        longitude: '-34.854504'
    }, {
        name: 'Paulista, PE <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-7.934007',
        longitude: '-34.868407'
    }, {
        name: 'Petrolina, PE <br> GPON',
        color: 'green',
        latitude: '-9.388662',
        longitude: '-40.502731'
    }, {
        name: 'Recife, PE <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-8.046658',
        longitude: '-34.877065'
    }, {
        name: 'Parnaíba, PI <br> GPON',
        color: 'green',
        latitude: '-2.905847',
        longitude: '-41.775388'
    }, {
        name: 'Teresina, PI <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-5.091944',
        longitude: '-42.803364'
    }, {
        name: 'Almirante Tamandaré, PR <br> HFC',
        color: 'red',
        latitude: '-25.318819',
        longitude: '-49.303733'
    }, {
        name: 'Apucarana, PR <br> GPON',
        color: 'green',
        latitude: '-23.549961',
        longitude: '-51.463486'
    }, {
        name: 'Arapongas, PR <br> HFC',
        color: 'red',
        latitude: '-23.415296',
        longitude: '-51.42592'
    }, {
        name: 'Araucária, PR <br> HFC',
        color: 'red',
        latitude: '-25.585939',
        longitude: '-49.404748'
    }, {
        name: 'Cambé, PR <br> GPON',
        color: 'green',
        latitude: '-23.276575',
        longitude: '-51.279832'
    }, {
        name: 'Campo Largo, PR <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-25.452535',
        longitude: '-49.529026'
    }, {
        name: 'Cascavel, PR <br> HFC',
        color: 'red',
        latitude: '-24.957301',
        longitude: '-53.459005'
    }, {
        name: 'Cianorte, PR <br> HFC',
        color: 'red',
        latitude: '-23.659859',
        longitude: '-52.605444'
    }, {
        name: 'Colombo, PR <br> HFC',
        color: 'red',
        latitude: '-25.292487',
        longitude: '-49.22616'
    }, {
        name: 'Curitiba, PR <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-25.419547',
        longitude: '-49.264622'
    }, {
        name: 'Guarapuava, PR <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-25.390237',
        longitude: '-51.462317'
    }, {
        name: 'Guaratuba, PR <br> GPON',
        color: 'green',
        latitude: '-25.881672',
        longitude: '-48.575223'
    }, {
        name: 'Ibiporã, PR <br> GPON',
        color: 'green',
        latitude: '-23.265941',
        longitude: '-51.052243'
    }, {
        name: 'Londrina, PR <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-23.303975',
        longitude: '-51.1691'
    }, {
        name: 'Maringá, PR <br> HFC',
        color: 'red',
        latitude: '-23.420545',
        longitude: '-51.933298'
    }, {
        name: 'Paiçandu, PR <br> GPON',
        color: 'green',
        latitude: '-23.455534',
        longitude: '-52.046013'
    }, {
        name: 'Paranaguá, PR <br> GPON',
        color: 'green',
        latitude: '-25.516078',
        longitude: '-48.522528'
    }, {
        name: 'Pinhais, PR <br> HFC',
        color: 'red',
        latitude: '-25.442949',
        longitude: '-49.19267'
    }, {
        name: 'Ponta Grossa, PR <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-25.091622',
        longitude: '-50.166787'
    }, {
        name: 'Quatro Barras, PR <br> GPON',
        color: 'green',
        latitude: '-25.367317',
        longitude: '-49.076306'
    }, {
        name: 'Rolândia, PR <br> GPON',
        color: 'green',
        latitude: '-23.31012',
        longitude: '-51.365928'
    }, {
        name: 'São José Dos Pinhais, PR <br> HFC',
        color: 'red',
        latitude: '-25.531343',
        longitude: '-49.203097'
    }, {
        name: 'União da Vitória, PR <br> GPON',
        color: 'green',
        latitude: '-26.227319',
        longitude: '-51.087313'
    }, {
        name: 'Armação Dos Búzios, RJ <br> GPON',
        color: 'green',
        latitude: '-22.752846',
        longitude: '-41.884559'
    }, {
        name: 'Barra Mansa, RJ <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-22.548084',
        longitude: '-44.175241'
    }, {
        name: 'Belford Roxo, RJ <br> HFC',
        color: 'red',
        latitude: '-22.764042',
        longitude: '-43.39921'
    }, {
        name: 'Cabo Frio, RJ <br> GPON',
        color: 'green',
        latitude: '-22.88943',
        longitude: '-42.028595'
    }, {
        name: 'Campos Dos Goytacazes, RJ <br> HFC',
        color: 'red',
        latitude: '-21.762171',
        longitude: '-41.318055'
    }, {
        name: 'Duque de Caxias, RJ <br> HFC',
        color: 'red',
        latitude: '-22.785801',
        longitude: '-43.304895'
    }, {
        name: 'Itaguaí, RJ <br> GPON',
        color: 'green',
        latitude: '-22.863566',
        longitude: '-43.779821'
    }, {
        name: 'Macaé, RJ <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-22.376807',
        longitude: '-41.784828'
    }, {
        name: 'Mesquita, RJ <br> HFC',
        color: 'red',
        latitude: '-22.802811',
        longitude: '-43.460066'
    }, {
        name: 'Miguel Pereira, RJ <br> GPON',
        color: 'green',
        latitude: '-22.457242',
        longitude: '-43.480275'
    }, {
        name: 'Nilópolis, RJ <br> HFC',
        color: 'red',
        latitude: '-22.805658',
        longitude: '-43.423344'
    }, {
        name: 'Niterói, RJ <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-22.88321',
        longitude: '-43.103367'
    }, {
        name: 'Nova Friburgo, RJ <br> GPON',
        color: 'green',
        latitude: '-22.293224',
        longitude: '-42.537692'
    }, {
        name: 'Nova Iguaçu, RJ <br> HFC',
        color: 'red',
        latitude: '-22.755635',
        longitude: '-43.460325'
    }, {
        name: 'Petrópolis, RJ <br> HFC',
        color: 'red',
        latitude: '-22.519963',
        longitude: '-43.192613'
    }, {
        name: 'Resende, RJ <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-22.470473',
        longitude: '-44.45091'
    }, {
        name: 'Rio Das Ostras, RJ <br> HFC',
        color: 'red',
        latitude: '-22.517378',
        longitude: '-41.947509'
    }, {
        name: 'Rio de Janeiro, RJ <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-22.912897',
        longitude: '-43.200295'
    }, {
        name: 'São João de Meriti, RJ <br> HFC',
        color: 'red',
        latitude: '-22.805776',
        longitude: '-43.37292'
    }, {
        name: 'São Pedro da Aldeia, RJ <br> GPON',
        color: 'green',
        latitude: '-22.842859',
        longitude: '-42.102596'
    }, {
        name: 'Teresópolis, RJ <br> HFC',
        color: 'red',
        latitude: '-22.416464',
        longitude: '-42.97519'
    }, {
        name: 'Três Rios, RJ <br> GPON',
        color: 'green',
        latitude: '-22.11651',
        longitude: '-43.218533'
    }, {
        name: 'Valença, RJ <br> GPON',
        color: 'green',
        latitude: '-22.244496',
        longitude: '-43.71288'
    }, {
        name: 'Vassouras, RJ <br> GPON',
        color: 'green',
        latitude: '-22.405889',
        longitude: '-43.668555'
    }, {
        name: 'Volta Redonda, RJ <br> HFC',
        color: 'red',
        latitude: '-22.520212',
        longitude: '-44.099555'
    }, {
        name: 'Mossoró, RN <br> GPON',
        color: 'green',
        latitude: '-5.183737',
        longitude: '-37.347446'
    }, {
        name: 'Natal, RN <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-5.793567',
        longitude: '-35.198604'
    }, {
        name: 'Parnamirim, RN <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-5.911156',
        longitude: '-35.271'
    }, {
        name: 'Ariquemes, RO <br> GPON',
        color: 'green',
        latitude: '-9.905711',
        longitude: '-63.032516'
    }, {
        name: 'Cacoal, RO <br> GPON',
        color: 'green',
        latitude: '-11.434271',
        longitude: '-61.456167'
    }, {
        name: 'Porto Velho, RO <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-8.760772',
        longitude: '-63.899902'
    }, {
        name: 'Vilhena, RO <br> GPON',
        color: 'green',
        latitude: '-12.750183',
        longitude: '-60.148847'
    }, {
        name: 'Alegrete, RS <br> GPON',
        color: 'green',
        latitude: '-29.790166',
        longitude: '-55.794862'
    }, {
        name: 'Alvorada, RS <br> HFC',
        color: 'red',
        latitude: '-29.9914',
        longitude: '-51.080857'
    }, {
        name: 'Arroio do Meio, RS <br> GPON',
        color: 'green',
        latitude: '-29.401353',
        longitude: '-51.955735'
    }, {
        name: 'Bagé, RS <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-31.32965',
        longitude: '-54.09992'
    }, {
        name: 'Bento Gonçalves, RS <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-29.166212',
        longitude: '-51.516476'
    }, {
        name: 'Cachoeira do Sul, RS <br> GPON',
        color: 'green',
        latitude: '-30.032988',
        longitude: '-52.892756'
    }, {
        name: 'Cachoeirinha, RS <br> HFC',
        color: 'red',
        latitude: '-29.947222',
        longitude: '-51.101606'
    }, {
        name: 'Campo Bom, RS <br> HFC',
        color: 'red',
        latitude: '-29.674694',
        longitude: '-51.060601'
    }, {
        name: 'Canela, RS <br> GPON',
        color: 'green',
        latitude: '-29.355993',
        longitude: '-50.811921'
    }, {
        name: 'Canoas, RS <br> HFC',
        color: 'red',
        latitude: '-29.912758',
        longitude: '-51.185681'
    }, {
        name: 'Capão da Canoa, RS <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-29.764242',
        longitude: '-50.028243'
    }, {
        name: 'Carazinho, RS <br> GPON',
        color: 'green',
        latitude: '-28.295844',
        longitude: '-52.79326'
    }, {
        name: 'Carlos Barbosa, RS <br> GPON',
        color: 'green',
        latitude: '-29.296949',
        longitude: '-51.502847'
    }, {
        name: 'Caxias do Sul, RS <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-29.162905',
        longitude: '-51.179161'
    }, {
        name: 'Charqueadas, RS <br> GPON',
        color: 'green',
        latitude: '-29.962478',
        longitude: '-51.628872'
    }, {
        name: 'Cruz Alta, RS <br> HFC',
        color: 'red',
        latitude: '-28.645001',
        longitude: '-53.604831'
    }, {
        name: 'Eldorado do Sul, RS <br> GPON',
        color: 'green',
        latitude: '-30.084676',
        longitude: '-51.618702'
    }, {
        name: 'Encantado, RS <br> GPON',
        color: 'green',
        latitude: '-29.235141',
        longitude: '-51.870282'
    }, {
        name: 'Erechim, RS <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-27.63638',
        longitude: '-52.26969'
    }, {
        name: 'Estância Velha, RS <br> HFC',
        color: 'red',
        latitude: '-29.65354',
        longitude: '-51.184339'
    }, {
        name: 'Esteio, RS <br> HFC',
        color: 'red',
        latitude: '-29.851963',
        longitude: '-51.184065'
    }, {
        name: 'Estrela, RS <br> GPON',
        color: 'green',
        latitude: '-29.500207',
        longitude: '-51.949508'
    }, {
        name: 'Farroupilha, RS <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-29.222689',
        longitude: '-51.341853'
    }, {
        name: 'Frederico Westphalen, RS <br> GPON',
        color: 'green',
        latitude: '-27.358644',
        longitude: '-53.395824'
    }, {
        name: 'Garibaldi, RS <br> GPON',
        color: 'green',
        latitude: '-29.258979',
        longitude: '-51.535179'
    }, {
        name: 'Gramado, RS <br> GPON',
        color: 'green',
        latitude: '-29.373351',
        longitude: '-50.876164'
    }, {
        name: 'Gravataí, RS <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-29.941319',
        longitude: '-50.986891'
    }, {
        name: 'Guaíba, RS <br> GPON',
        color: 'green',
        latitude: '-30.108592',
        longitude: '-51.323314'
    }, {
        name: 'Igrejinha, RS <br> GPON',
        color: 'green',
        latitude: '-29.569318',
        longitude: '-50.791894'
    }, {
        name: 'Imbé, RS <br> GPON',
        color: 'green',
        latitude: '-29.975269',
        longitude: '-50.128068'
    }, {
        name: 'Itaqui, RS <br> GPON',
        color: 'green',
        latitude: '-29.131051',
        longitude: '-56.551478'
    }, {
        name: 'Ivoti, RS <br> GPON',
        color: 'green',
        latitude: '-29.599463',
        longitude: '-51.153326'
    }, {
        name: 'Lajeado, RS <br> HFC',
        color: 'red',
        latitude: '-29.459086',
        longitude: '-51.964427'
    }, {
        name: 'Montenegro, RS <br> GPON',
        color: 'green',
        latitude: '-29.682414',
        longitude: '-51.467903'
    }, {
        name: 'Nova Petrópolis, RS <br> GPON',
        color: 'green',
        latitude: '-29.374112',
        longitude: '-51.113552'
    }, {
        name: 'Novo Hamburgo, RS <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-29.687548',
        longitude: '-51.132828'
    }, {
        name: 'Osório, RS <br> GPON',
        color: 'green',
        latitude: '-29.888089',
        longitude: '-50.266713'
    }, {
        name: 'Palmeira Das Missões, RS <br> GPON',
        color: 'green',
        latitude: '-27.900652',
        longitude: '-53.313378'
    }, {
        name: 'Panambi, RS <br> GPON',
        color: 'green',
        latitude: '-28.283328',
        longitude: '-53.502261'
    }, {
        name: 'Parobé, RS <br> GPON',
        color: 'green',
        latitude: '-29.624257',
        longitude: '-50.83118'
    }, {
        name: 'Passo Fundo, RS <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-28.257564',
        longitude: '-52.409112'
    }, {
        name: 'Pelotas, RS <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-31.764898',
        longitude: '-52.337058'
    }, {
        name: 'Porto Alegre, RS <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-30.031771',
        longitude: '-51.206533'
    }, {
        name: 'Rio Grande, RS <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-32.034875',
        longitude: '-52.10705'
    }, {
        name: 'Rio Pardo, RS <br> GPON',
        color: 'green',
        latitude: '-29.98803',
        longitude: '-52.37113'
    }, {
        name: 'Rosário do Sul, RS <br> GPON',
        color: 'green',
        latitude: '-30.251483',
        longitude: '-54.922106'
    }, {
        name: 'Santa Cruz do Sul, RS <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-29.722021',
        longitude: '-52.434318'
    }, {
        name: 'Santa Maria, RS <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-29.686817',
        longitude: '-53.814946'
    }, {
        name: 'Santa Rosa, RS <br> GPON',
        color: 'green',
        latitude: '-27.8702',
        longitude: '-54.479629'
    }, {
        name: 'Santana do Livramento, RS <br> GPON',
        color: 'green',
        latitude: '-30.88772',
        longitude: '-55.531467'
    }, {
        name: 'Santo Ângelo, RS <br> GPON',
        color: 'green',
        latitude: '-28.300128',
        longitude: '-54.266781'
    }, {
        name: 'São Borja, RS <br> GPON',
        color: 'green',
        latitude: '-28.657828',
        longitude: '-56.003603'
    }, {
        name: 'São Gabriel, RS <br> GPON',
        color: 'green',
        latitude: '-30.333688',
        longitude: '-54.321657'
    }, {
        name: 'São Leopoldo, RS <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-29.754494',
        longitude: '-51.149773'
    }, {
        name: 'São Lourenço do Sul, RS <br> GPON',
        color: 'green',
        latitude: '-31.356374',
        longitude: '-51.971531'
    }, {
        name: 'São Luiz Gonzaga, RS <br> GPON',
        color: 'green',
        latitude: '-28.412032',
        longitude: '-54.955942'
    }, {
        name: 'Sapiranga, RS <br> HFC',
        color: 'red',
        latitude: '-29.634885',
        longitude: '-51.006446'
    }, {
        name: 'Sapucaia do Sul, RS <br> HFC',
        color: 'red',
        latitude: '-29.827575',
        longitude: '-51.144975'
    }, {
        name: 'Taquara, RS <br> GPON',
        color: 'green',
        latitude: '-29.650471',
        longitude: '-50.775278'
    }, {
        name: 'Teutônia, RS <br> GPON',
        color: 'green',
        latitude: '-29.448205',
        longitude: '-51.804375'
    }, {
        name: 'Torres, RS <br> GPON',
        color: 'green',
        latitude: '-29.333438',
        longitude: '-49.733289'
    }, {
        name: 'Tramandaí, RS <br> GPON',
        color: 'green',
        latitude: '-29.98414',
        longitude: '-50.132187'
    }, {
        name: 'Três Coroas, RS <br> GPON',
        color: 'green',
        latitude: '-29.513719',
        longitude: '-50.773869'
    }, {
        name: 'Uruguaiana, RS <br> HFC',
        color: 'red',
        latitude: '-29.761436',
        longitude: '-57.085287'
    }, {
        name: 'Venâncio Aires, RS <br> GPON',
        color: 'green',
        latitude: '-29.614306',
        longitude: '-52.193159'
    }, {
        name: 'Vera Cruz, RS <br> GPON',
        color: 'green',
        latitude: '-29.718435',
        longitude: '-52.515176'
    }, {
        name: 'Veranópolis, RS <br> GPON',
        color: 'green',
        latitude: '-28.931197',
        longitude: '-51.551614'
    }, {
        name: 'Viamão, RS <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-30.081899',
        longitude: '-51.019435'
    }, {
        name: 'Araranguá, SC <br> GPON',
        color: 'green',
        latitude: '-28.935615',
        longitude: '-49.491809'
    }, {
        name: 'Balneário Camboriú, SC <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-26.992594',
        longitude: '-48.635152'
    }, {
        name: 'Biguaçu, SC <br> GPON',
        color: 'green',
        latitude: '-27.496004',
        longitude: '-48.65979'
    }, {
        name: 'Blumenau, SC <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-26.915501',
        longitude: '-49.070904'
    }, {
        name: 'Brusque, SC <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-27.097706',
        longitude: '-48.910663'
    }, {
        name: 'Caçador, SC <br> GPON',
        color: 'green',
        latitude: '-26.77567',
        longitude: '-51.012004'
    }, {
        name: 'Camboriú, SC <br> GPON',
        color: 'green',
        latitude: '-27.024078',
        longitude: '-48.650338'
    }, {
        name: 'Chapecó, SC <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-27.100448',
        longitude: '-52.61519'
    }, {
        name: 'Concórdia, SC <br> GPON',
        color: 'green',
        latitude: '-27.233461',
        longitude: '-52.025962'
    }, {
        name: 'Florianópolis, SC <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-27.594486',
        longitude: '-48.547696'
    }, {
        name: 'Fraiburgo, SC <br> GPON',
        color: 'green',
        latitude: '-27.023288',
        longitude: '-50.919978'
    }, {
        name: 'Gaspar, SC <br> GPON',
        color: 'green',
        latitude: '-26.933597',
        longitude: '-48.953428'
    }, {
        name: 'Guaramirim, SC <br> GPON',
        color: 'green',
        latitude: '-26.468753',
        longitude: '-49.002628'
    }, {
        name: 'Indaial, SC <br> GPON',
        color: 'green',
        latitude: '-26.899247',
        longitude: '-49.235417'
    }, {
        name: 'Itajaí, SC <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-26.910097',
        longitude: '-48.670475'
    }, {
        name: 'Itapema, SC <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-27.08607',
        longitude: '-48.616038'
    }, {
        name: 'Jaraguá do Sul, SC <br> GPON',
        color: 'green',
        latitude: '-26.485083',
        longitude: '-49.07125'
    }, {
        name: 'Joaçaba, SC <br> GPON',
        color: 'green',
        latitude: '-27.172105',
        longitude: '-51.510788'
    }, {
        name: 'Joinville, SC <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-26.304497',
        longitude: '-48.848675'
    }, {
        name: 'Lages, SC <br> GPON',
        color: 'green',
        latitude: '-27.814966',
        longitude: '-50.325862'
    }, {
        name: 'Mafra, SC <br> GPON',
        color: 'green',
        latitude: '-26.115935',
        longitude: '-49.808624'
    }, {
        name: 'Navegantes, SC <br> HFC',
        color: 'red',
        latitude: '-26.894293',
        longitude: '-48.654593'
    }, {
        name: 'Palhoça, SC <br> HFC',
        color: 'red',
        latitude: '-27.645518',
        longitude: '-48.669661'
    }, {
        name: 'Rio do Sul, SC <br> GPON',
        color: 'green',
        latitude: '-27.215596',
        longitude: '-49.643016'
    }, {
        name: 'Rio Negrinho, SC <br> GPON',
        color: 'green',
        latitude: '-26.259075',
        longitude: '-49.517746'
    }, {
        name: 'São Bento do Sul, SC <br> GPON',
        color: 'green',
        latitude: '-26.249542',
        longitude: '-49.383077'
    }, {
        name: 'São Francisco do Sul, SC <br> GPON',
        color: 'green',
        latitude: '-26.257917',
        longitude: '-48.634372'
    }, {
        name: 'São José, SC <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-27.613577',
        longitude: '-48.636607'
    }, {
        name: 'Timbó, SC <br> GPON',
        color: 'green',
        latitude: '-26.82464',
        longitude: '-49.269039'
    }, {
        name: 'Tubarão, SC <br> GPON',
        color: 'green',
        latitude: '-28.47131',
        longitude: '-49.014371'
    }, {
        name: 'Videira, SC <br> GPON',
        color: 'green',
        latitude: '-27.008624',
        longitude: '-51.154274'
    }, {
        name: 'Xanxerê, SC <br> GPON',
        color: 'green',
        latitude: '-26.874694',
        longitude: '-52.403579'
    }, {
        name: 'Xaxim, SC <br> GPON',
        color: 'green',
        latitude: '-26.959643',
        longitude: '-52.537446'
    }, {
        name: 'Aracaju, SE <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-10.909133',
        longitude: '-37.06766'
    }, {
        name: 'Adamantina, SP <br> GPON',
        color: 'green',
        latitude: '-21.682012',
        longitude: '-51.073695'
    }, {
        name: 'Alumínio, SP <br> GPON',
        color: 'green',
        latitude: '-23.530553',
        longitude: '-47.254571'
    }, {
        name: 'Álvares Machado, SP <br> GPON',
        color: 'green',
        latitude: '-22.076415',
        longitude: '-51.47224'
    }, {
        name: 'Americana, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-22.73736',
        longitude: '-47.333119'
    }, {
        name: 'Américo Brasiliense, SP <br> GPON',
        color: 'green',
        latitude: '-21.728771',
        longitude: '-48.11467'
    }, {
        name: 'Amparo, SP <br> GPON',
        color: 'green',
        latitude: '-22.70879',
        longitude: '-46.772022'
    }, {
        name: 'Andradina, SP <br> GPON',
        color: 'green',
        latitude: '-20.894761',
        longitude: '-51.378568'
    }, {
        name: 'Aparecida, SP <br> HFC',
        color: 'red',
        latitude: '-22.849509',
        longitude: '-45.232496'
    }, {
        name: 'Araçatuba, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-21.207648',
        longitude: '-50.440106'
    }, {
        name: 'Araraquara, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-21.784511',
        longitude: '-48.178014'
    }, {
        name: 'Araras, SP <br> HFC',
        color: 'red',
        latitude: '-22.357238',
        longitude: '-47.384235'
    }, {
        name: 'Artur Nogueira, SP <br> HFC',
        color: 'red',
        latitude: '-22.572737',
        longitude: '-47.172679'
    }, {
        name: 'Arujá, SP <br> GPON',
        color: 'green',
        latitude: '-23.396476',
        longitude: '-46.319983'
    }, {
        name: 'Atibaia, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-23.117059',
        longitude: '-46.556262'
    }, {
        name: 'Avaré, SP <br> GPON',
        color: 'green',
        latitude: '-23.106732',
        longitude: '-48.925052'
    }, {
        name: 'Bady Bassitt, SP <br> GPON',
        color: 'green',
        latitude: '-20.919689',
        longitude: '-49.4385'
    }, {
        name: 'Barretos, SP <br> GPON',
        color: 'green',
        latitude: '-20.553146',
        longitude: '-48.569832'
    }, {
        name: 'Barrinha, SP <br> GPON',
        color: 'green',
        latitude: '-21.186374',
        longitude: '-48.163614'
    }, {
        name: 'Barueri, SP <br> HFC',
        color: 'red',
        latitude: '-23.505689',
        longitude: '-46.879042'
    }, {
        name: 'Batatais, SP <br> GPON',
        color: 'green',
        latitude: '-20.892867',
        longitude: '-47.592149'
    }, {
        name: 'Bauru, SP <br> HFC',
        color: 'red',
        latitude: '-22.324569',
        longitude: '-49.087142'
    }, {
        name: 'Bebedouro, SP <br> GPON',
        color: 'green',
        latitude: '-20.949077',
        longitude: '-48.479083'
    }, {
        name: 'Bertioga, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-23.848568',
        longitude: '-46.139586'
    }, {
        name: 'Birigui, SP <br> GPON',
        color: 'green',
        latitude: '-21.291034',
        longitude: '-50.343162'
    }, {
        name: 'Boituva, SP <br> GPON',
        color: 'green',
        latitude: '-23.285531',
        longitude: '-47.678574'
    }, {
        name: 'Botucatu, SP <br> HFC',
        color: 'red',
        latitude: '-22.883697',
        longitude: '-48.443706'
    }, {
        name: 'Bragança Paulista, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-22.952681',
        longitude: '-46.54188'
    }, {
        name: 'Cabreúva, SP <br> GPON',
        color: 'green',
        latitude: '-23.30533',
        longitude: '-47.136251'
    }, {
        name: 'Caçapava, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-23.099204',
        longitude: '-45.707645'
    }, {
        name: 'Cachoeira Paulista, SP <br> HFC',
        color: 'red',
        latitude: '-22.666498',
        longitude: '-45.015384'
    }, {
        name: 'Caieiras, SP <br> GPON',
        color: 'green',
        latitude: '-23.360729',
        longitude: '-46.73974'
    }, {
        name: 'Cajamar, SP <br> GPON',
        color: 'green',
        latitude: '-23.355014',
        longitude: '-46.878146'
    }, {
        name: 'Campinas, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-22.905346',
        longitude: '-47.06595'
    }, {
        name: 'Campo Limpo Paulista, SP <br> GPON',
        color: 'green',
        latitude: '-23.207791',
        longitude: '-46.788919'
    }, {
        name: 'Campos do Jordão, SP <br> GPON',
        color: 'green',
        latitude: '-22.729618',
        longitude: '-45.583337'
    }, {
        name: 'Capivari, SP <br> HFC',
        color: 'red',
        latitude: '-22.995144',
        longitude: '-47.50715'
    }, {
        name: 'Caraguatatuba, SP <br> GPON',
        color: 'green',
        latitude: '-23.612535',
        longitude: '-45.412533'
    }, {
        name: 'Carapicuíba, SP <br> HFC',
        color: 'red',
        latitude: '-23.523471',
        longitude: '-46.840676'
    }, {
        name: 'Catanduva, SP <br> GPON',
        color: 'green',
        latitude: '-21.131381',
        longitude: '-48.977015'
    }, {
        name: 'Cerquilho, SP <br> GPON',
        color: 'green',
        latitude: '-23.166487',
        longitude: '-47.745862'
    }, {
        name: 'Cordeirópolis, SP <br> GPON',
        color: 'green',
        latitude: '-22.477778',
        longitude: '-47.451886'
    }, {
        name: 'Cosmópolis, SP <br> HFC',
        color: 'red',
        latitude: '-22.641906',
        longitude: '-47.192578'
    }, {
        name: 'Cotia, SP <br> HFC',
        color: 'red',
        latitude: '-23.602177',
        longitude: '-46.91902'
    }, {
        name: 'Cravinhos, SP <br> GPON',
        color: 'green',
        latitude: '-21.337959',
        longitude: '-47.732427'
    }, {
        name: 'Cruzeiro, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-22.572764',
        longitude: '-44.96896'
    }, {
        name: 'Cubatão, SP <br> HFC',
        color: 'red',
        latitude: '-23.891121',
        longitude: '-46.423968'
    }, {
        name: 'Descalvado, SP <br> GPON',
        color: 'green',
        latitude: '-21.900211',
        longitude: '-47.618105'
    }, {
        name: 'Diadema, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-23.681347',
        longitude: '-46.62052'
    }, {
        name: 'Dracena, SP <br> GPON',
        color: 'green',
        latitude: '-21.484311',
        longitude: '-51.535034'
    }, {
        name: 'Elias Fausto, SP <br> HFC',
        color: 'red',
        latitude: '-23.042822',
        longitude: '-47.368153'
    }, {
        name: 'Espírito Santo do Pinhal, SP <br> GPON',
        color: 'green',
        latitude: '-22.190871',
        longitude: '-46.74767'
    }, {
        name: 'Fernandópolis, SP <br> GPON',
        color: 'green',
        latitude: '-20.280556',
        longitude: '-50.247115'
    }, {
        name: 'Franca, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-20.53523',
        longitude: '-47.403861'
    }, {
        name: 'Garça, SP <br> GPON',
        color: 'green',
        latitude: '-22.212516',
        longitude: '-49.654596'
    }, {
        name: 'Guaíra, SP <br> GPON',
        color: 'green',
        latitude: '-20.319591',
        longitude: '-48.31197'
    }, {
        name: 'Guapiaçu, SP <br> GPON',
        color: 'green',
        latitude: '-20.795885',
        longitude: '-49.217201'
    }, {
        name: 'Guararapes, SP <br> GPON',
        color: 'green',
        latitude: '-21.254431',
        longitude: '-50.645338'
    }, {
        name: 'Guaratinguetá, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-22.807534',
        longitude: '-45.193788'
    }, {
        name: 'Guarujá, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-23.988798',
        longitude: '-46.257959'
    }, {
        name: 'Guarulhos, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-23.453758',
        longitude: '-46.533347'
    }, {
        name: 'Hortolândia, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-22.852854',
        longitude: '-47.214259'
    }, {
        name: 'Ibiúna, SP <br> GPON',
        color: 'green',
        latitude: '-23.65961',
        longitude: '-47.223037'
    }, {
        name: 'Indaiatuba, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-23.081591',
        longitude: '-47.210093'
    }, {
        name: 'Iperó, SP <br> GPON',
        color: 'green',
        latitude: '-23.351296',
        longitude: '-47.692717'
    }, {
        name: 'Itanhaém, SP <br> GPON',
        color: 'green',
        latitude: '-24.173633',
        longitude: '-46.787986'
    }, {
        name: 'Itapecerica da Serra, SP <br> HFC',
        color: 'red',
        latitude: '-23.716135',
        longitude: '-46.857193'
    }, {
        name: 'Itapetininga, SP <br> HFC',
        color: 'red',
        latitude: '-23.588607',
        longitude: '-48.048326'
    }, {
        name: 'Itapeva, SP <br> GPON',
        color: 'green',
        latitude: '-23.978823',
        longitude: '-48.876433'
    }, {
        name: 'Itapevi, SP <br> HFC',
        color: 'red',
        latitude: '-23.548774',
        longitude: '-46.932747'
    }, {
        name: 'Itapira, SP <br> GPON',
        color: 'green',
        latitude: '-22.435731',
        longitude: '-46.822434'
    }, {
        name: 'Itaquaquecetuba, SP <br> GPON',
        color: 'green',
        latitude: '-23.483481',
        longitude: '-46.345724'
    }, {
        name: 'Itatiba, SP <br> GPON',
        color: 'green',
        latitude: '-23.003497',
        longitude: '-46.846353'
    }, {
        name: 'Itu, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-23.254397',
        longitude: '-47.292688'
    }, {
        name: 'Itupeva, SP <br> GPON',
        color: 'green',
        latitude: '-23.152635',
        longitude: '-47.059262'
    }, {
        name: 'Ituverava, SP <br> GPON',
        color: 'green',
        latitude: '-20.335465',
        longitude: '-47.790207'
    }, {
        name: 'Jaboticabal, SP <br> GPON',
        color: 'green',
        latitude: '-21.252037',
        longitude: '-48.325223'
    }, {
        name: 'Jacareí, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-23.29829',
        longitude: '-45.965814'
    }, {
        name: 'Jales, SP <br> GPON',
        color: 'green',
        latitude: '-20.267227',
        longitude: '-50.549442'
    }, {
        name: 'Jandira, SP <br> HFC',
        color: 'red',
        latitude: '-23.527537',
        longitude: '-46.902314'
    }, {
        name: 'Jardinópolis, SP <br> GPON',
        color: 'green',
        latitude: '-21.017612',
        longitude: '-47.760583'
    }, {
        name: 'Jarinu, SP <br> GPON',
        color: 'green',
        latitude: '-23.103855',
        longitude: '-46.728015'
    }, {
        name: 'Jaú, SP <br> HFC',
        color: 'red',
        latitude: '-22.293585',
        longitude: '-48.559193'
    }, {
        name: 'José Bonifácio, SP <br> GPON',
        color: 'green',
        latitude: '-21.055062',
        longitude: '-49.689233'
    }, {
        name: 'Jundiaí, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-23.185218',
        longitude: '-46.897358'
    }, {
        name: 'Laranjal Paulista, SP <br> GPON',
        color: 'green',
        latitude: '-23.050564',
        longitude: '-47.837549'
    }, {
        name: 'Leme, SP <br> GPON',
        color: 'green',
        latitude: '-22.180857',
        longitude: '-47.384109'
    }, {
        name: 'Lençóis Paulista, SP <br> GPON',
        color: 'green',
        latitude: '-22.602693',
        longitude: '-48.803683'
    }, {
        name: 'Limeira, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-22.56605',
        longitude: '-47.396987'
    }, {
        name: 'Lins, SP <br> GPON',
        color: 'green',
        latitude: '-21.67182',
        longitude: '-49.752555'
    }, {
        name: 'Lorena, SP <br> HFC',
        color: 'red',
        latitude: '-22.73338',
        longitude: '-45.11968'
    }, {
        name: 'Louveira, SP <br> GPON',
        color: 'green',
        latitude: '-23.085572',
        longitude: '-46.948369'
    }, {
        name: 'Mairinque, SP <br> GPON',
        color: 'green',
        latitude: '-23.539822',
        longitude: '-47.184995'
    }, {
        name: 'Marília, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-22.217108',
        longitude: '-49.95006'
    }, {
        name: 'Matão, SP <br> GPON',
        color: 'green',
        latitude: '-21.602511',
        longitude: '-48.363968'
    }, {
        name: 'Mauá, SP <br> HFC',
        color: 'red',
        latitude: '-23.66767',
        longitude: '-46.461263'
    }, {
        name: 'Mirandópolis, SP <br> GPON',
        color: 'green',
        latitude: '-21.131345',
        longitude: '-51.1035'
    }, {
        name: 'Mirassol, SP <br> GPON',
        color: 'green',
        latitude: '-20.816874',
        longitude: '-49.52061'
    }, {
        name: 'Mococa, SP <br> GPON',
        color: 'green',
        latitude: '-21.464731',
        longitude: '-47.002405'
    }, {
        name: 'Mogi Guaçu, SP <br> HFC',
        color: 'red',
        latitude: '-22.367453',
        longitude: '-46.9428'
    }, {
        name: 'Mongaguá, SP <br> GPON',
        color: 'green',
        latitude: '-24.080901',
        longitude: '-46.626526'
    }, {
        name: 'Monte Alto, SP <br> GPON',
        color: 'green',
        latitude: '-21.265545',
        longitude: '-48.497066'
    }, {
        name: 'Monte Mor, SP <br> HFC',
        color: 'red',
        latitude: '-22.945043',
        longitude: '-47.312182'
    }, {
        name: 'Morungaba, SP <br> GPON',
        color: 'green',
        latitude: '-22.881071',
        longitude: '-46.789601'
    }, {
        name: 'Nova Odessa, SP <br> HFC',
        color: 'red',
        latitude: '-22.783186',
        longitude: '-47.294059'
    }, {
        name: 'Orlândia, SP <br> GPON',
        color: 'green',
        latitude: '-20.716925',
        longitude: '-47.885205'
    }, {
        name: 'Osasco, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-23.53239',
        longitude: '-46.791555'
    }, {
        name: 'Ourinhos, SP <br> GPON',
        color: 'green',
        latitude: '-22.979695',
        longitude: '-49.869702'
    }, {
        name: 'Paulínia, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-22.754178',
        longitude: '-47.148776'
    }, {
        name: 'Pedreira, SP <br> GPON',
        color: 'green',
        latitude: '-22.741347',
        longitude: '-46.894846'
    }, {
        name: 'Penápolis, SP <br> GPON',
        color: 'green',
        latitude: '-21.414765',
        longitude: '-50.076855'
    }, {
        name: 'Peruíbe, SP <br> GPON',
        color: 'green',
        latitude: '-24.311974',
        longitude: '-47.0012'
    }, {
        name: 'Pindamonhangaba, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-22.92463',
        longitude: '-45.461264'
    }, {
        name: 'Piracaia, SP <br> GPON',
        color: 'green',
        latitude: '-23.052545',
        longitude: '-46.359374'
    }, {
        name: 'Piracicaba, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-22.733801',
        longitude: '-47.647612'
    }, {
        name: 'Pirassununga, SP <br> GPON',
        color: 'green',
        latitude: '-21.995982',
        longitude: '-47.425746'
    }, {
        name: 'Poá, SP <br> HFC',
        color: 'red',
        latitude: '-23.533285',
        longitude: '-46.347292'
    }, {
        name: 'Pontal, SP <br> GPON',
        color: 'green',
        latitude: '-21.021565',
        longitude: '-48.042261'
    }, {
        name: 'Porto Feliz, SP <br> HFC',
        color: 'red',
        latitude: '-23.209318',
        longitude: '-47.52512'
    }, {
        name: 'Porto Ferreira, SP <br> GPON',
        color: 'green',
        latitude: '-21.849814',
        longitude: '-47.487034'
    }, {
        name: 'Potim, SP <br> HFC',
        color: 'red',
        latitude: '-22.834327',
        longitude: '-45.255205'
    }, {
        name: 'Potirendaba, SP <br> GPON',
        color: 'green',
        latitude: '-21.042789',
        longitude: '-49.381509'
    }, {
        name: 'Praia Grande, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-24.008378',
        longitude: '-46.412057'
    }, {
        name: 'Presidente Bernardes, SP <br> GPON',
        color: 'green',
        latitude: '-22.008198',
        longitude: '-51.556507'
    }, {
        name: 'Presidente Prudente, SP <br> HFC',
        color: 'red',
        latitude: '-22.120654',
        longitude: '-51.392526'
    }, {
        name: 'Promissão, SP <br> GPON',
        color: 'green',
        latitude: '-21.535572',
        longitude: '-49.85989'
    }, {
        name: 'Rafard, SP <br> HFC',
        color: 'red',
        latitude: '-23.010508',
        longitude: '-47.531795'
    }, {
        name: 'Registro, SP <br> GPON',
        color: 'green',
        latitude: '-24.497942',
        longitude: '-47.844895'
    }, {
        name: 'Ribeirão Pires, SP <br> GPON',
        color: 'green',
        latitude: '-23.706669',
        longitude: '-46.405805'
    }, {
        name: 'Ribeirão Preto, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-21.169923',
        longitude: '-47.809875'
    }, {
        name: 'Rio Claro, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-22.398378',
        longitude: '-47.554632'
    }, {
        name: 'Salto, SP <br> HFC',
        color: 'red',
        latitude: '-23.199592',
        longitude: '-47.293087'
    }, {
        name: 'Santa Cruz do Rio Pardo, SP <br> GPON',
        color: 'green',
        latitude: '-22.89875',
        longitude: '-49.635444'
    }, {
        name: 'Santa Gertrudes, SP <br> GPON',
        color: 'green',
        latitude: '-22.457229',
        longitude: '-47.52716'
    }, {
        name: 'Santa Isabel, SP <br> GPON',
        color: 'green',
        latitude: '-23.317194',
        longitude: '-46.223668'
    }, {
        name: 'Santa Rosa de Viterbo, SP <br> GPON',
        color: 'green',
        latitude: '-21.477568',
        longitude: '-47.362213'
    }, {
        name: 'Santana de Parnaíba, SP <br> HFC',
        color: 'red',
        latitude: '-23.442514',
        longitude: '-46.922215'
    }, {
        name: 'Santo André, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-23.67373',
        longitude: '-46.543154'
    }, {
        name: 'Santos, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-23.953543',
        longitude: '-46.335042'
    }, {
        name: 'São Bernardo do Campo, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-23.691412',
        longitude: '-46.564617'
    }, {
        name: 'São Caetano do Sul, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-23.62287',
        longitude: '-46.554797'
    }, {
        name: 'São Carlos, SP <br> HFC',
        color: 'red',
        latitude: '-22.017395',
        longitude: '-47.885971'
    }, {
        name: 'São João da Boa Vista, SP <br> GPON',
        color: 'green',
        latitude: '-21.970747',
        longitude: '-46.794356'
    }, {
        name: 'São Joaquim da Barra, SP <br> GPON',
        color: 'green',
        latitude: '-20.581158',
        longitude: '-47.859316'
    }, {
        name: 'São José do Rio Pardo, SP <br> GPON',
        color: 'green',
        latitude: '-21.595288',
        longitude: '-46.887303'
    }, {
        name: 'São José do Rio Preto, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-20.811289',
        longitude: '-49.375767'
    }, {
        name: 'São José Dos Campos, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-23.189554',
        longitude: '-45.884115'
    }, {
        name: 'São Paulo, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-23.532905',
        longitude: '-46.63952'
    }, {
        name: 'São Roque, SP <br> GPON',
        color: 'green',
        latitude: '-23.522598',
        longitude: '-47.13567'
    }, {
        name: 'São Sebastião, SP <br> GPON',
        color: 'green',
        latitude: '-23.795059',
        longitude: '-45.414314'
    }, {
        name: 'São Vicente, SP <br> HFC',
        color: 'red',
        latitude: '-23.957353',
        longitude: '-46.388333'
    }, {
        name: 'Serra Negra, SP <br> GPON',
        color: 'green',
        latitude: '-22.613941',
        longitude: '-46.703271'
    }, {
        name: 'Serrana, SP <br> GPON',
        color: 'green',
        latitude: '-21.204336',
        longitude: '-47.595239'
    }, {
        name: 'Sertãozinho, SP <br> HFC',
        color: 'red',
        latitude: '-21.131596',
        longitude: '-47.987496'
    }, {
        name: 'Sorocaba, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-23.496886',
        longitude: '-47.445073'
    }, {
        name: 'Sumaré, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-22.820416',
        longitude: '-47.272823'
    }, {
        name: 'Suzano, SP <br> HFC',
        color: 'red',
        latitude: '-23.544828',
        longitude: '-46.311181'
    }, {
        name: 'Taboão da Serra, SP <br> HFC',
        color: 'red',
        latitude: '-23.601867',
        longitude: '-46.752637'
    }, {
        name: 'Tatuí, SP <br> GPON',
        color: 'green',
        latitude: '-23.348731',
        longitude: '-47.84612'
    }, {
        name: 'Taubaté, SP <br> HFC',
        color: 'red',
        latitude: '-23.010414',
        longitude: '-45.55926'
    }, {
        name: 'Tietê, SP <br> HFC',
        color: 'red',
        latitude: '-23.110098',
        longitude: '-47.716378'
    }, {
        name: 'Tremembé, SP <br> GPON',
        color: 'green',
        latitude: '-22.95714',
        longitude: '-45.547526'
    }, {
        name: 'Ubatuba, SP <br> GPON',
        color: 'green',
        latitude: '-23.433162',
        longitude: '-45.083415'
    }, {
        name: 'Valinhos, SP <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-22.969805',
        longitude: '-46.997367'
    }, {
        name: 'Vargem Grande Paulista, SP <br> HFC',
        color: 'red',
        latitude: '-23.599338',
        longitude: '-47.022038'
    }, {
        name: 'Várzea Paulista, SP <br> GPON',
        color: 'green',
        latitude: '-23.213582',
        longitude: '-46.823444'
    }, {
        name: 'Vinhedo, SP <br> HFC',
        color: 'red',
        latitude: '-23.030184',
        longitude: '-46.983312'
    }, {
        name: 'Votorantim, SP <br> HFC',
        color: 'red',
        latitude: '-23.54459',
        longitude: '-47.438753'
    }, {
        name: 'Votuporanga, SP <br> GPON',
        color: 'green',
        latitude: '-20.423659',
        longitude: '-49.978112'
    }, {
        name: 'Palmas, TO <br> Sobreposição HFC e GPON',
        color: 'yellow',
        latitude: '-10.239973',
        longitude: '-48.355751'
    }, {
        name: 'Paraíso do Tocantins, TO <br> GPON',
        color: 'green',
        latitude: '-10.174998',
        longitude: '-48.882269'
    }
];